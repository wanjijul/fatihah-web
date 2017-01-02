

$(document).ready(function(){
    $('map').imageMapResize();
//    $('#fatihah').maphilight();  
    $('#fatihah').maphilight().parent().addClass('center-map');
    
    var present = false;
    
    $('#ayat2-area').click(function(e){
        e.preventDefault();
        console.log('2 clicked!');
        $('#ayat2-text').show(3000);
    })
    
    $('#ayat3-2-area').click(function(e){
        e.preventDefault();
        console.log('3-2 clicked!');
    })
    
    
})
