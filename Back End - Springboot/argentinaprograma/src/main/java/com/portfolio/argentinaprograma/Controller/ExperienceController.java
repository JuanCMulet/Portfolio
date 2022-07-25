package com.portfolio.argentinaprograma.Controller;

import com.portfolio.argentinaprograma.model.Experience;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import com.portfolio.argentinaprograma.service.IExperienceService;
import org.springframework.web.bind.annotation.PutMapping;

@RestController
public class ExperienceController {
    
    @Autowired
    private IExperienceService experienceServ;
    
    @PostMapping ("/new/experience")
    public void crearExperience(@RequestBody Experience exp) {
        experienceServ.crearExperience(exp);
    }
    
    @GetMapping ("/ver/experience")
    @ResponseBody
    public List<Experience> verExperiences() {
        return experienceServ.verExperiences();
    }
    
    @DeleteMapping ("/delete/experience/{id}")
    public void borrarExperience(@PathVariable Long id) {
        experienceServ.borrarExperience(id);
    }
    
    @PutMapping ("/cambiar/experience/{id}")
    public void cambiarExperience(@RequestBody Experience exp, @PathVariable Long id) {
        experienceServ.cambiarExperience(exp, id);
    }
    
}
