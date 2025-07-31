package com.innovationhub.service;

import com.innovationhub.entity.FriendRequest;
import com.innovationhub.entity.FriendRequestStatus;
import com.innovationhub.entity.User;
import com.innovationhub.repository.FriendRequestRepository;
import com.innovationhub.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class FriendRequestService {

    @Autowired
    private FriendRequestRepository friendRequestRepository;

    @Autowired
    private UserRepository userRepository;

    public FriendRequest sendFriendRequest(User sender, User receiver) {
        // Check if a request already exists
        if (friendRequestRepository.findBySenderAndReceiver(sender, receiver).isPresent()) {
            throw new IllegalStateException("Friend request already sent.");
        }

        // Check if they are already friends
        if (sender.getFriends().contains(receiver)) {
            throw new IllegalStateException("Users are already friends.");
        }

        FriendRequest friendRequest = new FriendRequest();
        friendRequest.setSender(sender);
        friendRequest.setReceiver(receiver);
        friendRequest.setStatus(FriendRequestStatus.PENDING);
        return friendRequestRepository.save(friendRequest);
    }

    @Transactional
    public FriendRequest acceptFriendRequest(Long requestId) {
        FriendRequest friendRequest = friendRequestRepository.findById(requestId)
                .orElseThrow(() -> new IllegalStateException("Friend request not found."));

        if (friendRequest.getStatus() != FriendRequestStatus.PENDING) {
            throw new IllegalStateException("Friend request is not pending.");
        }

        User sender = friendRequest.getSender();
        User receiver = friendRequest.getReceiver();

        sender.getFriends().add(receiver);
        receiver.getFriends().add(sender);

        userRepository.save(sender);
        userRepository.save(receiver);

        friendRequest.setStatus(FriendRequestStatus.ACCEPTED);
        return friendRequestRepository.save(friendRequest);
    }

    @Transactional
    public FriendRequest declineFriendRequest(Long requestId) {
        FriendRequest friendRequest = friendRequestRepository.findById(requestId)
                .orElseThrow(() -> new IllegalStateException("Friend request not found."));

        if (friendRequest.getStatus() != FriendRequestStatus.PENDING) {
            throw new IllegalStateException("Friend request is not pending.");
        }

        friendRequest.setStatus(FriendRequestStatus.DECLINED);
        return friendRequestRepository.save(friendRequest);
    }

    public List<FriendRequest> getPendingFriendRequests(User user) {
        return friendRequestRepository.findByReceiverAndStatus(user, FriendRequestStatus.PENDING);
    }
}
