(function($){
    debugger;
    var dropZone = document.querySelector('#dropZone');

    dropZone.addEventListener('drop', function(e){
        e.preventDefault();
        e.stopPropagation();

        var files = e.dataTransfer.files;
        
        var output = [];
        for( var i = 0, f; f=files[i]; i++ ){
            output.push('<li><strong>', escape(f.name), '</strong>(', f.type || 'n/a', ')-',
                        f.size, 'bytes, last modified:', 
                        f.lastModifiedDate ? f.lastModifiedDate.toLocaleDateString(): 'n/a',
                        '</li>');
        }
        document.querySelector('#list').innerHTML = '<ul>' + output.join('') + '</ul>';
    })

    dropZone.addEventListener('dragover', function(e){
        e.preventDefault();
        e.stopPropagation();

        e.dataTransfer.dropEffect = 'copy';        
    })
}(jQuery))