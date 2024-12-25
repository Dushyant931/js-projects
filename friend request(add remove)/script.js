var a = document.querySelector('button')
var b = document.querySelector('.photo')
var c = document.querySelector('h1')
var flag = 0
a.addEventListener('click', function(){
    if(flag==0){
        a.innerHTML = 'REMOVE FRIEND'
        c.innerHTML = 'FRIENDS'
        b.style.border = '2px solid green'
        flag = 1
    }
    else{
        a.innerHTML = 'ADD FRIEND'
        c.innerHTML = 'Strangers'
        b.style.border = '2px solid red'
        flag = 0
    }

    
})