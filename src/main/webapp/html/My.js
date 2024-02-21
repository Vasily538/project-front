document.ready(function () {
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

    var count = 0;
    $.ajax({
        url: '/rest/players/count',         /* Куда отправить запрос */
        method: 'get',             /* Метод запроса (post или get) */
        dataType: 'json',
        data: {}
    }).done(function (data) {
        count = Integer.valueOf(data);
    });
    for (var i = 6; i <= 20; i++) {
        let option = document.createElement("option");
        option.setAttribute('value', i.toString());

        let optionText = document.createTextNode(i.toString());
        option.appendChild(optionText);

        DropDown.appendChild(option);
    }
});
//window.onload = getList;
function update() {
    var select = document.getElementById('DropDown');
    var option = select.options[select.selectedIndex];
    var text = select.options[select.selectedIndex].text;
}

update();

function myFunction(){
    var selectedElement = document.getElementById(DropDown);
    var strSel = selectedElement.options[selectedElement.selectedIndex].value;
    var pageCount = strSel / count;
    for(let i = 1; i<= pageCount; i++){
        let newBtn = document.createElement('button');
        newBtn.innerText=i;
        document.querySelector('#button-container').appendChild(newBtn);
    }
}
/////////////////
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