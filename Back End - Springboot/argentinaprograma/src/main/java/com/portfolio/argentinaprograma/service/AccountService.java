package com.portfolio.argentinaprograma.service;

import com.portfolio.argentinaprograma.exception.ResourceNotFoundException;
import com.portfolio.argentinaprograma.model.Account;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.portfolio.argentinaprograma.repository.AccountRepository;

@Service
public class AccountService implements IAccountService {
    
    @Autowired
    public AccountRepository accountRepo;

    @Override
    public List<Account> verUser() {
        return accountRepo.findAll();
    }

    @Override
    public void crearUser(Account user) {
        accountRepo.save(user);
    }

    @Override
    public void borrarUser(Long id) {
        accountRepo.deleteById(id);
    }

    @Override
    public Account buscarUser(Long id) {
        throw new UnsupportedOperationException("Not supported yet."); // Generated from nbfs://nbhost/SystemFileSystem/Templates/Classes/Code/GeneratedMethodBody
    }

    @Override
    public Account cambiarUser(Account user, Long id) {
        Account chgUser = accountRepo.findById(id)
                .orElseThrow( () -> new ResourceNotFoundException("Account not found with id: " + id) );
        
        chgUser.setUsername(user.getUsername());
        chgUser.setPassword(user.getPassword());
        
        accountRepo.save(chgUser);
        return null;
    }
    
}

