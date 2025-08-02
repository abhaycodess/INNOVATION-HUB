package com.innovationhub.controller;

import com.innovationhub.entity.User;
import com.innovationhub.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import org.springframework.web.bind.annotation.CrossOrigin;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "*", maxAge = 3600)
public class MeController {
    @Autowired
    private UserRepository userRepository;

    @GetMapping("/me")
    public ResponseEntity<?> getCurrentUser(@AuthenticationPrincipal UserDetails userDetails) {
        if (userDetails == null) {
            return ResponseEntity.status(401).body("Unauthorized");
        }
        User user = userRepository.findByUsername(userDetails.getUsername()).orElse(null);
        if (user == null) {
            return ResponseEntity.status(404).body("User not found");
        }
        // Return only safe fields
        return ResponseEntity.ok(new UserProfileResponse(user.getId(), user.getUsername(), user.getEmail(), user.getProfilePic()));
    }

    public static class UserProfileResponse {
        public Long id;
        public String username;
        public String email;
        public String profilePic;
        public UserProfileResponse(Long id, String username, String email, String profilePic) {
            this.id = id;
            this.username = username;
            this.email = email;
            this.profilePic = profilePic;
        }
    }
}
