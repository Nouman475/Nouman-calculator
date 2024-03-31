let screen = document.getElementById('screen')
function clr(){
  screen.innerHTML = ""
}
function zero(){
  let data = document.getElementById('screen').innerHTML
  screen.innerHTML = data + "0"
}
 function one(){
  let data = document.getElementById('screen').innerHTML
  screen.innerHTML = data + "1"
 }
 function two(){
  let data = document.getElementById('screen').innerHTML
  screen.innerHTML = data + "2"
 }
 function three(){
  let data = document.getElementById('screen').innerHTML
  screen.innerHTML = data + "3"
 }
 function four(){
  let data = document.getElementById('screen').innerHTML
  screen.innerHTML = data + "4"
 }
 function five(){
  let data = document.getElementById('screen').innerHTML
  screen.innerHTML = data + "5"
 }
 function six(){
  let data = document.getElementById('screen').innerHTML
  screen.innerHTML = data + "6"
 }
 function seven(){
  let data = document.getElementById('screen').innerHTML
  screen.innerHTML = data + "7"
 }
 function eight(){
  let data = document.getElementById('screen').innerHTML
  screen.innerHTML = data + "8"
 }
 function nine(){
  let data = document.getElementById('screen').innerHTML
  screen.innerHTML = data + "9"
 }
function plus(){
  let data = document.getElementById('screen').innerHTML
  screen.innerHTML = data + "+"
}
function minus(){
  let data = document.getElementById('screen').innerHTML
  screen.innerHTML = data + "-"
}
function multiply(){
  let data = document.getElementById('screen').innerHTML
  screen.innerHTML = data + "*"
}
function divide(){
  let data = document.getElementById('screen').innerHTML
  screen.innerHTML = data + "/"
}
function dot(){
  let data = document.getElementById('screen').innerHTML
  screen.innerHTML = data + "."
}
function equal(){
  let value = document.getElementById("screen").innerHTML
  let answer = eval(value)
  screen.innerHTML = answer
}