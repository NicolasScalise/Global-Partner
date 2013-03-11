
 var $doc = $('html, body');
    
    $('header ul li a').on('click', function(){
        var $class = $(this).attr('class'),
        scroll = 0;
        
        switch($class){
            case 'nosotros':
                scroll = 0;
                break;
            case 'cv':
                scroll = 1237;
                break;
            case 'contacto':
                scroll = 3800;
                break;
        }
        
        $doc.animate({
            scrollTop : scroll
        }, 1000);
        
    });
    
