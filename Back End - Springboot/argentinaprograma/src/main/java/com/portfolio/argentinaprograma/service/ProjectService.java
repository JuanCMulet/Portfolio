package com.portfolio.argentinaprograma.service;

import com.portfolio.argentinaprograma.exception.ResourceNotFoundException;
import com.portfolio.argentinaprograma.model.Project;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.portfolio.argentinaprograma.repository.ProjectRepository;

@Service
public class ProjectService implements IProjectService {
    
    @Autowired
    public ProjectRepository projectRepo;

    @Override
    public List<Project> verProjects() {
        return projectRepo.findAll();
    }

    @Override
    public void crearProject(Project project) {
        projectRepo.save(project);
    }

    @Override
    public void borrarProject(Long id) {
        projectRepo.deleteById(id);
    }

    @Override
    public Project buscarProject(Long id) {
        throw new UnsupportedOperationException("Not supported yet."); // Generated from nbfs://nbhost/SystemFileSystem/Templates/Classes/Code/GeneratedMethodBody
    }

    @Override
    public Project cambiarProject(Project project, Long id) {
        Project chgProj = projectRepo.findById(id)
                .orElseThrow( () -> new ResourceNotFoundException("Project not found with id: " + id) );
        
        chgProj.setName(project.getName());
        chgProj.setDesc(project.getDesc());
        chgProj.setUrl(project.getUrl());
        
        projectRepo.save(chgProj);
        return null;
    }
    
}
