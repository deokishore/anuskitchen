package com.tamaar.service;

import com.tamaar.dao.UserDao;
import com.tamaar.model.User;
import com.tamaar.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.sql.SQLException;

/**
 * Created by deokishore on 23/01/2016.
 */
@Service
@Transactional
public class UserService {

    private UserDao userDao;

    @Autowired
    private UserRepository userRepository;

    public boolean isValidUser(String username, String password) throws SQLException {
        return userDao.isValidUser(username, password);
    }

    public User findByEmail(String email){
        return userRepository.findByEmail(email);
    }
}