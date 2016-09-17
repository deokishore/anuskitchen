package com.tamaar.shoppingcart.parser;

import com.tamaar.vo.CustomerVo;
import com.tamaar.vo.OrderDetailVo;
import com.tamaar.vo.PaymentDetailsVo;
import com.tamaar.vo.ShipperVo;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;

/**
 * Created by deokishore on 06/12/2015.
 */
public class OrderVo {

    private Integer orderId;
    private ShipperVo shipperVo = new ShipperVo();
    private CustomerVo customerByDeliveryCustomerIdVo = new CustomerVo();
    private CustomerVo customerByCustomerIdVo = new CustomerVo();
    private CustomerVo customerByBillingCustomerIdVo = new CustomerVo();
    private String deliveryRequest;
    private PaymentDetailsVo paymentDetailsVo;
    private Date orderDate = new Date();
    private Date requiredDate = new Date();
    private Date shippedDate = new Date();
    private Set<OrderDetailVo> orderDetailsVO = new HashSet(0);

    public Integer getOrderId() {
        return orderId;
    }

    public void setOrderId(Integer orderId) {
        this.orderId = orderId;
    }

    public ShipperVo getShipperVo() {
        return shipperVo;
    }

    public void setShipperVo(ShipperVo shipperVo) {
        this.shipperVo = shipperVo;
    }

    public CustomerVo getCustomerByDeliveryCustomerIdVo() {
        return customerByDeliveryCustomerIdVo;
    }

    public void setCustomerByDeliveryCustomerIdVo(CustomerVo customerByDeliveryCustomerIdVo) {
        this.customerByDeliveryCustomerIdVo = customerByDeliveryCustomerIdVo;
    }

    public CustomerVo getCustomerByCustomerIdVo() {
        return customerByCustomerIdVo;
    }

    public void setCustomerByCustomerIdVo(CustomerVo customerByCustomerIdVo) {
        this.customerByCustomerIdVo = customerByCustomerIdVo;
    }

    public CustomerVo getCustomerByBillingCustomerIdVo() {
        return customerByBillingCustomerIdVo;
    }

    public void setCustomerByBillingCustomerIdVo(CustomerVo customerByBillingCustomerIdVo) {
        this.customerByBillingCustomerIdVo = customerByBillingCustomerIdVo;
    }

    public PaymentDetailsVo getPaymentDetailsVo() {
        return paymentDetailsVo;
    }

    public void setPaymentDetailsVo(PaymentDetailsVo paymentDetailsVo) {
        this.paymentDetailsVo = paymentDetailsVo;
    }

    public Date getOrderDate() {
        return orderDate;
    }

    public void setOrderDate(Date orderDate) {
        this.orderDate = orderDate;
    }

    public Date getRequiredDate() {
        return requiredDate;
    }

    public void setRequiredDate(Date requiredDate) {
        this.requiredDate = requiredDate;
    }

    public Date getShippedDate() {
        return shippedDate;
    }

    public void setShippedDate(Date shippedDate) {
        this.shippedDate = shippedDate;
    }

    public Set<OrderDetailVo> getOrderDetailsVO() {
        return orderDetailsVO;
    }

    public void setOrderDetailsVO(Set<OrderDetailVo> orderDetailsVO) {
        this.orderDetailsVO = orderDetailsVO;
    }

    public String getDeliveryRequest() {
        return deliveryRequest;
    }

    public void setDeliveryRequest(String deliveryRequest) {
        this.deliveryRequest = deliveryRequest;
    }
}
