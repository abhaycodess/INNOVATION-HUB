package com.innovationhub.controller;


import org.springframework.web.multipart.MultipartFile;
import org.springframework.util.StringUtils;
import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.UUID;

import com.innovationhub.dto.UpdatePostRequest;
import com.innovationhub.entity.Post;
import com.innovationhub.entity.User;
import com.innovationhub.repository.UserRepository;
import com.innovationhub.service.PostService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;


import java.util.List;
import java.util.Objects;


@RestController
@RequestMapping("/api/posts") // Changed from /api/ideas to /api/posts
@CrossOrigin(origins = "*", maxAge = 3600)
public class PostController {

    @Autowired
    private PostService postService;

    @Autowired
    private UserRepository userRepository;

    @PostMapping(consumes = {"multipart/form-data"})
    public ResponseEntity<Post> createPostWithFile(
            @RequestParam("content") String content,
            @RequestParam(value = "image", required = false) MultipartFile image,
            @RequestParam(value = "video", required = false) MultipartFile video,
            Authentication authentication) throws IOException {
        UserDetails userDetails = (UserDetails) authentication.getPrincipal();
        User currentUser = userRepository.findByUsername(userDetails.getUsername())
                .orElseThrow(() -> new RuntimeException("User not found"));

        Post post = new Post();
        post.setContent(content);
        post.setAuthor(currentUser);

        // File upload directory (ensure this exists or create it)
        String uploadDir = System.getProperty("user.dir") + "/uploads";
        File dir = new File(uploadDir);
        if (!dir.exists()) dir.mkdirs();

        if (image != null && !image.isEmpty()) {
            String originalName = image.getOriginalFilename() != null ? image.getOriginalFilename() : "image";
            String imageFileName = UUID.randomUUID() + "_" + StringUtils.cleanPath(Objects.requireNonNull(originalName));
            Path imagePath = Paths.get(uploadDir, imageFileName);
            Files.copy(image.getInputStream(), imagePath);
            post.setImageUrl("/uploads/" + imageFileName);
        }
        if (video != null && !video.isEmpty()) {
            String originalName = video.getOriginalFilename() != null ? video.getOriginalFilename() : "video";
            String videoFileName = UUID.randomUUID() + "_" + StringUtils.cleanPath(Objects.requireNonNull(originalName));
            Path videoPath = Paths.get(uploadDir, videoFileName);
            Files.copy(video.getInputStream(), videoPath);
            post.setVideoUrl("/uploads/" + videoFileName);
        }

        Post createdPost = postService.createPost(post);
        return new ResponseEntity<>(createdPost, HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<List<Post>> getAllPosts() {
        List<Post> posts = postService.findAllPosts();
        return ResponseEntity.ok(posts);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Post> getPostById(@PathVariable Long id) {
        return postService.findPostById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PutMapping("/{id}")
    public ResponseEntity<Post> updatePost(@PathVariable Long id, @Valid @RequestBody UpdatePostRequest postRequest, Authentication authentication) {
        UserDetails userDetails = (UserDetails) authentication.getPrincipal();
        User currentUser = userRepository.findByUsername(userDetails.getUsername())
                .orElseThrow(() -> new RuntimeException("User not found"));

        Post existingPost = postService.findPostById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Post not found"));

        if (!Objects.equals(existingPost.getAuthor().getId(), currentUser.getId())) {
            throw new ResponseStatusException(HttpStatus.FORBIDDEN, "User not authorized to update this post");
        }

        Post postToUpdate = new Post();
        postToUpdate.setContent(postRequest.getContent());
        postToUpdate.setImageUrl(postRequest.getImageUrl());
        postToUpdate.setVideoUrl(postRequest.getVideoUrl());
        postToUpdate.setLinkUrl(postRequest.getLinkUrl());

        return postService.updatePost(id, postToUpdate)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<HttpStatus> deletePost(@PathVariable Long id, Authentication authentication) {
        UserDetails userDetails = (UserDetails) authentication.getPrincipal();
        User currentUser = userRepository.findByUsername(userDetails.getUsername())
                .orElseThrow(() -> new RuntimeException("User not found"));

        Post existingPost = postService.findPostById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Post not found"));

        if (!Objects.equals(existingPost.getAuthor().getId(), currentUser.getId())) {
            throw new ResponseStatusException(HttpStatus.FORBIDDEN, "User not authorized to delete this post");
        }

        postService.deletePost(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}