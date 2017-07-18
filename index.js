// Home
var homeBtn = document.querySelector('#homeMenu');
homeBtn.addEventListener('mousedown', function(e){
    var section = document.querySelector('section');

    section.innerHTML = '';
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
        type = $el.attr('href');

    var path = '';

    if( type ){
        switch( type.replace('#', '') ){
            case 'js' :
                path = '/A/a.html';
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