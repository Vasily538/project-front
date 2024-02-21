function onLoad(){
    $.ajax({
        url: '/rest/players',         /* Куда отправить запрос */
        method: 'get',             /* Метод запроса (post или get) */
        dataType: 'json',
        data: {}
    }).done(function (data) {
        let element = document.getElementById("players");
        for (var i = 0; i < data.length; i++) {
            var date1 = new Date(data[i].birthday)
            element.append('<tr><td>' + data[i].id + '</td><td>' + data[i].name + '</td><td>' + data[i].title + '</td><td>' +
                +data[i].race + '</td><td>' + data[i].profession + '</td><td>' + data[i].level + '</td><td>' + date1.toLocaleDateString() +
                '</td><td>' + data[i].banned + '</td><tr>');
            //console.log(item);

        }

    });
}

window.onload = onLoad();