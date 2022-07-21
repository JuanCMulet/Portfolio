package com.portfolio.argentinaprograma.service;

import com.portfolio.argentinaprograma.model.Account;
import java.util.List;

public interface IAccountService {
    
    public List<Account> verUser();
    
    public void crearUser(Account user);
    
    public void borrarUser(Long id);
    
    public Account buscarUser(Long id);
    
    public Account cambiarUser(Account user, Long id);
}

