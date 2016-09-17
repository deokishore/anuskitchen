package com.tamaar.dao;

import com.tamaar.model.Address;
import com.tamaar.model.Customer;
import com.tamaar.repository.AddressRepository;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.Resource;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

/**
 * Created by deokishore on 20/01/2016.
 */
@Repository
@Transactional(readOnly = true)
@Service
public class AddressDAO {

    @Resource
    AddressRepository addressRepository;

    @PersistenceContext
    private EntityManager entityManager;

    /**
     *
     */
    public Address findById(Integer addressId) {
        Address entry = addressRepository.findByAddressId(addressId);
        if (entry == null){
            System.out.println("No address found with id: " + addressId);
        }
        return entry;
    }

    public Address updateCompany(Address address) {
        return addressRepository.save(address);
    }

    public Address save(Address address) {
        return addressRepository.save(address);
    }

    public void delete(Address address) {
        addressRepository.delete(address);
    }

}
