/*	Author:Prashant Sani,
	www.yellowslice.in
*/
function divClose(){
	$(".dark").hide();
}

var feedback='<div class="feedbackdiv"><a href="feedback">Gimme some<span>Feedback</span></a></div>';
$('body').append(feedback);

/*
$(window).bind("load", function() {
	$("#loading").hide();
	$("#portfolioContent").delay(100).toggleClass("out");			
});
*/
		
$(window).resize(function() {
	winHeight = document.body.clientHeight;
	winWidth  = document.body.clientWidth;
});

/* Disable Click on currentLink */
$('.currLink').click(function(event){
    event.preventDefault();
    return false;
});
// Closing Drag info Box
$(".dragInfoClose, .navBtn").click(function(){
	$(".dragInfo").fadeOut();
	$('.navBtn').removeClass('active');
});
// Simple Scroll to for We Offer Page
$('.weofferNav').on('click', 'a', function(e){
  e.preventDefault();
  var top = (Math.floor($( this.getAttribute('href') ).offset().top));
  $('body,html').animate({ scrollTop: top },500);
});

$('.scrollToBtn').on('click',function(e){
  e.preventDefault();
  var top = (Math.floor($( this.getAttribute('href') ).offset().top));
  $('body,html').animate({ scrollTop: top - 60 },500);
});

/* email validation */
function validateForm() {
	var x=document.emailForm.email.value;
	var atpos=x.indexOf("@");
	var dotpos=x.lastIndexOf(".");
	if(document.emailForm.name.value=="" || document.emailForm.name.value=="Name")
	{
		$('.errorMsg').html("Please submit your name").fadeIn();
		document.emailForm.name.focus();
		return false;
	}
	else if(x=="" || x=="Email")
	{
		$('.errorMsg').html("Please submit your Email Address so that we can contact you!").fadeIn();
		document.emailForm.email.focus() ;
		return false;
	}	
	else if(atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length)
	{
	  	$('.errorMsg').html("Not a valid e-mail address").fadeIn();
		document.emailForm.email.focus() ;
		return false;
	}	
	else if(document.emailForm.PhoneNo.value=="" || document.emailForm.PhoneNo.value=="Contact Number")
	{
		$('.errorMsg').html("Please Enter a Contact Number").fadeIn();
		document.emailForm.PhoneNo.focus() ;
		return false;
	}
	/*
	else if(isNaN(document.emailForm.PhoneNo.value) || document.emailForm.PhoneNo.value.indexOf(" ")!=-1 )
	{
		$('.errorMsg').html("Enter a valid Mobile Number").fadeIn();
		document.emailForm.PhoneNo.focus() ;
		return false;
	}
	else if( document.emailForm.PhoneNo.value.length != 10 )
	{
		$('.errorMsg').html("Phone number must be 10 digits").fadeIn();
		document.emailForm.PhoneNo.focus() ;
		return false;
	}*/
	else if($('#sub').val()=="" || $('#sub').val()=="Subject")
	{
		$('.errorMsg').html("Please Enter a Subject").fadeIn();
		$('#sub').focus() ;
		return false;
	}
	else if(document.emailForm.query.value=="" || document.emailForm.query.value=="Query")
	{
		$('.errorMsg').html("Please Enter a query").fadeIn();
		document.emailForm.query.focus() ;
		return false;
	}
	else if(document.emailForm.errorCheck.value!="yellowslice")
	{
		$('.errorMsg').html("Ha Ha Ha ! No Spams allowed...").fadeIn();
		return false;
	}
	else{	
		$('.contactEnvelope').css('z-index','99999');	

		$('.ContactLetter, .ContactLetterPaper').animate({
			top:'406px',   				// top		: 285px
			height:'160px', 			// height	: 360px
		},function(){
			$( "#contactForm" ).css('opacity',0);
			$('.envelopeFoldBack').css('z-index','999999');
			$('.envelopeFoldContainer').addClass('envelopeFoldClose');
			
		});
		
		dataString= "&name="+$("#name").val()+"&email="+$("#email").val()+"&PhoneNo="+$("#PhoneNo").val()+"&sub="+$("#sub").val()+"&query="+$("#query").val();
		$.ajax({  
		  type: "POST",  
		  url: "contactMail.php",  
		  data: dataString,  
		  success: function() {  
			console.log(dataString);
		    $('.contactEnvelopeContain').addClass('envelopeSentMail');
		    setTimeout(function(){
		    	$('.formSubmitConfirm').addClass('formSubmitConfirmLoad');
		    },1000)
		  }  
		});  
		return false;  
	}
}

$(".inline").colorbox({inline:true, width:"50%",scrolling:false});
   
function validateCareerForm() {
	if(document.getElementById("name").value==""){
		document.getElementById("careerError").innerHTML="Please enter name.";
		document.getElementById("name").focus();
		return false;
	}
	else{
		document.getElementById("careerError").innerHTML="";
	}
	if(document.getElementById("email").value==""){
		document.getElementById("careerError").innerHTML="Please enter email.";
		document.getElementById("email").focus();
		return false;
	}
	else{
		document.getElementById("careerError").innerHTML="";
	}
	if(document.getElementById("mno").value==""){
		document.getElementById("careerError").innerHTML="Please enter Mobile no.";
		document.getElementById("mno").focus();
		return false;
	}
	else{
		document.getElementById("careerError").innerHTML="";
	}
	if(document.getElementById("msg").value==""){
		document.getElementById("careerError").innerHTML="Please enter query.";
		document.getElementById("msg").focus();
		return false;
	}
	else{
		document.getElementById("careerError").innerHTML="";
	}
	
	
}

function getSubject(id){
	//alert(id);
	var xmlhttp;
	if (window.XMLHttpRequest)
	{// code for IE7+, Firefox, Chrome, Opera, Safari
		xmlhttp=new XMLHttpRequest();
	}
	else
	{// code for IE6, IE5
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange=function()
	{
		if (xmlhttp.readyState==4 && xmlhttp.status==200)
		{
			//alert(xmlhttp.responseText);
			var j=JSON.parse(xmlhttp.responseText);
			document.getElementById("sub").value=j;
		}
	}
	xmlhttp.open("GET","getsubject.php?id="+id,true);
	xmlhttp.send();
}

$('.imageDiv').click(function() {
	$('.imageDiv').fadeOut('slow', function() {
		$("#thevideo").css("display","block");
	});
});

$(".closeVideo").click(function(){
	$("#wrapper").fadeOut();
}); 

/*-validation for only numberallowed-*/
function numberOnlyAllowed(evt){
	
	var charCode=(evt.which?evt.which:evt.keyCode);
	
	if(charCode>=48 && charCode<=57 || charCode == 8 ||charCode==46|| charCode == 32 ||charCode == 37 ||charCode == 38  ||charCode == 38  || charCode == 9)
	{
		return true;
	}
	else
	{
		alert("Enter only Number");
		return false;
	}
}