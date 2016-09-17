package com.tamaar.service;

import com.tamaar.model.Customer;
import com.tamaar.model.SpringSecurityUser;
import com.tamaar.repository.CustomerRepository;
import com.tamaar.repository.UserRepository;
import com.tamaar.util.BeanUtil;
import com.tamaar.vo.CustomerVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

/**
 * A custom {@link UserDetailsService} where user information
 * is retrieved from a JPA repository
 */
@Service
@Transactional(readOnly = true)
public class CustomUserDetailsService implements UserDetailsService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private CustomerRepository customerRepository;

    /**
     * Returns a populated {@link UserDetails} object.
     * The username is first retrieved from the database and then mapped to
     * a {@link UserDetails} object.
     */
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        try {
            Customer customer = customerRepository.findByEmail(username);
            CustomerVo customerVo = BeanUtil.getCustomerVo(customer);
            List<GrantedAuthority> authorities = new ArrayList<GrantedAuthority>();
            authorities.add(new SimpleGrantedAuthority(customerVo.getRole()));
            return new SpringSecurityUser(customerVo, authorities);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    /**
     * Retrieves a collection of {@link GrantedAuthority} based on a numerical role
     * @param role the numerical role
     * @return a collection of {@link GrantedAuthority
     */
    public Collection<? extends GrantedAuthority> getAuthorities(Integer role) {
        List<GrantedAuthority> authList = getGrantedAuthorities(getRoles(role));
        return authList;
    }

    /**
     * Converts a numerical role to an equivalent list of roles
     * @param role the numerical role
     * @return list of roles as as a list of {@link String}
     */
    public List<String> getRoles(Integer role) {
        List<String> roles = new ArrayList<String>();

        if (role.intValue() == 1) {
            roles.add("ROLE_USER");
            roles.add("ROLE_ADMIN");

        } else if (role.intValue() == 2) {
            roles.add("ROLE_USER");
        }

        return roles;
    }

    /**
     * Wraps {@link String} roles to {@link SimpleGrantedAuthority} objects
     * @param roles {@link String} of roles
     * @return list of granted authorities
     */
    public static List<GrantedAuthority> getGrantedAuthorities(List<String> roles) {
        List<GrantedAuthority> authorities = new ArrayList<GrantedAuthority>();
        for (String role : roles) {
            authorities.add(new SimpleGrantedAuthority(role));
        }
        return authorities;
    }
}
