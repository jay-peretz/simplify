$(document).ready(function() {
	showDivision ("#form1help, #form1enter", "#showDivision1", "#giveninches", "#givenfeet", 12, "ft.", "in.", "#ifeet", "#iinches");
	showDivision ("#form4help, #form4enter", "#showDivision2", "#givenffeet2", "#givenyards", 3, "yds.", "ft.", "#fyards", "#ffeet");
	//function showDivision illustrates the division being performed
	// places the illustration into the div when id "clickThisId" is clicked 
	// places the illustration into the div with class/id "writeDivHere"
	// supply the quantity to be converted as "givenUnitsA" parameter (e.g., "#giveninches")
	// supply the quantity to be converted into as "givenUnitsB" parameter (e.g., "#givenfeet")
	// supply the number of units to use as divisor in "unitsDivisor" parameter (e.g., 12)
	// supply the unit of measure to be converted to in "convertTo" parameter (e.g., "ft.")
	// supply the unit of measure to be converted from in "convertFrom" parameter (e.g., "in.")
	// supply input field id to write dividend to in "valDividend" (e.g., "ifeet")
	// supply input field id to write remainder to in "valRemainder" (e.g., "iinches")
	// supply span id to write dividend to in "valDividend" (e.g., "ft")
	// supply span id to write remainder to in "valRemainder" (e.g., "in")
	function showDivision (clickThisId, writeDivHere, givenUnitsA, givenUnitsB, unitsDivisor, convertTo, convertFrom, valDividend, valRemainder, spanDividend, spanRemainder){
		$(clickThisId).click(function(){
					unitsValueA = $("input"+givenUnitsA).val();
					unitsValueB = $("input"+givenUnitsB).val();
					var uniqueDivId = writeDivHere.substr(1)+"Simplify";
					var uniqueStep1 = writeDivHere.substr(1)+"Step1";
					var uniqueStep2 = writeDivHere.substr(1)+"Step2";
					var uniqueGivenQuantity = writeDivHere.substr(1)+"GivenQ";
					var uniqueResultInput = writeDivHere.substr(1)+"ResultIn";
					var poundUniqueStep1 = "#"+uniqueStep1;
					var poundUniqueStep2 = "#"+uniqueStep2;
					var poundUniqueDivId = "#"+uniqueDivId;
					var poundUniqueGivenQ = "#"+uniqueGivenQuantity;
					var writeDivision = '<div id='+uniqueDivId+'>';
                    writeDivision += '<table>';
                    writeDivision += '<tr><td>&nbsp;&nbsp;</td><td>&nbsp;</td><td><input id="'+uniqueResultInput+'" type="number" min="0" max="5" step="1" value ="0"/><span>'+convertTo+'</span></td></tr>';
                    writeDivision += '<tr><td>'+unitsDivisor+'</td><td class="topBorder">)</td><td class="topBorder"><span id="'+uniqueGivenQuantity+'"></span>&nbsp;<span>'+convertFrom+'</span></td></tr>';
                    writeDivision += '<tr><td>&nbsp;&nbsp;</td><td>&nbsp;</td><td class="bottomBorder">&nbsp;&nbsp;<span id="'+uniqueStep1+'"></span>&nbsp;<span></span></td></tr>';
                    writeDivision += '<tr><td>&nbsp;&nbsp;</td><td>&nbsp;</td><td class="tableUnitsLeft">&nbsp;&nbsp;<span id="'+uniqueStep2+'"></span>&nbsp;<span>'+convertFrom+'</span></td></tr>';
                    writeDivision += '</table>';
                    writeDivision += '</div>';
				$(writeDivHere).html(writeDivision);
				$(poundUniqueDivId+" .topBorder").css({
										 	"border-top" : "1px solid #222"
										});
				$(poundUniqueDivId+" table").css({
												"border-collapse": "collapse"
											   });
				$(poundUniqueDivId+" .bottomBorder").css({
												"borderBottom" : "1px solid #222"
											   });
				// simplifyStep1 and simplifyStep2 are parts of the division operation
				$(poundUniqueGivenQ).html(unitsValueA);
				$(poundUniqueStep1).html("0");
				$(poundUniqueStep2).html("0");
				var divValue = 0;
				var simpStep2 = 0;
				var timeInOne = setInterval ( function(){
				// $("input#inchesInput").val() is the value of the dividend
					divValue = $("input#"+uniqueResultInput).val();	
					// if the value of the quotient is greater than 0, change the values in the division
					if (divValue > 0) {
						var simpStep1 = unitsDivisor*divValue;
						simpStep2 = unitsValueA-(unitsDivisor*divValue);
						$(poundUniqueStep1).html(simpStep1);
						$(poundUniqueStep2).html(simpStep2);
						$(valDividend).val(divValue);
						$(valRemainder).val(simpStep2);
						$(spanDividend).html(divValue);
						$(spanRemainder).html(simpStep2);
					} else {
						$(poundUniqueStep1).html(0);
						$(poundUniqueStep2).html(0);
						$(valDividend).val("?");
						$(valRemainder).val("?");
						$(spanDividend).html(givenUnitsB);
						$(spanRemainder).html(givenUnitsA);
					}
				}, 500 );
		});	
	}
});