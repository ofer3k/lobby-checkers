var socket = io();

const b=document.getElementById('b')
const ul = document.getElementById('players');
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const name = urlParams.get('name')
const answer_div=document.getElementById('answer_div')
const yes_button=document.getElementById('yes_button')
const no_button=document.getElementById('no_button')
no_button.addEventListener('click',()=>{
    answer_div.classList.add('display_none')
})
let socketId
let li1=document.getElementById('1')
let li2=document.getElementById('2')
let li3=document.getElementById('3')
let li4=document.getElementById('4')

let str;
let words;
let socketName
let userName

let str1;
let words1;
let socketName1
let userName1

let str2;
let words2;
let socketName2
let userName2

let str3;
let words3;
let socketName3
let userName3



const h1=document.getElementById('headline').innerHTML+=name

b.addEventListener('click',()=>{
    
    socket.emit('contact', { a: socketName, b: name, c:socketId })
})

li1.addEventListener('click',()=>{
    socket.emit('contact', { a: socketName, b: name , c:socketId})
})

li2.addEventListener('click',()=>{
    socket.emit('contact', { a: socketName1, b: name , c:socketId})
   
})
li3.addEventListener('click',()=>{
    socket.emit('contact', { a: socketName2, b: name , c:socketId})
})
li4.addEventListener('click',()=>{
    socket.emit('contact', { a: socketName3, b: name , c:socketId})
})

let userList=['1','2','3']
let socketList=['4','5','6']
const test=document.getElementById('test')
test.addEventListener('click',()=>{
    alert('test')
})

socket.emit('get user name',(name))
socket.on('id',(id)=>{
socketId=id
console.log(socketId)
})

socket.on('users',(users)=>{
    liCount=users.length
    userList.splice(0)
users.forEach(element => {
    userList.push(element)
});

})
socket.on('usersIds',(sockets)=>{
    
    socketList.splice(0)
    sockets.forEach(element => {
        socketList.push(element)
    });
    if(liCount>=1)
    {
       
        document.getElementById('1').innerHTML= userList[0]+' '+ socketList[0]
        str=document.getElementById('1').innerHTML
        words=str.split(' ')
        socketName=words[1]
        userName=words[0]
    }
    if(liCount>=2)
    {
        
        document.getElementById('2').innerHTML= userList[1]+' '+ socketList[1]
        str1=document.getElementById('2').innerHTML
        words1=str1.split(' ')
        socketName1=words1[1]
        userName1=words1[0]
        
    }
    if(liCount>=3)
    {
        
        document.getElementById('3').innerHTML= userList[2]+' '+ socketList[2]
        str2=document.getElementById('3').innerHTML
        words2=str2.split(' ')
        socketName2=words2[1]
        userName2=words2[0]

        
    }
    if(liCount>=4)
    {
        
        document.getElementById('4').innerHTML= userList[3]+' '+ socketList[3]
        str3=document.getElementById('4').innerHTML
        words3=str3.split(' ')
        socketName3=words3[1]
        userName3=words3[0]
       
    }

    })

    socket.on('hey',(data)=>{
        alert(data.b+' wants to play with you!')
        answer_div.classList.remove('display_none')
        yes_button.onclick = function () {
            socket.emit('answer_yes',data)
            location.replace("http://localhost:3000/?name="+name)
        };
    })
    socket.on('play',(data)=>{
        alert(data)
        answer_div.classList.remove('display_none')
        yes_button.onclick = function () {
            socket.emit('answer_yes',data)
            location.replace("http://localhost:3000/?name="+name)
        };
    })
    

    function addEvents(){
        document.getElementById('0').addEventListener('click',()=>{
            let str=document.getElementById('0').innerHTML
            console.log('str'+ str)
            const words=str.split(' ')
            const socket=words[1]
           alert(socket)
            // let socket=str[1]
            // alert(socket)
        })
        if(document.getElementById('1')!=null)
        {
            document.getElementById('1').addEventListener('click',()=>{
                let str=document.getElementById('1').innerHTML
            console.log('str'+ str)
            const words=str.split(' ')
            const socket=words[1]
           alert(socket)
            })
    
        }
        if(document.getElementById('2')!=null)
        {
            document.getElementById('2').addEventListener('click',()=>{
                alert(2)
            })
        }
    }
  

    
    
        
    
   







