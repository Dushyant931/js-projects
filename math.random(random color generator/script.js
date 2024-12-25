var a = document.querySelector('button')
var b = document.querySelector('.box')
var c = 0
var d = 0
var e = 0


a.addEventListener('click', function(){
    c = Math.floor(Math.random()*256)
    d = Math.floor(Math.random()*256)
    e = Math.floor(Math.random()*256)
    b.style.backgroundColor = `rgb(${c}, ${d}, ${e})`   
    
    
})