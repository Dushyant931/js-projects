var b = ''
var c = document.querySelector('.storiyan')
var d = document.querySelector('.full')
var g = document.querySelector('.rprogress')
var z = document.querySelector('#user')
var arr = [
    {
        dp:'https://images.unsplash.com/photo-1734366965586-dc4155c0b9b7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0MHx8fGVufDB8fHx8fA%3D%3D',
        story:'https://images.unsplash.com/photo-1732408078285-b01ebd3992f6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5fHx8ZW58MHx8fHx8',
        username:'SAARTHAK'
    },
    {
        dp:'https://images.unsplash.com/photo-1732408078285-b01ebd3992f6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5fHx8ZW58MHx8fHx8',
        story:'https://images.unsplash.com/photo-1733970730195-9ac7cb726eee?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0OXx8fGVufDB8fHx8fA%3D%3D',
        username:'JAI'
    },
    {
        dp:'https://images.unsplash.com/photo-1734533992947-44970e6e5010?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2MHx8fGVufDB8fHx8fA%3D%3D',
        story:'https://images.unsplash.com/photo-1732692583215-a946ff9d69b1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2NHx8fGVufDB8fHx8fA%3D%3D',
        username:'PRASHANT'
    },
    {
        dp:'https://images.unsplash.com/photo-1733126916745-ae6453f1fe4e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2NXx8fGVufDB8fHx8fA%3D%3D',
        story:'https://images.unsplash.com/photo-1731076274484-e3882b02d523?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5MHx8fGVufDB8fHx8fA%3D%3D',
        username:'HARSH'
    },
    {
        dp:'https://plus.unsplash.com/premium_photo-1725400826922-39ffcf68f736?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMDJ8fHxlbnwwfHx8fHw%3D',
        story:'https://images.unsplash.com/photo-1732480509151-cb3d991ff9a2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMDN8fHxlbnwwfHx8fHw%3D',
        username:'TANMAY'
    },
    {
        dp:'https://images.unsplash.com/photo-1731505103716-7ee6fa96dee5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMzB8fHxlbnwwfHx8fHw%3D',
        story:'https://images.unsplash.com/photo-1731505103716-7ee6fa96dee5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMzB8fHxlbnwwfHx8fHw%3D',
        username:'YASH'
    },

]
arr.forEach(function(elem, idx){
    b = b + `            <div class="story">
                <img id=${idx} src="${elem.dp}" alt="">
            </div>
`

})
c.innerHTML = b
c.addEventListener('click', function(dets){
    var e = 0 
    var f = setInterval(function(){
        e++
        g.style.width = e + '%'
    },20)
    var imp = arr[dets.target.id]
    d.style.display = 'block'
    d.style.backgroundImage = `url(${imp.story})`
    z.innerHTML = imp.username
    setTimeout(function(){
        d.style.display = 'none'
        clearInterval(f)
    },2000)  
})