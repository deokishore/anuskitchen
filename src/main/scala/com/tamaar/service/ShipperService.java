package com.tamaar.service;

import com.google.common.collect.Lists;
import com.tamaar.model.Shipper;
import com.tamaar.repository.ShipperRepository;
import com.tamaar.util.BeanUtil;
import com.tamaar.vo.ShipperVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 * Created by door3 on 07/11/2015.
 */

@Service
@Transactional
public class ShipperService {

    @Autowired
    ShipperRepository shipperRepository;

    @Transactional(readOnly = true)
    public List<ShipperVo> findAll() {
        return  BeanUtil.getShiperVoList(executeQueryFindAll());
    }

    @Transactional(readOnly = true)
    public ShipperVo find(String shiperId) {
        return BeanUtil.getShiperVo(shipperRepository.findByShipperId(shiperId));
    }

    private List<Shipper> executeQueryFindAll() {
        return Lists.newArrayList(shipperRepository.findAll());
    }

}
