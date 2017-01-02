

$(document).ready(function(){
    $('map').imageMapResize();
    $('#fatihah').maphilight();  
    $('#fatihah').maphilight().parent().addClass('center-map');
    
    var present = false;
    
    $('#ayat2-area').click(function(e){
        if(e){
            console.log(e);
        } else {
            if(!present){
                $("#ayat2-text").show();
                present = true; 
                
            } else {
                $('.contents').hide();                
                $("#ayat2-text").show();
            }
            
        }
    })
    
    $('#ayat3-2-area').click(function(e){
      if(e){ console.log(e); }
        else{
            if(!present){
                $("#ayat3-2-text").show();
                present = true; 
                
            } else {
                $('.contents').hide();                
                $("#ayat3-2-text").show();
            }
        }
    })
    
    
})
