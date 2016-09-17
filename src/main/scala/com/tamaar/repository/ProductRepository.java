package com.tamaar.repository;

import com.tamaar.model.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.PagingAndSortingRepository;

/**
 * Created by door3 on 08/11/2015.
 */

public interface ProductRepository extends PagingAndSortingRepository<Product, String> {

    Page<Product> findByProductIdLike(Pageable pageable, String productId);

    Product findByProductId(String productId);


}