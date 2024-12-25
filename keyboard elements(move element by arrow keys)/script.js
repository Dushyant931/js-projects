var a = document.querySelector('body')
var b = document.querySelector('img')
var x = 0
var y = 0
document.addEventListener('keydown', function(dets){
    if(dets.code == 'ArrowRight'){
        x++
        b.style.left = x + '%'
    }else if(dets.code == 'ArrowLeft'){
        x--
        b.style.left = x + '%'

    }
    else if(dets.code == 'ArrowDown'){
        y++
        b.style.top = y + '%'
    }else if(dets.code == 'ArrowUp'){
        y--
        b.style.top = y + '%'

    }




})