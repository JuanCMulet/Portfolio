package com.portfolio.argentinaprograma.model;

import lombok.Getter;
import lombok.Setter;


@Getter @Setter
public class Skills {
    
    private Long id;
    private String name;
    private int level;
    
    public Skills() {
    }
    
    public Skills(Long id, String name, int level) {
        this.id = id;
        this.name = name;
        this.level = level;
    }
}
