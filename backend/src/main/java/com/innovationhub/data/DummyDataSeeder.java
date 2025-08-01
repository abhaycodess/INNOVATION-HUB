package com.innovationhub.data;

import com.innovationhub.entity.User;
import com.innovationhub.entity.Post;
import com.innovationhub.repository.UserRepository;
import com.innovationhub.repository.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

@Component
public class DummyDataSeeder implements CommandLineRunner {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private PostRepository postRepository;
    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public void run(String... args) {
        if (userRepository.count() < 20) {
            List<User> users = new ArrayList<>();
            for (int i = 1; i <= 30; i++) {
                String username = "user" + i;
                String email = username + "@example.com";
                String password = passwordEncoder.encode("password");
                User user = new User(username, email, password);
                users.add(userRepository.save(user));
            }
            // Create dummy posts
            Random rand = new Random();
            for (int i = 1; i <= 30; i++) {
                User author = users.get(rand.nextInt(users.size()));
                Post post = new Post();
                post.setContent("This is a dummy post #" + i + " by @" + author.getUsername());
                post.setAuthor(author);
                postRepository.save(post);
            }
        }
    }
}
