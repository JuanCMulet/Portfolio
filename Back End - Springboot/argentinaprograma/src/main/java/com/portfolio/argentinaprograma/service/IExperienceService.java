package com.portfolio.argentinaprograma.service;

import com.portfolio.argentinaprograma.model.Experience;
import java.util.List;

public interface IExperienceService {
    
    public List<Experience> verExperiences();
    
    public void crearExperience(Experience user);
    
    public void borrarExperience(Long id);
    
    public Experience buscarExperience(Long id);
    
    public Experience cambiarExperience(Experience user, Long id);
    
}
