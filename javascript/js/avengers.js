//API 
var avengers = ['Tony Stark', 'Clint Barton', 'Natasha Romanoff', 'Steve Rogers', 'Bruce Banner', 'Spiderman']

function listaVingadores() {

    var ul = document.getElementById('avengers')
    ul.innerHTML = ''

    avengers.forEach(function (a) {
        var li = document.createElement('li')
        var text = document.createTextNode(a)
        li.appendChild(text)
        ul.appendChild(li)
        //    console.log(a) comando para imprimir na devtools google chrome
    })
}