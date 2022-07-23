package com.portfolio.argentinaprograma.repository;

import com.portfolio.argentinaprograma.model.About;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AboutRepository extends JpaRepository <About, Long> {
    
}
