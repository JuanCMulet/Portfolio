package com.portfolio.argentinaprograma.service;

import com.portfolio.argentinaprograma.exception.ResourceNotFoundException;
import com.portfolio.argentinaprograma.model.Education;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.portfolio.argentinaprograma.repository.EducationRepository;

@Service
public class EducationService implements IEducationService {
    
    @Autowired
    public EducationRepository educationRepo;

    @Override
    public List<Education> verEducations() {
        return educationRepo.findAll();
    }

    @Override
    public void crearEducation(Education educ) {
        educationRepo.save(educ);
    }

    @Override
    public void borrarEducation(Long id) {
        educationRepo.deleteById(id);
    }

    @Override
    public Education buscarEducation(Long id) {
        throw new UnsupportedOperationException("Not supported yet."); // Generated from nbfs://nbhost/SystemFileSystem/Templates/Classes/Code/GeneratedMethodBody
    }

    @Override
    public Education cambiarEducation(Education educ, Long id) {
        Education chgEduc = educationRepo.findById(id)
                .orElseThrow( () -> new ResourceNotFoundException("Education not found with id: " + id) );
        
        chgEduc.setName(educ.getName());
        chgEduc.setDesc(educ.getDesc());
        chgEduc.setStart(educ.getStart());
        chgEduc.setEnd(educ.getEnd());
        
        educationRepo.save(chgEduc);
        return null;    
    }
    
}
