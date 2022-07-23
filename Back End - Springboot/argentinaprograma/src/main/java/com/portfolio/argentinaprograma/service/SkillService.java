package com.portfolio.argentinaprograma.service;

import com.portfolio.argentinaprograma.exception.ResourceNotFoundException;
import com.portfolio.argentinaprograma.model.Skill;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.portfolio.argentinaprograma.repository.SkillRepository;

@Service
public class SkillService implements ISkillService {
    
    @Autowired
    public SkillRepository skillRepo;

    @Override
    public List<Skill> verSkills() {
        return skillRepo.findAll();
    }

    @Override
    public void crearSkill(Skill skill) {
        skillRepo.save(skill);
    }

    @Override
    public void borrarSkill(Long id) {
        skillRepo.deleteById(id);
    }

    @Override
    public Skill buscarSkill(Long id) {
        throw new UnsupportedOperationException("Not supported yet."); // Generated from nbfs://nbhost/SystemFileSystem/Templates/Classes/Code/GeneratedMethodBody
    }

    @Override
    public Skill cambiarSkill(Skill skill, Long id) {
        Skill chgSkill = skillRepo.findById(id)
                .orElseThrow( () -> new ResourceNotFoundException("Skill not found with id: " + id) );
        
        chgSkill.setName(skill.getName());
        chgSkill.setLevel(skill.getLevel());

        skillRepo.save(chgSkill);
        return null;
    }
    
}
