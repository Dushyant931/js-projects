var a = ''
var b = document.querySelector('.allstatus')
var c = document.querySelector('#full')
var g = document.querySelector('.rprogress')

const users = [
    {
      username: "Arjun Kumar",
      profilePhoto: "https://images.unsplash.com/photo-1734387981971-037a15511ef6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDZ8dG93SlpGc2twR2d8fGVufDB8fHx8fA%3D%3D",
      timeUploaded: "2 hours ago",
      statusphoto: "https://plus.unsplash.com/premium_photo-1734460410814-490df21137da?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      username: "Priya Sharma",
      profilePhoto: "https://images.unsplash.com/photo-1734534015529-31a65c29880c?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      timeUploaded: "1 day ago",
      statusphoto: "https://plus.unsplash.com/premium_photo-1680087014917-904bb37c5191?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZnJlZXxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      username: "Rajesh Patel",
      profilePhoto: "https://images.unsplash.com/photo-1734312621516-3d258db95e76?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDd8dG93SlpGc2twR2d8fGVufDB8fHx8fA%3D%3D",
      timeUploaded: "3 days ago",
      statusphoto: "https://plus.unsplash.com/premium_photo-1669839774770-df5a3d2da257?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZnJlZXxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      username: "Neha Gupta",
      profilePhoto: "https://plus.unsplash.com/premium_photo-1734218351052-924f089b80c5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE2fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D",
      timeUploaded: "5 days ago",
      statusphoto: "https://images.unsplash.com/photo-1505529686-12fa9bea7f88?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGZyZWV8ZW58MHx8MHx8fDA%3D"
    },
    {
      username: "Amit Singh",
      profilePhoto: "https://images.unsplash.com/photo-1732923323323-8d2e805661df?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE3fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D",
      timeUploaded: "1 week ago",
      statusphoto: "https://images.unsplash.com/photo-1505529686-12fa9bea7f88?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGZyZWV8ZW58MHx8MHx8fDA%3D"
    },
    {
      username: "Ananya Rao",
      profilePhoto: "https://images.unsplash.com/photo-1734423874769-0c9d48f897c4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE4fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D",
      timeUploaded: "2 weeks ago",
      statusphoto: "https://images.unsplash.com/photo-1505529686-12fa9bea7f88?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGZyZWV8ZW58MHx8MHx8fDA%3D"
    },
    {
      username: "Vikram Singh",
      profilePhoto: "https://images.unsplash.com/photo-1734009589019-7c557c4e7e11?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI0fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D",
      timeUploaded: "3 weeks ago",
      statusphoto: "https://images.unsplash.com/photo-1705436002551-8819652397b1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTl8fGZyZWV8ZW58MHx8MHx8fDA%3D"
    },
    {
      username: "Sonal Verma",
      profilePhoto: "https://images.unsplash.com/photo-1734126801303-06da3e3f2db6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIxfHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D",
      timeUploaded: "4 weeks ago",
      statusphoto: "https://images.unsplash.com/photo-1705436002551-8819652397b1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTl8fGZyZWV8ZW58MHx8MHx8fDA%3D"
    },
    {
      username: "Rohit Mishra",
      profilePhoto: "https://images.unsplash.com/photo-1734126801303-06da3e3f2db6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIxfHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D",
      timeUploaded: "1 month ago",
      statusphoto: "https://images.unsplash.com/photo-1705436002551-8819652397b1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTl8fGZyZWV8ZW58MHx8MHx8fDA%3D"
    },
    {
      username: "Sneha Mahajan",
      profilePhoto: "https://images.unsplash.com/photo-1733780254650-506fd134e5fb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQzfHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D",
      timeUploaded: "2 months ago",
      statusphoto: "https://images.unsplash.com/photo-1590524024943-e47373ac9d6d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzB8fGZyZWV8ZW58MHx8MHx8fDA%3D"
    }
  ]
users.forEach(function(elem,idx){
    a = a + `              <div class="status" id="${idx}">
                <img src="${elem.profilePhoto}" alt="">
                <div id="matter">
                    <h4>${elem.username}</h4>
                    <h5></h5>${elem.timeUploaded}
                </div>
            </div>

`
})  
b.innerHTML = a
b.addEventListener('click', function(dets){
  var imp = users[dets.target.id]  
  var e = 0 
  var f = setInterval(function(){
      e++
      g.style.width = e + '%'
  },20)

  c.style.display = 'block'
  c.style.backgroundImage = `url("${imp.statusphoto}")`
  setTimeout(function(){
    c.style.display = 'none'
    clearInterval(f)

  },2000)
  
})
