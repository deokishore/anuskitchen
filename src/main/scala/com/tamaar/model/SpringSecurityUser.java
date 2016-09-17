package com.tamaar.model;

import com.tamaar.vo.CustomerVo;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.User;

import java.util.Collection;

/**
 * Created by deokishore on 18/03/2016.
 */
public class SpringSecurityUser extends User {
    private CustomerVo customerVo;

    public SpringSecurityUser(CustomerVo customerVo,
                              Collection<? extends GrantedAuthority> authorities) {
        super(customerVo.getEmail(), customerVo.getPassword(), authorities);
        this.customerVo = customerVo;

    }

    public CustomerVo getCustomerVo() {
        return customerVo;
    }
}

