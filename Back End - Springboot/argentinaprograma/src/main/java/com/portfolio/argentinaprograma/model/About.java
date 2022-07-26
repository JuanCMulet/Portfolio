package com.portfolio.argentinaprograma.model;

import java.io.Serializable;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter 
@Setter
@Table(name = "About")
public class About implements Serializable {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(name = "name")
    private String name;
    
    @Column(name = "backImage")
    private String backImage;
    
    @Column(name = "profileImage")
    private String profileImage;
    
    @Column(name = "position")
    private String position;
    
    @Column(name = "description")
    private String description;
    
}
