$( document ).ready(function() {

    $('#findIdRequest').click(function(){
        var id = $('#findIdText').val();

        $.ajax({
            url:'http://localhost:8080/user/findById/' + id,
            type:'GET',
            success: function(data){
                console.log(data);
                $('#findIdDiv').html('');
                $('#findIdDiv').html(data.name);
            },
            error: function(xhr,textStatus){
                if(xhr.status=="500")
                    $('#findIdDiv').html("<H1 style='color:red'>Ошибка на сервере</H1>");
                else $('#findIdDiv').html("<H1 style='color:red'>Ничего не найдено</H1>");
            }

        })
    })

    $('#findNameRequest').click(function(){
        var name = $('#findNameText').val();

        $.ajax({
            url:'http://localhost:8080/user/findByName/' + name,
            type:'GET',
            success: function(data){
                console.log(data);
                var out = '';
                data.forEach(function(item, i, arr) {
                    out = out + item.id + ' ' + item.name + ' ' + item.role.role + ' ' + item.group + '<br>';
                });

                $('#findNameDiv').html(out);
            },
            error: function(xhr,textStatus){
                if(xhr.status=="500")
                    $('#findNameDiv').html("<H1 style='color:red'>Ошибка на сервере</H1>");
                else $('#findNameDiv').html("<H1 style='color:red'>Ничего не найдено</H1>");
            }

        })
    })

    $('#saveRequest').click(function(){
        var data = $("#saveForm").serialize();

        $.ajax({
            url:'http://localhost:8080/user/save',
            type:'POST',
            data: data,
            success: function(data){
                console.log(data);
                $('#saveDiv').html(data.id + " " + data.name + " " + data.group + " " + data.role + " ");
            },
            error: function(xhr,textStatus){
                if(xhr.status=="500")
                    $('#saveDiv').html("<H1 style='color:red'>Ошибка на сервере</H1>");
                else $('#saveDiv').html("<H1 style='color:red'>Ничего не найдено</H1>");
            }
        })
    })

    $('#deleteRequest').click(function(){
        var id = $('#deleteIdText').val();

        $.ajax({
            url:'http://localhost:8080/user/deleteById/' + id,
            type:'GET',
            success: $('#deleteDiv').html("Удален с id = " + id),
            error: function(xhr,textStatus){
                if(xhr.status=="500")
                    $('#deleteDiv').html("<H1 style='color:red'>Ошибка на сервере</H1>");
                else $('#deleteDiv').html("<H1 style='color:red'>Ничего не найдено</H1>");
            }

        })
    })

});
console.log( );