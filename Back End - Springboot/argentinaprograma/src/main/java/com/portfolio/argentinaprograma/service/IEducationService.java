package com.portfolio.argentinaprograma.service;

import com.portfolio.argentinaprograma.model.Education;
import java.util.List;

public interface IEducationService {
    
    public List<Education> verEducations();
    
    public void crearEducation(Education user);
    
    public void borrarEducation(Long id);
    
    public Education buscarEducation(Long id);
    
    public Education cambiarEducation(Education user, Long id);
    
}
