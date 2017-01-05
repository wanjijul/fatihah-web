

$(document).ready(function(){
    // $('map').imageMapResize();
//    $('#fatihah').maphilight();  
    // $('#fatihah').maphilight().parent().addClass('center-map');
 
    var image = $('#fatihah');

    $('#fatihah').mapster({
    	mapKey: 'name',
    	singleSelect: true,
        fillOpacity: 0.6,
        fillColor: 'FF0000',
    	onMouseover: function(e, opt, key, selected){
    		console.log(e);
   //  		var ayatnumber = event;
			// ayatnumber = ayatnumber.split('-')[0];
			// console.log(ayatnumber);
   //  		$('area[name=' + ayatnumber + '-area]').mouseenter();
	    }
    })




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
	var current_hovered_object_id = "";

	// $('area').mouseover(function(e){
	// 	e.preventDefault();

	// 	// $(this).mapster('highlight');
	// 	current_hovered_object_id = $(this).attr('id');


	// 	var ayatnumber = $(this).attr('class');
	// 	console.log(current_hovered_object_id);

	// 	$('#'+current_hovered_object_id).mapster({
	//         // mapKey: 'name',
	//         singleSelect: true,
	//         fillOpacity: 0.6,
	//         fillColor: 'FF0000',
 //        	onMouseover: function(){
 //        		$(this).addClass('hover');
 //    	    }

	//     });

	// 	// ayatnumber = ayatnumber.split('-')[0];
	// 	// if(hovered === false){
	// 	// 	hovered = true;
	// 	// 	$('.'+ayatnumber+'-area').mapster('highlight');
	// 	// 	$('.'+ayatnumber+'-area').mouseover();			
	// 	// }
		
	// })
	
	// $('area').mouseleave(function(e){
	// 	e.preventDefault();
	// 	console.log('left');
	// 	// $('#'+current_hovered_object_id).mapster('highlight', false);
	// 	// $('#fatihah').mapster('highlight',false); 

	// 	hovered = false;
	// })
	
	
	
		

    
    
})
