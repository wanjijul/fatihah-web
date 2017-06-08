

 



$(document).ready(function(){

//     $('#feedback-submit').on('submit', function(e){
//        e.preventDefault();
//        $.ajax({
//            url: /here/,
//            type: 'POST', //or POST
//            data: $('#feedback-message').serialize(),
//            success: function(data){
//                 console.log('successfully submitted');
//            }
//        });
//    });
  
    
    var url = $(location).attr('href');
    console.log(url);
    var share_content = '<div class="container-fluid"><a href="http://www.facebook.com/sharer.php?u=' + url + '" target="_blank" class="share-icon"><img src="https://simplesharebuttons.com/images/somacro/facebook.png" alt="Facebook" /></a><a href="https://twitter.com/share?url=' + url + ';text=Let\'s revisit our fatihah!;hashtags=revisiting-fatihah,fatihah,quran" target="_blank" class="share-icon"><img src="https://simplesharebuttons.com/images/somacro/twitter.png" alt="Twitter" /></a><a href="https://plus.google.com/share?url=' + url + '" target="_blank" class="share-icon"><img src="https://simplesharebuttons.com/images/somacro/google.png" alt="Google" /></a><a href="http://www.linkedin.com/shareArticle?mini=true&amp;url=' + url + '" target="_blank" class="share-icon"><img src="https://simplesharebuttons.com/images/somacro/linkedin.png" alt="LinkedIn"/></a><a href="http://www.tumblr.com/share/link?url='+ url +'&amp;title=Revisiting Fatihah" target="_blank" class="share-icon"><img src="https://simplesharebuttons.com/images/somacro/tumblr.png" alt="Tumblr" /></a></div>'
    console.log(share_content);
    

    $('html').on('mouseup', function(e) {
    if(!$(e.target).closest('.popover').length) {
        $('.popover').each(function(){
            $(this.previousSibling).popover('hide');
        });
    }
    });
    
    $('#feedback-submit').on('click', function(e){
        e.preventDefault();

        // information to be sent to the server
        var info = $('#feedback-message').val();
        var contact_addr = $('#contact-address').val();
        var title = $('#feedback-title').val();

        $.ajax({
            type: "POST",
            url: '/email.php',
            data: {
                message: info,
                contact: contact_addr,
                title: title
                  
                  },
            success: function(data, textStatus, jqXHR) {
                $('#success-alert').show(200).css('display', 'inline');
            } ,
            error: function(jqXHR, status, error) {
                console.log(status + ": " + error);
            }
        });
    })
    
    $(".modal").on("hidden.bs.modal", function(){
        $("textarea").val('');
        $("#success-alert").hide();
    });
    
    $('#share-button').popover({
        placement: 'bottom',
        trigger: 'click',
        html: 'true',
        content: share_content
    });
    
    
//	$('#fatihah-container').width($('#fatihah').width());   

    
    
   	$('#fatihah').mapster({
	render_highlight: {
		fillOpacity: 0.4,
	    fillColor: "7FBCEA",
	},	

	render_select: {
		fillOpacity: 0.4,
	    fillColor: "419641",
	    stroke: true,
	    strokeColor: "7FBCEA",
	    strokeOpacity: 0.8,
	    strokeWidth: 4
	},	

    noHrefIsMask: false,
    singleSelect: true,
    mapKey: 'class',
    listKey: 'name',
     
    
	})

    

    var current_clicked_area = "";
    
    
    $('.change-button').click(function(e){
        e.preventDefault();
        var fontSize = parseInt($('.contents').css('font-size'));
        if($(this).attr('id') == 'increase-size'){
            fontSize += 1;    
        } else {
            fontSize -= 1;
        }
        
        $('.contents').css({'font-size': fontSize});
        console.log(fontSize);
    })
    
    
	$('area, li > button').click(function(e){
		e.preventDefault();
      
		var class_name = $(this).attr('class').split(' ')[0];
//        console.log(class_name);
        
        
		var ayatnumber = class_name.split('-')[0];
		if(!$('#'+ayatnumber+'-text').is(":visible")){
			$('#'+ayatnumber+'-text').fadeIn();
			$('#'+ayatnumber+'-text').css({'overflow-y': 'auto'});
            $('#'+ayatnumber+'-text').siblings("div").hide();
		}
    	
        if($(this).hasClass('mybutton') && current_clicked_area != class_name){
            $('area[class='+class_name+']').mapster('select');
           
            current_clicked_area = class_name;
        }
		
		
		
		
	})
	
	
$('#guide-modal').modal('show');	
		

    
    
})
