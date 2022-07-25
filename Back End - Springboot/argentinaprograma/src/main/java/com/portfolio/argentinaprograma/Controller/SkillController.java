package com.portfolio.argentinaprograma.Controller;

import com.portfolio.argentinaprograma.model.Skill;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import com.portfolio.argentinaprograma.service.ISkillService;
import org.springframework.web.bind.annotation.PutMapping;

@RestController
public class SkillController {
    
    @Autowired
    private ISkillService skillServ;
    
    @PostMapping ("/new/skill")
    public void crearSkill(@RequestBody Skill skill) {
        skillServ.crearSkill(skill);
    }
    
    @GetMapping ("/ver/skill")
    @ResponseBody
    public List<Skill> verSkills() {
        return skillServ.verSkills();
    }
    
    @DeleteMapping ("/delete/skill/{id}")
    public void borrarSkill(@PathVariable Long id) {
        skillServ.borrarSkill(id);
    }
    
    @PutMapping ("/cambiar/skill/{id}")
    public void cambiarSkill(@RequestBody Skill skill, @PathVariable Long id) {
        skillServ.cambiarSkill(skill, id);
    }
    
}
