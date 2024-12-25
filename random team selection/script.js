var w = ['CSK', 'KKR', 'MI','RCB', 'RR', 'SRH' ]
var a = document.querySelector('button')
var b = 0
var c = document.querySelector('h1')
a.addEventListener('click', function(){
    b = Math.floor(Math.random()*6)
    c.innerHTML = w[b]
})