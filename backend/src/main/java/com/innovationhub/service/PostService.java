package com.innovationhub.service;

import com.innovationhub.entity.Post;
import com.innovationhub.repository.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PostService {

    @Autowired
    private PostRepository postRepository;

    public Post createPost(Post post) {
        return postRepository.save(post);
    }

    public List<Post> findAllPosts() {
        return postRepository.findAll();
    }

    public Optional<Post> findPostById(Long id) {
        return postRepository.findById(id);
    }

    public Optional<Post> updatePost(Long id, Post postUpdateRequest) {
        return postRepository.findById(id).map(post -> {
            if (postUpdateRequest.getContent() != null) {
                post.setContent(postUpdateRequest.getContent());
            }
            if (postUpdateRequest.getImageUrl() != null) {
                post.setImageUrl(postUpdateRequest.getImageUrl());
            }
            if (postUpdateRequest.getVideoUrl() != null) {
                post.setVideoUrl(postUpdateRequest.getVideoUrl());
            }
            if (postUpdateRequest.getLinkUrl() != null) {
                post.setLinkUrl(postUpdateRequest.getLinkUrl());
            }
            return postRepository.save(post);
        });
    }

    public void deletePost(Long id) {
        postRepository.deleteById(id);
    }
}