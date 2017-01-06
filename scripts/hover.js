

 



$(document).ready(function(){
    // $('map').imageMapResize();
//    $('#fatihah').maphilight();  
    // $('#fatihah').maphilight().parent().addClass('center-map');
 
    var share_content = '<span><a href="http://www.facebook.com/sharer.php?u=https://simplesharebuttons.com" target="_blank" class="share-icon"><img src="https://simplesharebuttons.com/images/somacro/facebook.png" alt="Facebook" /></a><a href="https://twitter.com/share?url=https://simplesharebuttons.com&amp;text=Simple%20Share%20Buttons&amp;hashtags=simplesharebtttons" target="_blank" class="share-icon"><img src="https://simplesharebuttons.com/images/somacro/twitter.png" alt="Twitter" /></a><a href="https://plus.google.com/share?url=https://simplesharebuttons.com" target="_blank"><img src="https://simplesharebuttons.com/images/somacro/google.png" alt="Google" />    </a><a href="http://www.linkedin.com/shareArticle?mini=true&amp;url=https://simplesharebuttons.com" target="_blank"><img src="https://simplesharebuttons.com/images/somacro/linkedin.png" alt="LinkedIn" /></a><a href="http://www.tumblr.com/share/link?url=https://simplesharebuttons.com&amp;title=Simple Share Buttons" target="_blank"><img src="https://simplesharebuttons.com/images/somacro/tumblr.png" alt="Tumblr" /></a></span>'
    
    $('#share-button').popover({
        placement: 'bottom',
        trigger: 'hover',
        html: 'true',
        content: share_content
    });
    
    
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
