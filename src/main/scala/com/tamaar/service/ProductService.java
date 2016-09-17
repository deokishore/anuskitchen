package com.tamaar.service;

import com.tamaar.model.Product;
import com.tamaar.model.ProductListVO;
import com.tamaar.repository.ProductRepository;
import com.tamaar.shoppingcart.ShoppingCartLineItem;
import com.tamaar.util.BeanUtil;
import com.tamaar.vo.ProductVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by door3 on 07/11/2015.
 */

@Service
@Transactional
public class ProductService {

    @Autowired
    ProductRepository productRepository;

    @Transactional(readOnly = true)
    public ProductListVO findAll(int page, int maxResults) {
        Page<Product> result = executeQueryFindAll(page, maxResults);

        if(shouldExecuteSameQueryInLastPage(page, result)){
            int lastPage = result.getTotalPages() - 1;
            result = executeQueryFindAll(lastPage, maxResults);
        }
        return buildResult(result);
    }

    @Transactional(readOnly = true)
    public ShoppingCartLineItem find(String productId) {
        ProductVo productVo = BeanUtil.getProductVo(productRepository.findByProductId(productId));
        ShoppingCartLineItem shoppingCartLineItem = new ShoppingCartLineItem();
        shoppingCartLineItem.setProductVo(productVo);
        shoppingCartLineItem.setQuantity(0);
        shoppingCartLineItem.setTotalCost(0);
        return shoppingCartLineItem;
    }

    private boolean shouldExecuteSameQueryInLastPage(int page, Page<Product> result) {
        return isUserAfterOrOnLastPage(page, result) && hasDataInDataBase(result);
    }

    private boolean isUserAfterOrOnLastPage(int page, Page<Product> result) {
        return page >= result.getTotalPages() - 1;
    }

    private boolean hasDataInDataBase(Page<Product> result) {
        return result.getTotalElements() > 0;
    }


    private ProductListVO buildResult(Page<Product> result) {

        List<ProductVo> productVoList = BeanUtil.getProductVoList(result.getContent());
        return new ProductListVO(result.getTotalPages(), result.getTotalElements(), productVoList);
    }

    private Page<Product> executeQueryFindAll(int page, int maxResults) {
        final PageRequest pageRequest = new PageRequest(page, maxResults, sortByNameASC());

        return productRepository.findAll(pageRequest);
    }

    private Sort sortByNameASC() {
        return new Sort(Sort.Direction.ASC, "productId");
    }


}
