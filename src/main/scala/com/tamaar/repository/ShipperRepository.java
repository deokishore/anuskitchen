package com.tamaar.repository;

import com.tamaar.model.Shipper;
import org.springframework.data.repository.PagingAndSortingRepository;

/**
 * Created by deokishore on 06/12/2015.
 */
public interface ShipperRepository extends PagingAndSortingRepository<Shipper, String> {


    Shipper findByShipperId(String shipperId);
}
