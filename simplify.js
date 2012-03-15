// JavaScript Document
$(document).ready(function() {
	$("#step2 , #step3 , #step4  , #step5,  , #subresult1  , #subresult2 , #subresult3 , #subresult4 , #workbook").hide();
	//$("input:button").button();
	$(".popup").dialog({autoOpen:false});	
	$(".tryagain").click(function() {
		$(this).parent().dialog("close");		
	});
	$("#form1help").click(function() {
		$("#form1help").attr( 'disabled','disabled');	
		
		$("#workbook").delay(500).show({effect:"blind",speed:2000});
	    $("#step2").delay(500).show({effect:"blind",speed:2000});		
	});
	$("#form2help").click(function() {	
	    $("#form2help").attr( 'disabled','disabled');
		$("#step2").delay(500).hide({effect:"blind",speed:2000});	
		$("#subresult1 , #step3").delay(500).not(":visible").show({effect:"blind",speed:500});
		$("#ruler-feet").delay(500).animate({width: 5*96 +'px'},500);
		$("#ruler-inches").delay(500).animate({width: 7*8 +'px'},500);	
		$("#in").delay(500).html('7');
		$("#ft").delay(500).html('?');	
	});
	$("#form3help").click(function() {	
	    $("#form3help").attr( 'disabled','disabled');
		$("#step3").delay(500).hide({effect:"blind",speed:2000});	
		$("#subresult2 , #step4").delay(500).not(":visible").show({effect:"blind",speed:500});
	    $("#ruler-feet").delay(500).animate({width: 5*96 +'px'},500);
		$("#ruler-inches").delay(500).animate({width: 7*8 +'px'},500);	
		$("#in").delay(500).html('7');
		$("#ft").delay(500).html('5');			
	});
	$("#form4help").click(function() {
		$("#form4help").attr( 'disabled','disabled');
		$("#step4").delay(500).hide({effect:"blind",speed:2000});	
		$("#subresult3 , #step5").delay(500).not(":visible").show({effect:"blind",speed:500});
		 $("#ruler-yards").delay(500).animate({width: 2*288 +'px'},500);
		 $("#ruler-feet").delay(500).animate({width: 2*96 +'px'},500);
		 $("#ft").delay(500).html('2');
		$("#yd").delay(500).html('?');
	});
	$("#form5help").click(function() {
		$("#form5help").attr( 'disabled','disabled');
		$("#step5").delay(500).hide({effect:"blind",speed:2000});	
		$("#subresult4").delay(500).not(":visible").show({effect:"blind",speed:500});
		$("#ruler-feet").delay(500).animate({width: 2*96 +'px'},500);
		$("#ruler-yards").delay(500).animate({width: 2*288 +'px'},500);
		$("#yd").delay(500).html('2');
		$("#ft").delay(500).html('2');	
		
	});
	$("#form1enter").click(function() {		
		if ($("#yards").val() == 2 && $("#feet").val() == 2 && $("#inches").val() == 7)
		{ 
		$("#ruler-yards").animate({width: 2*288 +'px'},500);
		$("#ruler-feet").animate({width: 2*96 +'px'},500);
		$("#ruler-inches").animate({width: 7*8 +'px'},500);	
		$("#in").html('7');
		$("#ft").html('2');
		$("#yd").html('2');		
		$("#form1true").dialog("open");
		
		} else 
		{ 
		$("#form1false").dialog("open");
		};
	});
	$("#nextstep1").click(function() {
		$("#yards , #feet , #inches").css('border-color','red').css('opacity','.5');
		$("#form1false").dialog("close");
		$("#form1help").attr( 'disabled','disabled');
		$("#workbook").delay(500).show({effect:"blind",speed:2000});
	    $("#step2").delay(2000).show({effect:"blind",speed:2000});			
	});	
	$("#form2enter").click(function() {		
		if ($("#ifeet").val() == 3 && $("#iinches").val() == 7)
		{ 
		 $("#iinches , #ifeet").css('border-color','green').css('opacity','.5');
		 $("#form2true").dialog("open");
		} else 
		{
			$("#form2false").dialog("open");  		
        } 	
	}); 
	$("#nextstep2a").click(function() {
		$("#form2enter , #form2help").attr( 'disabled','disabled');
		$("#form2true").dialog("close");
		$("#step2").delay(2000).hide({effect:"blind",speed:2000});	
		$("#subresult1 , #step3").delay(2000).not(":visible").show({effect:"blind",speed:500});
		$("#ruler-feet").delay(2000).animate({width: 5*96 +'px'},500);
		$("#ruler-inches").delay(2000).animate({width: 7*8 +'px'},500);	
		$("#in").delay(2000).html('7');
		$("#ft").delay(2000).html('?');		
    });		
	$("#nextstep2b").click(function() {
		$("#form2false").dialog("close");
		$("#ifeet").val(3); 
		$("#iinches").val(7);
	    $("#iinches , #ifeet").css('border-color','red').css('opacity','.5');
		$("#step2").delay(2000).hide({effect:"blind",speed:2000});	
		$("#subresult1 , #step3").delay(2000).not(":visible").show({effect:"blind",speed:500});
		$("#ruler-feet").animate({width: 5*96 +'px'},500);
		$("#ruler-inches").animate({width: 7*8 +'px'},500);	
		$("#in").html('7');
		$("#ft").html('?');
	});
	$("#form3enter").click(function() {				
		if ($("#givenffeet").val() == 5)
		{	
			$("#givenffeet").css('border-color','green').css('opacity','.5');
			$("#form3enter , #form3help").attr( 'disabled','disabled');
			$("#form3true").dialog("open");
			$("#ft").html('5');
			/*
		
			*/
		} else 
		{			
			$("#givenffeet").css('border-color','red').css('opacity','.5');
			$("#form3false").dialog("open");  	
		}
	});
	$("#nextstep3a").click(function() {
			$("#form3true").dialog("close");
			$("#step3").delay(2000).hide({effect:"blind",speed:500});
			$("#subresult2 , #step4").not(":visible").delay(2000).show({effect:"blind",speed:500});
	});
	$("#nextstep3b").click(function() {
			$("#form3false").dialog("close");
			$("#ft").html('5');
			$("#givenffeet").val(5);
			$("#step3").delay(2000).hide({effect:"blind",speed:500});
			$("#subresult2 , #step4").not(":visible").delay(2000).show({effect:"blind",speed:500});
	});
	$("#form4enter").click(function() {
		if ($("#fyards").val() == 1 && $("#ffeet").val() == 2)
		{ 
		$("#fyards , #ffeet").css('border-color','green').css('opacity','.5');
		$("#form4enter , #form4help").attr( 'disabled','disabled');
		$("#form4true").dialog("open");
		} else 
		{ 
		$("#fyards , #ffeet").css('border-color','red').css('opacity','.5');		
		$("#form4false").dialog("open");  	
		}
		
	});
	$("#nextstep4a").click(function() {
			$("#form4true").dialog("close");
			$("#step4").delay(2000).hide({effect:"blind",speed:500});
			$("#subresult3 , #step5").not(":visible").delay(2000).show({effect:"blind",speed:500});
			$("#ruler-yards").animate({width: 2*288 +'px'},500);
		    $("#ruler-feet").animate({width: 2*96 +'px'},500);
			$("#ft").html('2');
	     	$("#yd").html('?');		
	});
	$("#nextstep4b").click(function() {
			$("#form4false").dialog("close");	
			$("#fyards").val(1); 
			$("#ffeet").val(2); 
			$("#step4").delay(2000).hide({effect:"blind",speed:500});
			$("#subresult3 , #step5").not(":visible").delay(2000).show({effect:"blind",speed:500});
			$("#ruler-yards").animate({width: 2*288 +'px'},500);
		    $("#ruler-feet").animate({width: 2*96 +'px'},500);
			$("#ft").html('2');
	     	$("#yd").html('?');		
	});
		
	$("#form5enter").click(function() {
		
		if ($("#totalyards").val() == 2)
		{ 
		$("#form5enter , #form5help").attr( 'disabled','disabled');
		$("#totalyards").css('border-color','green').css('opacity','.5');
		$("#step5").delay(2000).hide({effect:"blind",speed:500});
		$("#subresult4").delay(2000).show({effect:"blind",speed:500});
		$("#yd").html('2');		
		$("#form5true").dialog("open");  
		} else 
		{ 
		$("#totalyards").css('border-color','red').css('opacity','.5');
		$("#form5false").dialog("open");  
		}
		
	});
	$("#nextstep5b").click(function() {
		$("#form5false").dialog("close");  
		$("#totalyards").val(2); 
		$("#step5").delay(2000).hide({effect:"blind",speed:500});
		$("#subresult4").delay(2000).show({effect:"blind",speed:500});
		$("#yd").html('2');		
		
		
		
	});
		  
});

