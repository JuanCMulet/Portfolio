package com.portfolio.argentinaprograma.model;

import lombok.Getter;
import lombok.Setter;


@Getter @Setter
public class Experiences {
    
    private Long id;
    private String name;
    private String desc;
    private int start;
    private int end;
    
     public Experiences() {
    }
    
    public Experiences(Long id, String name, String desc, int start, int end) {
        this.id = id;
        this.name = name;
        this.desc = desc;
        this.start = start;
        this.end = end;
    }
}
