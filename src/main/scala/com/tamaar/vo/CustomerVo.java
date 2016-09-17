package com.tamaar.vo;

import org.codehaus.jackson.annotate.JsonIgnoreProperties;

import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.ObjectInputStream;
import java.io.ObjectOutputStream;
import java.io.Serializable;

/**
 * Created by door3 on 22/11/2015.
 */
@JsonIgnoreProperties(ignoreUnknown=true)
public class CustomerVo implements Serializable {

    private static final long serialVersionUID = 1L;

    private int customerId;
    private AddressVo addressVo;
    private String title;
    private String firstName;
    private String lastName;
    private String email;
    private String password;
    private String mobileNumber;
    private String landlineNumber;
    private String role;
    private String hdyhau;


    public int getCustomerId() {
        return customerId;
    }

    public void setCustomerId(int customerId) {
        this.customerId = customerId;
    }

    public AddressVo getAddressVo() {
        return addressVo;
    }

    public void setAddressVo(AddressVo addressVo) {
        this.addressVo = addressVo;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getMobileNumber() {
        return mobileNumber;
    }

    public void setMobileNumber(String mobileNumber) {
        this.mobileNumber = mobileNumber;
    }

    public String getLandlineNumber() {
        return landlineNumber;
    }

    public void setLandlineNumber(String landlineNumber) {
        this.landlineNumber = landlineNumber;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public String getHdyhau() {
        return hdyhau;
    }

    public void setHdyhau(String hdyhau) {
        this.hdyhau = hdyhau;
    }

    /**
     * This method makes a "deep clone" of any Java object it is given.
     */
    public static CustomerVo deepClone(Object object) {
        try {
            ByteArrayOutputStream baos = new ByteArrayOutputStream();
            ObjectOutputStream oos = new ObjectOutputStream(baos);
            oos.writeObject(object);
            ByteArrayInputStream bais = new ByteArrayInputStream(baos.toByteArray());
            ObjectInputStream ois = new ObjectInputStream(bais);
            return (CustomerVo) ois.readObject();
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }
}
