

 



$(document).ready(function(){
    // $('map').imageMapResize();
//    $('#fatihah').maphilight();  
    // $('#fatihah').maphilight().parent().addClass('center-map');
 

	$('#fatihah-container').width($('#fatihah').width());   

   	$('#fatihah').mapster({
	render_highlight: {
		fillOpacity: 0.4,
	    fillColor: "6aff3d",
	},	

	render_select: {
		fillOpacity: 0.4,
	    fillColor: "d42e16",
	    stroke: true,
	    strokeColor: "3320FF",
	    strokeOpacity: 0.8,
	    strokeWidth: 4
	},	

    singleSelect: true,
    mapKey: 'name',
    listKey: 'name',
	});





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
