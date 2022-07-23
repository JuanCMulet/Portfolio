package com.portfolio.argentinaprograma.model;

import lombok.Getter;
import lombok.Setter;


@Getter @Setter
public class Experience {
    
    private Long id;
    private String name;
    private String desc;
    private int start;
    private int end;
    
     public Experience() {
    }
    
    public Experience(Long id, String name, String desc, int start, int end) {
        this.id = id;
        this.name = name;
        this.desc = desc;
        this.start = start;
        this.end = end;
    }
}
