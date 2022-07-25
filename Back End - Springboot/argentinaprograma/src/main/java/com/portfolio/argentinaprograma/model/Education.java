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
public class Education {
    
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    
    @Column(name = "name")
    private String name;
    
    @Column(name = "desc")
    private String desc;
    
    @Column(name = "start")
    private int start;
    
    @Column(name = "end")
    private int end;
    
    public Education() {
    }
    
    public Education(Long id, String name, String desc, int start, int end) {
        this.id = id;
        this.name = name;
        this.desc = desc;
        this.start = start;
        this.end = end;
    }
}
