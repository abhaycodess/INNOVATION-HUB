package com.innovationhub.repository;

import com.innovationhub.entity.Post;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IdeaRepository extends JpaRepository<Post, Long> {
    // We can add custom query methods here later, like findByCategory, etc.
}