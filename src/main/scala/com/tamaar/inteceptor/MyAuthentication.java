package com.tamaar.inteceptor;

import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;

import java.util.Collection;

/**
 * Created by deokishore on 18/03/2016.
 */
public class MyAuthentication extends UsernamePasswordAuthenticationToken implements Authentication {

    public MyAuthentication(Object principal, Object credentials, int moduleCode) {
        super(principal, credentials);
        this.moduleCode = moduleCode;
    }

    public MyAuthentication(Object principal, Object credentials,
                            Collection<? extends GrantedAuthority> authorities,int moduleCode) {
        super(principal, credentials, authorities);
        this.moduleCode = moduleCode;
    }

    private int moduleCode;

    public int getModuleCode() {
        return moduleCode;
    }
}

