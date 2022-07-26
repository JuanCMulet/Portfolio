package com.portfolio.argentinaprograma.Controller;

import com.portfolio.argentinaprograma.model.About;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import com.portfolio.argentinaprograma.service.IAboutService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;

@RestController
public class AboutController {
    
    @Autowired
    private IAboutService aboutServ;
    
    @PostMapping ("/new/about")
    public void crearAbout(@RequestBody About about) {
        aboutServ.crearAbout(about);
    }
    
    @GetMapping ("/ver/about")
    @ResponseBody
    public List<About> verAbout() {
        return aboutServ.verAbout();
    }
    
    @PutMapping ("/cambiar/about/{id}")
    public void cambiarUser(@RequestBody About about, @PathVariable Long id) {
        aboutServ.cambiarAbout(about, id);
    }
    
}
