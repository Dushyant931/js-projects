var a = document.querySelector('#b')
var b = document.querySelector('.bulb')
var flag = 0
a.addEventListener('click',function(){
    if(flag==0){

    b.style.backgroundColor = 'yellow'
    flag = 1
    }
    else{
        b.style.backgroundColor = 'gainsboro'
        console.log('clic');
        flag = 0
        

        
    }


    
})