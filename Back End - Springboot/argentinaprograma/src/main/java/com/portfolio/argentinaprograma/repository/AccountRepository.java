package com.portfolio.argentinaprograma.repository;

import com.portfolio.argentinaprograma.model.Account;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AccountRepository extends JpaRepository <Account, Long> {
    
}
