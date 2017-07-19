(function($){
    $.ajaxModule({
        url         : '/ha/board/list',
        type        : 'GET',
        dataType    : 'json',
        data        : {type : 'js'},
        contentType : 'application/json; charset=UTF-8',
        success     : function(e){ 
            var rows    = [];

            for( var i = 0; e.list.length > i; i++ ){
                var data = e.list[i];

                var li      = document.createElement('li'),
                    a       = document.createElement('a'),
                    seq     = document.createElement('div'),
                    title   = document.createElement('div'),
                    date    = document.createElement('div');

                li.className    = 'body';
                a.href          = "#";
                seq.className   = 'seq';
                title.className = 'title';
                date.className  = 'date';

                seq.innerHTML   = i + 1;
                title.innerHTML = data.TITLE;
                date.innerHTML  = data.CREA_DTM;

                li.appendChild(a);
                a.appendChild(title);
                a.appendChild(seq);
                a.appendChild(date);

                rows.push( li );
            }

            for( var i = 0; rows.length > i; i++ ){
                var row = rows[i],
                    ul  = document.querySelector('section ul[data-role=listview]');

                ul.appendChild(row);
            } 
        },
        error       : function(e){
            console.log('JS : ERROR')
        }
    }) 
}(jQuery))