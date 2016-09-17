package com.tamaar.repository;

import com.tamaar.model.Address;
import com.tamaar.model.PaymentDetails;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Service;

/**
 * Created by deokishore on 06/12/2015.
 */
@Service
public interface PaymentDetailsRepository extends PagingAndSortingRepository<PaymentDetails, Integer> {

    PaymentDetails findByPaymentDetailsId(int paymentDetailsId);

}
