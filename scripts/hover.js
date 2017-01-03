

$(document).ready(function(){
    $('map').imageMapResize();
//    $('#fatihah').maphilight();  
    $('#fatihah').maphilight().parent().addClass('center-map');
    
	$('area').click(function(e){
		e.preventDefault()
		var ayatnumber = $(this).attr('class');
		ayatnumber = ayatnumber.split('-')[0];
		if(!$('#'+ayatnumber+'-text').is(":visible")){
			$('#'+ayatnumber+'-text').show(300).siblings("p").hide();
		}
		
		
		
		console.log(ayatnumber);
		
	})
	
	var hovered = false;
	
	$('area').mouseover(function(e){
		e.preventDefault();
		var ayatnumber = $(this).attr('class');
		ayatnumber = ayatnumber.split('-')[0];
		if(hovered === false){
			hovered = true;
			$('.'+ayatnumber+'-area').mouseover();
		}
		
	})
	
	$('area').mouseleave(function(e){
		hovered = false;
	})
	
	
	
		

    
    
})
