$(function(){
	$('#p_1').click(function() {				
		$('#div_1').remove().attr('removed', 'removed');		
		
	});
	$('#p_2').click(function() {				
		$('#div_2').remove().attr('removed', 'removed');		
	});
	$('#p_3').click(function() {				
		$('#div_3').remove().attr('removed', 'removed');
	});			
});			
var div1=1;
var div2=1;
var div3=1;			
$(function(){				
	$('#div_1').click(function() {
		if(div1%2==0){						
			$('#div_1').css('background', 'lightgreen');
			div1++;
		}
		else{
			$('#div_1').css('background', 'yellow');
			div1++;
		}
	});				

	$('#div_2').click(function() {
		if(div2%2==0){						
			$('#div_2').css('background', 'lightgreen');
			div2++;
		}
		else{
			$('#div_2').css('background', 'yellow');
			div2++;
		}
	});				

	$('#div_3').click(function() {
		if(div3%2==0){						
			$('#div_3').css('background', 'lightgreen');
			div3++;
		}
		else{
			$('#div_3').css('background', 'yellow');
			div3++;
		}
	});				
});
