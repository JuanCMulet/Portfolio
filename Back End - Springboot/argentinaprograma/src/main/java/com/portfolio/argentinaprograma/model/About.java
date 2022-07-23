package com.portfolio.argentinaprograma.model;

import lombok.Getter;
import lombok.Setter;


@Getter @Setter
public class About {
    
    private Long id;
    private String name;
    private String backImage;
    private String profileImage;
    private String position;
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
