package com.innovationhub.controller;

import com.innovationhub.entity.User;
import com.innovationhub.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/dummy-users")
@CrossOrigin(origins = "*", maxAge = 3600)
public class DummyUserController {
    @Autowired
    private UserRepository userRepository;

    @GetMapping
    public ResponseEntity<List<User>> getAllDummyUsers() {
        List<User> users = userRepository.findAll();
        return ResponseEntity.ok(users);
    }
}
