/**
 * Tamaar Product qty buttons
 *
 * @copyright 2009-2014 Tamaar Skin Care Inc. All rights reserved.
 */
(function(tamaar) {
 
    //localised pointer to jQuery
    var _$ = jQuery;
    
    var _floor = 1;
 
 
    //attach to tamaar.ui namespace
    tamaar.ui = tamaar.ui  || {};
 
 
    /*
     * Guarantee that the value is numeric and between 0 and 99
     *
     * @param Mixed almost all inputs should product the expected results
     *
     * @access private 
     * @return Integer Number between 0 and 99
     */
    function sanitiseValue(v){
    	
    	f = _floor || 0;
    
        v = (true == (v !== false && v != NaN && v >= f))?v:f;
        return Math.min(v,99);
    
    }

    /**
     * Bind the behaviour to a quantity box plus button
     * designed to be used with jQuery each, or in apply() context
     *
     * @access public
     * @return void
     */
     function bindQtyPlus(intIndex){
        
        var box = _$(this).prev();
        
        _$(this).click(function() {
          var v = parseInt(box.val())+1;
          box.val(sanitiseValue(v));
        });
    }

    /**
     * Bind the behaviour to a quantity box minus button
     * designed to be used with jQuery each, or in apply() context
     *
     * @access public
     * @return void
     */
    function bindQtyMinus(intIndex) {
    
        var box = jQuery(this).next()
        
        _$(this).click(function() {
          var v = parseInt(box.val())-1;
          box.val(sanitiseValue(v));   
        });
    
    };

    /**
     * Bind the behaviour to a quantity box
     * designed to be used with jQuery each, or in apply() context
     *
     * @access public
     * @return void
     */
    function bindQtyInput(intIndex){
    
        var box =  _$(this);
   
        box.keydown(function (e) {

          if (e.which == 13) {
            box.val(sanitiseValue(box.val()));
          }
          
        });                                           
    
    };
    
    //expose interface
    tamaar.ui.qty = {
    		bindQtyPlus:bindQtyPlus,
    		bindQtyMinus:bindQtyMinus,
    		bindQtyInput:bindQtyInput
    };
 
 
 }( window.tamaar = window.tamaar || {}));

jQuery(document).ready(function() {

	//bind the qty plus button behaviour to each TMAPI-add button on the page.
	jQuery(".quantity .plus").each(tamaar.ui.qty.bindQtyPlus);
	
	//bind the qty minus button behaviour to each TMAPI-subtract button on the page.
	jQuery(".quantity .minus").each(tamaar.ui.qty.bindQtyMinus);
	
	//bind the qty input behaviour to each TMAPI-qty input on the page.
	jQuery(".quantity .qty").each(tamaar.ui.qty.bindQtyInput);

});
