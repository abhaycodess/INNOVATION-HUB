package com.innovationhub.repository;

import com.innovationhub.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    
    // Find a user by their username
    Optional<User> findByUsername(String username);

    // Check if a user exists by username
    Boolean existsByUsername(String username);

    // Check if a user exists by email
    Boolean existsByEmail(String email);
}