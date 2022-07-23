package com.portfolio.argentinaprograma.service;

import com.portfolio.argentinaprograma.model.Skill;
import java.util.List;

public interface ISkillService {
    
    public List<Skill> verSkills();
    
    public void crearSkill(Skill user);
    
    public void borrarSkill(Long id);
    
    public Skill buscarSkill(Long id);
    
    public Skill cambiarSkill(Skill user, Long id);
    
}
