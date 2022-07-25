package com.portfolio.argentinaprograma.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Getter 
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Account {
    
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    
    @Column(name = "username")
    private String username;
 
    @Column(name = "password")
    private String password;
    
    public Account() {
        
    }
    
    public Account(Long id, String username, String password) {
        this.id = id;
        this.username = username;
        this.password = password;
    }
    
}
