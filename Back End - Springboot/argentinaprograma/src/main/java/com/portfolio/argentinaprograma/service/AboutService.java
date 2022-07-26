package com.portfolio.argentinaprograma.service;

import com.portfolio.argentinaprograma.exception.ResourceNotFoundException;
import com.portfolio.argentinaprograma.model.About;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.portfolio.argentinaprograma.repository.AboutRepository;

@Service
public class AboutService implements IAboutService {
    
    @Autowired
    public AboutRepository aboutRepo;

    @Override
    public List<About> verAbout() {
        return aboutRepo.findAll();
    }
    
    @Override
    public void crearAbout(About about) {
        aboutRepo.save(about);
    }

    @Override
    public About cambiarAbout(About about, Long id) {
        About chgAbout = aboutRepo.findById(id)
                .orElseThrow( () -> new ResourceNotFoundException("About not found with id: " + id) );
        
        chgAbout.setName(about.getName());
        chgAbout.setBackImage(about.getBackImage());
        chgAbout.setProfileImage(about.getProfileImage());
        chgAbout.setPosition(about.getPosition());
        chgAbout.setDesc(about.getDesc());
        
        aboutRepo.save(chgAbout);
        return null;
    }
    
}
