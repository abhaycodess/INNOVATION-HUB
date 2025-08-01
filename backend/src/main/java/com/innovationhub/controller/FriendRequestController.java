package com.innovationhub.controller;

import com.innovationhub.entity.FriendRequest;
import com.innovationhub.entity.User;
import com.innovationhub.repository.UserRepository;
import com.innovationhub.service.FriendRequestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@RestController
@RequestMapping("/api/friend-requests")
@CrossOrigin(origins = "*", maxAge = 3600)
public class FriendRequestController {

    @Autowired
    private FriendRequestService friendRequestService;

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/send/{receiverId}")
    public ResponseEntity<FriendRequest> sendFriendRequest(@PathVariable Long receiverId, Authentication authentication) {
        UserDetails userDetails = (UserDetails) authentication.getPrincipal();
        User sender = userRepository.findByUsername(userDetails.getUsername())
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.UNAUTHORIZED, "User not found"));

        User receiver = userRepository.findById(receiverId)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Receiver not found"));

        try {
            FriendRequest friendRequest = friendRequestService.sendFriendRequest(sender, receiver);
            return ResponseEntity.ok(friendRequest);
        } catch (IllegalStateException e) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, e.getMessage());
        }
    }

    @PostMapping("/{requestId}/accept")
    public ResponseEntity<FriendRequest> acceptFriendRequest(@PathVariable Long requestId, Authentication authentication) {
        // Authorization check can be added here to ensure the user is the receiver
        try {
            FriendRequest friendRequest = friendRequestService.acceptFriendRequest(requestId);
            return ResponseEntity.ok(friendRequest);
        } catch (IllegalStateException e) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, e.getMessage());
        }
    }

    @PostMapping("/{requestId}/decline")
    public ResponseEntity<FriendRequest> declineFriendRequest(@PathVariable Long requestId, Authentication authentication) {
        // Authorization check can be added here to ensure the user is the receiver
        try {
            FriendRequest friendRequest = friendRequestService.declineFriendRequest(requestId);
            return ResponseEntity.ok(friendRequest);
        } catch (IllegalStateException e) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, e.getMessage());
        }
    }

    @GetMapping("/pending")
    public ResponseEntity<List<FriendRequest>> getPendingFriendRequests(Authentication authentication) {
        UserDetails userDetails = (UserDetails) authentication.getPrincipal();
        User currentUser = userRepository.findByUsername(userDetails.getUsername())
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.UNAUTHORIZED, "User not found"));

        List<FriendRequest> pendingRequests = friendRequestService.getPendingFriendRequests(currentUser);
        return ResponseEntity.ok(pendingRequests);
    }
}
