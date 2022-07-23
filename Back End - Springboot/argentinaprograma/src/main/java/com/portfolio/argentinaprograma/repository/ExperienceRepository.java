package com.portfolio.argentinaprograma.repository;

import com.portfolio.argentinaprograma.model.Experience;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ExperienceRepository extends JpaRepository <Experience, Long> {
    
}
