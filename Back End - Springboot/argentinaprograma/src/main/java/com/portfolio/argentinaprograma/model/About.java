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
public class About {
    
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    
    @Column(name = "name")
    private String name;
    
    @Column(name = "backImage")
    private String backImage;
    
    @Column(name = "profileImage")
    private String profileImage;
    
    @Column(name = "position")
    private String position;
    
    @Column(name = "desc")
    private String desc;
    
    public About() {
    }
    
    public About(Long id, String name, String backImage, String profileImage, String position, String desc) {
        this.id = id;
        this.name = name;
        this.backImage = backImage;
        this.profileImage = profileImage;
        this.position = position;
        this.desc = desc;
    }
}
