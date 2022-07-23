package com.portfolio.argentinaprograma.service;

import com.portfolio.argentinaprograma.exception.ResourceNotFoundException;
import com.portfolio.argentinaprograma.model.Experience;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.portfolio.argentinaprograma.repository.ExperienceRepository;

@Service
public class ExperienceService implements IExperienceService {
    
    @Autowired
    public ExperienceRepository experienceRepo;

    @Override
    public List<Experience> verExperiences() {
        return experienceRepo.findAll();
    }

    @Override
    public void crearExperience(Experience exp) {
        experienceRepo.save(exp);
    }

    @Override
    public void borrarExperience(Long id) {
        experienceRepo.deleteById(id);
    }

    @Override
    public Experience buscarExperience(Long id) {
        throw new UnsupportedOperationException("Not supported yet."); // Generated from nbfs://nbhost/SystemFileSystem/Templates/Classes/Code/GeneratedMethodBody
    }

    @Override
    public Experience cambiarExperience(Experience exp, Long id) {
        Experience chgExp = experienceRepo.findById(id)
                .orElseThrow( () -> new ResourceNotFoundException("Experience not found with id: " + id) );
        
        chgExp.setName(exp.getName());
        chgExp.setDesc(exp.getDesc());
        chgExp.setStart(exp.getStart());
        chgExp.setEnd(exp.getEnd());
        
        experienceRepo.save(chgExp);
        return null;
    }
    
}
