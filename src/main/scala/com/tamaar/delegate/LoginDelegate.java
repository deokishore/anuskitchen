package com.tamaar.delegate;

/**
 * Created by deokishore on 23/01/2016.
 */
import com.tamaar.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.SQLException;


@Service
public class LoginDelegate
{
    @Autowired
    private UserService userService;

    public UserService getUserService()
    {
        return this.userService;
    }

    public void setUserService(UserService userService)
    {
        this.userService = userService;
    }

    public boolean isValidUser(String username, String password) throws SQLException
    {
        return userService.isValidUser(username, password);
    }
}
