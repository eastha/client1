// Home
var homeBtn = document.querySelector('#homeMenu');
homeBtn.addEventListener('mousedown', function(e){
    var subHeader   = document.querySelector('#subHeader'),
        subPath     = document.querySelector('#subPath'),
        subControl  = document.querySelector('#subControl'),
        section     = document.querySelector('section');
 
    subPath.innerHTML       = '';
    subControl.innerHTML    = ''; 
    subHeader.style.display = 'none'

    section.innerHTML   = '';
})

// Menu Toggle
var menuBtn = document.querySelector('#menuBtn');
menuBtn.addEventListener('mousedown', function(e){
    e.preventDefault();
    e.stopPropagation();

    var $status = $('nav').data('status');

    switch($status){
        case 'active' :
            TweenMax.to($('nav'), .3, {right: '-198px'})

            $('#mask').css({
                'width'     : 0,
                'height'    : 0,
                'display'   : 'none'
            })

            $('nav').data('status', 'standby');
            break;

        case 'standby' :
            TweenMax.to($('nav'), .3, {right: '0px'})

            $('#mask').css({
                'width'     : $(document).width(),
                'height'    : $(document).height(),
                'display'   : 'block'
            })

            $('nav').data('status', 'active');
            break;
    }
})
 
// If Menu Active, do standby 
$('nav *').on('mousedown', function(e){
    e.preventDefault();
    e.stopPropagation();

    var el   = e.currentTarget,
        $el  = $(el),
        node = el.nodeName,
        type = $el.attr('href');

    var path = '';

    if( node === 'A' ){
        subHeader(e);
    }

    if( type ){
        switch( type.replace('#', '') ){
            case 'js' :
                var subControl  = document.querySelector('#subControl'),
                    writeBtn    = '';

                writeBtn += '<span class="write" style="cursor:pointer;" >';
                writeBtn += '    <i class="fa fa-pencil-square-o" aria-hidden="true"></i>';
                writeBtn += '</span>';

                subControl.innerHTML = writeBtn;

                path = '/A/list.html';
                $('section').load(path);

                TweenMax.to($('nav'), .3, {right: '-198px'})

                $('#mask').css({
                    'width'     : 0,
                    'height'    : 0,
                    'display'   : 'none'
                })

                $('nav').data('status', 'standby');
                break;

        }
    }
})
$('#mask').on('mousedown', function(e){
    e.preventDefault();
    e.stopPropagation();

    TweenMax.to($('nav'), .3, {right: '-198px'})

    $('#mask').css({
        'width'     : 0,
        'height'    : 0,
        'display'   : 'none'
    })

    $('nav').data('status', 'standby');
}) 
window.addEventListener('resize', function(e){
    var $status = $('nav').data('status');

    switch($status){
        case 'active' :
            $('#mask').css({
                'width'     : $(document).width(),
                'height'    : $(document).height(),
                'display'   : 'block'
            })
            break; 
    }
})

var subHeader = function(e){
    var target  = e.currentTarget,
        list    = [];

    var limit   = 30,
        i       = 0;
        
    while( limit > i ){
        var text = target.innerText;

        list.push( text );

        target = target.closest('ul');

        i++;
    }        

    var subHeader   =  document.querySelector('#subHeader'),
        subPath     =  document.querySelector('#subPath');
    
    subHeader.style.display = 'block';
    subPath.innerText       = list[0]; 
    
}