package com.tamaar.inteceptor;

import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;

/**
 * Created by deokishore on 18/03/2016.
 */
public class MyAuthenticationProvider extends DaoAuthenticationProvider {

    private Collection<GrantedAuthority> obtainAuthorities(UserDetails user) {
        // return granted authorities for user, according to your requirements

        return null;
    }

    private int obtainModuleCode(UserDetails user) {
        // return moduleCode for user, according to your requirements
        return 0;
    }

    @Override
    public Authentication createSuccessAuthentication(Object principal, Authentication authentication, UserDetails user) {
        // Suppose this user implementation has a moduleCode property
        //
        MyAuthentication result = new MyAuthentication(authentication.getPrincipal(),
                                        authentication.getCredentials(),
                                        obtainAuthorities(user),
                                        obtainModuleCode(user));                                                                                   result.setDetails(authentication.getDetails());
        return result;
    }
}
