$.ajax({
    url         : 'CONFIG/config.xml',
    type        : 'get',
    dataType    : 'xml',
    contentType : 'application/xml; charset=UTF-8',
    success     : function(xml){
        
    },
    error       : function(e){
        setTimeout(function(){
        document.write('<script src="common/common.js"  ></script>')
        document.write('<script src="index.js"          ></script>') 
        }, 1000)
        
    }
})