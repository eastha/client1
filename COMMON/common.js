$(function($){
    $.ajaxModule = function(t){
        t.url = ' ' + t.url;
        $.ajax(t);
    }
}(jQuery))

$(function($){
    $.fn.util = {
        
    }
}(jQuery))