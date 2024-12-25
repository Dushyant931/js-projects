var a = document.querySelector("h1")
var b = document.querySelector("button")
var flag = 0;
b.addEventListener('click',function(){
    if(flag ==0){
    a.innerHTML="SENDING REQUEST..."
    b.innerHTML="Adding"
    setTimeout(() => {
        a.innerHTML="FRIENDS"
        b.innerHTML="Remove friend"
        flag = 1;
        
        
    }, 3000);}
    else{
        a.innerHTML="STRANGER"
        b.innerHTML="add friend"
        flag = 0;
    }

    

    
    



})