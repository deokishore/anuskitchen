package com.tamaar.dao;

import com.tamaar.model.Address;
import com.tamaar.model.PaymentDetails;
import com.tamaar.repository.AddressRepository;
import com.tamaar.repository.PaymentDetailsRepository;
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
public class PaymentDetailsDAO {

    @Resource
    PaymentDetailsRepository paymentDetailsRepository;

    @PersistenceContext
    private EntityManager entityManager;

    /**
     *
     */
    public PaymentDetails findById(Integer paymentDetailsId) {
        PaymentDetails entry = paymentDetailsRepository.findByPaymentDetailsId(paymentDetailsId);
        if (entry == null){
            System.out.println("No payment details found with id: " + paymentDetailsId);
        }
        return entry;
    }

    public PaymentDetails updatePaymentDetails(PaymentDetails paymentDetails) {
        return paymentDetailsRepository.save(paymentDetails);
    }

    public PaymentDetails save(PaymentDetails paymentDetails) {
        return paymentDetailsRepository.save(paymentDetails);
    }

    public void delete(PaymentDetails paymentDetails) {
        paymentDetailsRepository.delete(paymentDetails);
    }

}
