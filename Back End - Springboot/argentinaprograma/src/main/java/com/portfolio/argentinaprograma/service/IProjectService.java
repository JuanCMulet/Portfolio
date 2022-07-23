package com.portfolio.argentinaprograma.service;

import com.portfolio.argentinaprograma.model.Project;
import java.util.List;

public interface IProjectService {
    
    public List<Project> verProjects();
    
    public void crearProject(Project user);
    
    public void borrarProject(Long id);
    
    public Project buscarProject(Long id);
    
    public Project cambiarProject(Project user, Long id);
    
}
