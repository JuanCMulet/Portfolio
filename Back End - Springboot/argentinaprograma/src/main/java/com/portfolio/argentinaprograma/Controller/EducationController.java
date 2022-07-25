package com.portfolio.argentinaprograma.Controller;

import com.portfolio.argentinaprograma.model.Education;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import com.portfolio.argentinaprograma.service.IEducationService;
import org.springframework.web.bind.annotation.PutMapping;

@RestController
public class EducationController {
    
    @Autowired
    private IEducationService educationServ;
    
    @PostMapping ("/new/education")
    public void crearEducation(@RequestBody Education educ) {
        educationServ.crearEducation(educ);
    }
    
    @GetMapping ("/ver/education")
    @ResponseBody
    public List<Education> verEducations() {
        return educationServ.verEducations();
    }
    
    @DeleteMapping ("/delete/education/{id}")
    public void borrarEducation(@PathVariable Long id) {
        educationServ.borrarEducation(id);
    }
    
    @PutMapping ("/cambiar/education/{id}")
    public void cambiarEducation(@RequestBody Education educ, @PathVariable Long id) {
        educationServ.cambiarEducation(educ, id);
    }
    
}
