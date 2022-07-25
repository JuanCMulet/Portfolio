package com.portfolio.argentinaprograma.Controller;

import com.portfolio.argentinaprograma.model.Project;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import com.portfolio.argentinaprograma.service.IProjectService;
import org.springframework.web.bind.annotation.PutMapping;

@RestController
public class ProjectController {
    
    @Autowired
    private IProjectService projectServ;
    
    @PostMapping ("/new/project")
    public void crearProject(@RequestBody Project proj) {
        projectServ.crearProject(proj);
    }
    
    @GetMapping ("/ver/project")
    @ResponseBody
    public List<Project> verProjects() {
        return projectServ.verProjects();
    }
    
    @DeleteMapping ("/delete/project/{id}")
    public void borrarProject(@PathVariable Long id) {
        projectServ.borrarProject(id);
    }
    
    @PutMapping ("/cambiar/project/{id}")
    public void cambiarProject(@RequestBody Project proj, @PathVariable Long id) {
        projectServ.cambiarProject(proj, id);
    }
    
}
