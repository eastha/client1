$(function($){
    $.ajaxModule = function(t){
        t.url = 'http://220.117.116.174:8080' + t.url;
        $.ajax(t);
    }
}(jQuery))

$(function($){
    $.fn.util = {
        
    }
}(jQuery))