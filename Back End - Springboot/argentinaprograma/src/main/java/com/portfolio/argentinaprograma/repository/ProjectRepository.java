package com.portfolio.argentinaprograma.repository;

import com.portfolio.argentinaprograma.model.Project;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProjectRepository extends JpaRepository <Project, Long> {
    
}
