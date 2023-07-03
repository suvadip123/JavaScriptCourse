
//////////// some array iteration steps ......
// var arr=[1,3,4,7,9,8];
// arr.forEach(function(element){
//     console.log(element)
// })




/////////////  some array methods....... 



// console.log(arr.length);
// arr.pop();
// console.log(arr);
// arr.push("harry");
// console.log(arr)
// arr.shift()
// console.log(arr)
// arr.unshift("suva")
// console.log(arr)




/////////// DOM MANUPULATION TUTORIAL//////////////////
let elem = document.getElementById('click')
console.log(elem)
let elemClassName = document.getElementsByClassName("container")
// elemClassName[0].style.background = "yellow"
elemClassName[0].classList.add("bg-primary")
elemClassName[0].classList.add("text-access")
// finding innertext and innerhtml
console.log(elemClassName[0].innerHTML);
console.log(elemClassName[0].innerText);
// get element by tag name
let tn = document.getElementsByTagName('div')
console.log(tn)
//  create element && append and replace function
let created_element = document.createElement('address')
created_element.innerText = "this is a created text "
tn[0].append(created_element)
let created_element2 = document.createElement('b')
created_element2.innerText = "this is a bold text "
tn[0].append(created_element2)
//  replace function 
tn[0].replaceChild(created_element2, created_element)
// query selector 
let sel = document.querySelector('div')
console.log(sel)
let sel2 = document.querySelectorAll('div')
console.log(sel2)





////////////// event listener//////////////////


// myname.addEventListener('click',function(){
//     document.querySelectorAll('.container')[0].innerHTML = "<b> we have clicked "
//     console.log("clicked here")
// })
// firstcontainer.addEventListener('mouseover',function(){
//     console.log("Mouse over container")
// })
// firstcontainer.addEventListener('mouseout',function(){
//     console.log("Mouse out container")
// })
// let prevHtml=document.querySelectorAll('.container')[0].innerHTML
// myname.addEventListener('mouseup',function(){
//     document.querySelectorAll('.container')[0].innerHTML=prevHtml

//     console.log("Mouse up container")
// })
// myname.addEventListener('mousedown',function(){
//     document.querySelectorAll('.container')[0].innerHTML = "<b> we have clicked </b> "

//     console.log("Mouse down container")
// })



/////////// arrow functions//////////////////


// sum_element = (a,b)=>{
//     return a+b
// }





// ////////set time out and set interval///////////////



// logKiziye = ()=>{
//     document.querySelectorAll('.container')[0].innerHTML = "<b> set interval fired </b>"

//     console.log("i am your logdomain")
// }
// let clrone = setTimeout(logKiziye,5000);
// let clr = setInterval(logKiziye,2000);





//////////// local storage in java script//////////////



// localStorage.setItem('name','suvadip');
// localStorage
// localStorage.getItem('name','suvadip');
// localStorage.removeItem('name');
// localStorage.clear()





/////////// ABOUT JSON OBJECT MODEL  //////////////////////////



// obj ={
//     name:"suva",
//     length:1,
//     a:{this:'that'}
// }
// let jso =JSON.stringify(obj);
// console.log(typeof jso)
// console.log(jso)
// parsed= JSON.parse(`{"name":"suva","length":1,"a":{"this":"that"}}`)
// console.log(parsed)






/////////// backticks tutorial ///////////////


// a=54
// console.log(`this is my favourite number ${a}`)


