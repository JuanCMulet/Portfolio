package com.portfolio.argentinaprograma.model;

import lombok.Getter;
import lombok.Setter;


@Getter @Setter
public class Project {
    
    private Long id;
    private String name;
    private String desc;
    private String url;
    
    public Project() {
    }
    
    public Project(Long id, String name, String desc, String url) {
        this.id = id;
        this.name = name;
        this.desc = desc;
        this.url = url;
    }
}
