package com.tamaar.repository;

import com.tamaar.model.Address;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Service;

/**
 * Created by deokishore on 06/12/2015.
 */
@Service
public interface AddressRepository extends PagingAndSortingRepository<Address, Integer> {
    Address findByAddressId(int addressid);
}
