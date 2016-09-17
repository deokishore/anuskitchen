package com.tamaar.util;

import com.tamaar.model.*;
import com.tamaar.shoppingcart.parser.OrderVo;
import com.tamaar.vo.*;
import org.apache.commons.beanutils.BeanUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

/**
 * Created by door3 on 22/11/2015.
 */
public class BeanUtil {

    private static Logger logger = LoggerFactory.getLogger(BeanUtil.class);

    public static List<ProductVo> getProductVoList(List<Product> content) {

        List<ProductVo> productVoList = new ArrayList<ProductVo>();

        for (Product product : content){
            ProductVo productVo = getProductVo(product);
            productVoList.add(productVo);
        }

        return productVoList;
    }

    public static ProductVo getProductVo(Product product) {

        ProductVo productVo = new ProductVo();

        try {
            PriceVo priceVo = new PriceVo();

            BeanUtils.copyProperties(productVo, product);
            BeanUtils.copyProperties(priceVo, product.getPrice());
            productVo.setPriceVo(priceVo);

            productVo.setIngredients(new HashSet<IngredientVo>());
            productVo.setOrderDetails(new HashSet<OrderDetailVo>());
            productVo.setHowtouses(new HashSet<HowtouseVo>());

            for (Howtouse howtouse : product.getHowtouses()) {
                HowtouseVo howtouseVo = new HowtouseVo();
                BeanUtils.copyProperties(howtouseVo, howtouse);
                productVo.getHowtouses().add(howtouseVo);
            }

            for (OrderDetail orderDetail : product.getOrderDetails()) {
                OrderDetailVo orderDetailVo = new OrderDetailVo();
                BeanUtils.copyProperties(orderDetailVo, orderDetail);
                productVo.getOrderDetails().add(orderDetailVo);
            }

            for (Ingredient ingredient : product.getIngredients()) {
                IngredientVo ingredientVo = new IngredientVo();
                BeanUtils.copyProperties(ingredientVo, ingredient);
                productVo.getIngredients().add(ingredientVo);
            }
        } catch (Exception ex) {
            logger.error(" Error while converting Product to ProductVo: ", ex);
        }
        return productVo;
    }

    public static Product getProduct(ProductVo productVo) {
        Product product = new Product();
        try {
            Price price = new Price();
            BeanUtils.copyProperties(product, productVo);
            BeanUtils.copyProperties(price, productVo.getPriceVo());
            product.setPrice(price);
        } catch (Exception ex) {
            logger.error(" Error while converting ProductVo to product: ", ex);
        }
        return product;
    }


    public static Order getOrder(Order dbOrder, OrderVo orderVo) {

        if(dbOrder == null) {
            dbOrder = new Order();
        }
        try {
            BeanUtils.copyProperties(dbOrder, orderVo);

            Customer customer = getCustomer(dbOrder.getCustomerByCustomerId(), orderVo.getCustomerByCustomerIdVo());
            dbOrder.setCustomerByCustomerId(customer);

            customer = getCustomer(dbOrder.getCustomerByDeliveryCustomerId(), orderVo.getCustomerByDeliveryCustomerIdVo());
            dbOrder.setCustomerByDeliveryCustomerId(customer);

            customer = getCustomer(dbOrder.getCustomerByBillingCustomerId(), orderVo.getCustomerByBillingCustomerIdVo());
            dbOrder.setCustomerByBillingCustomerId(customer);

            if(orderVo.getShipperVo() != null) {
                Shipper shipper = getShiper(dbOrder.getShipper(), orderVo.getShipperVo());
                if (shipper.getShipperId() != null) {
                    dbOrder.setShipper(shipper);
                }
            }

            if(orderVo.getPaymentDetailsVo() != null) {
                PaymentDetails paymentDetails = getPaymentDetails(orderVo.getPaymentDetailsVo());
                dbOrder.setPaymentDetails(paymentDetails);
            }


        } catch (Exception ex) {
            logger.error(" Error while converting Order: ", ex);
        }
        return dbOrder;
    }

    public static Order getNewOrder(OrderVo orderVo) {
        Order order = new Order();
        try {
            BeanUtils.copyProperties(order, orderVo);
            order  = getOrder(order, orderVo);
            if(orderVo.getShipperVo() != null) {
                Shipper shipper = getShiper(null, orderVo.getShipperVo());
                if (shipper.getShipperId() != null) {
                    order.setShipper(shipper);
                }
            }

        } catch (Exception ex) {
            logger.error(" Error while converting Order: ", ex);
        }
        return order;
    }

    public static OrderVo getOrderVo(Order order) {
        OrderVo orderVo = new OrderVo();
        try {
            BeanUtils.copyProperties(orderVo, order);

            CustomerVo customerVo = getCustomerVo(order.getCustomerByCustomerId());
            orderVo.setCustomerByCustomerIdVo(customerVo);

            CustomerVo customerByDeliveryVo = getCustomerVo(order.getCustomerByDeliveryCustomerId());
            orderVo.setCustomerByDeliveryCustomerIdVo(customerByDeliveryVo);

            CustomerVo customerByBillingVo = getCustomerVo(order.getCustomerByBillingCustomerId());
            orderVo.setCustomerByBillingCustomerIdVo(customerByBillingVo);

            Set<OrderDetail> orderDetails = order.getOrderDetails();

            for (OrderDetail orderDetail : orderDetails) {
                OrderDetailVo orderDetailVo = getOrderDetailVo(orderDetail);
                orderVo.getOrderDetailsVO().add(orderDetailVo);
            }

            if(order.getShipper() != null) {
                ShipperVo shipperVo = getShiperVo(order.getShipper());
                if (shipperVo.getShipperId() != null) {
                    orderVo.setShipperVo(shipperVo);
                }
            }

            if(order.getPaymentDetails() != null) {
                PaymentDetailsVo paymentDetailsVo = getPaymentDetailsVo(order.getPaymentDetails());
                orderVo.setPaymentDetailsVo(paymentDetailsVo);
            }

        } catch (Exception ex) {
            logger.error(" Error while converting Order to OrderVo: ", ex);
        }
        return orderVo;
    }

    private static OrderDetailVo getOrderDetailVo(OrderDetail orderDetail) {
        OrderDetailVo orderDetailVo = new OrderDetailVo();
        try {
            BeanUtils.copyProperties(orderDetailVo, orderDetail);
            ProductVo productVo = getProductVo(orderDetail.getProduct());
            //OrderVo orderVo = getOrderVo(orderDetail.getOrder());
            orderDetailVo.setProductVo(productVo);
            //orderDetailVo.setOrderVo(orderVo);

        } catch (Exception ex) {
            logger.error(" Error while converting getOrderDetailVo : ", ex);
        }
        return orderDetailVo;
    }

    public static Customer getCustomer(Customer customer, CustomerVo customerVo) {
        if(customer == null) {
            customer = new Customer();
        }
        try {
            BeanUtils.copyProperties(customer, customerVo);
            Address address = getAddress(customer.getAddress(), customerVo.getAddressVo());
            customer.setAddress(address);
        } catch (Exception ex) {
            logger.error(" Error while converting Customer: ", ex);
        }
        return customer;
    }

    public static CustomerVo getCustomerVo(Customer customer) {
        CustomerVo customerVo = null;
        if(customer != null) {
            customerVo = new CustomerVo();
            AddressVo addressVo = new AddressVo();
            try {
                BeanUtils.copyProperties(customerVo, customer);
                BeanUtils.copyProperties(addressVo, customer.getAddress());
                customerVo.setAddressVo(addressVo);
            } catch (Exception ex) {
                logger.error(" Error while converting Customer: ", ex);
            }
        }
        return customerVo;
    }

    public static Address getAddress(Address address, AddressVo addressVo) {
        if(address == null){
            address = new Address();
        }
        try {
            BeanUtils.copyProperties(address, addressVo);
        } catch (Exception ex) {
            logger.error(" Error while converting Address: ", ex);
        }
        return address;
    }

    public static AddressVo getAddressVo(Address address) {
        AddressVo addressVo = new AddressVo();
        try {
            BeanUtils.copyProperties(addressVo, address);
        } catch (Exception ex) {
            logger.error(" Error while converting AddressVo: ", ex);
        }
        return addressVo;
    }

    public static List<ShipperVo> getShiperVoList(List<Shipper> shiperList) {
        List<ShipperVo> shiperVoList = new ArrayList<ShipperVo>();
        for (Shipper shipper : shiperList) {
            try {
                shiperVoList.add(getShiperVo(shipper));
            } catch (Exception ex) {
                logger.error(" Error while converting ShiperVoList: ", ex);
            }
        }
        return shiperVoList;
    }

    public static ShipperVo getShiperVo(Shipper shipper) {

        ShipperVo shipperVo = new ShipperVo();
        try {
            BeanUtils.copyProperties(shipperVo, shipper);
        } catch (Exception ex) {
            logger.error(" Error while converting ShiperVo: ", ex);
        }
        return shipperVo;

    }

    public static Shipper getShiper(Shipper dbShipper,  ShipperVo shipperVo) {

        if(dbShipper == null) {
            dbShipper = new Shipper();
        }

        try {
            BeanUtils.copyProperties(dbShipper, shipperVo);
        } catch (Exception ex) {
            logger.error(" Error while converting ShiperVo: ", ex);
        }
        return dbShipper;

    }

    public static PaymentDetails getPaymentDetails(PaymentDetailsVo paymentDetailsVo) {
        PaymentDetails paymentDetails = new PaymentDetails();
        try {
            BeanUtils.copyProperties(paymentDetails, paymentDetailsVo);
        } catch (Exception ex) {
            logger.error(" Error while converting Payment Details: ", ex);
        }
        return paymentDetails;

    }

    public static PaymentDetailsVo getPaymentDetailsVo(PaymentDetails paymentDetails) {
        PaymentDetailsVo paymentDetailsVo = new PaymentDetailsVo();
        try {
            BeanUtils.copyProperties(paymentDetailsVo, paymentDetails);
        } catch (Exception ex) {
            logger.error(" Error while converting Payment Details Vo: ", ex);
        }
        return paymentDetailsVo;

    }

    public static List<OrderVo> getOrderVoList(List<Order> orders) {
        List<OrderVo> orderVoList = new ArrayList<OrderVo>();
        for (Order order : orders){
            OrderVo orderVo = getOrderVo(order);
            orderVoList.add(orderVo);
        }
        return orderVoList;
    }

    public static List<CustomerVo> getCustomerVoList(List<Customer> customerList) {
        List<CustomerVo> customeVoList = new ArrayList<CustomerVo>();
        for (Customer customer : customerList){
            CustomerVo customerVo = getCustomerVo(customer);
            customeVoList.add(customerVo);
        }
        return customeVoList;
    }
}
