package com.portfolio.argentinaprograma.service;

import com.portfolio.argentinaprograma.model.About;
import java.util.List;

public interface IAboutService {
    
    public List<About> verAbout();
    
    public void crearAbout(About about);

    public About cambiarAbout(About user, Long id);
    
}
