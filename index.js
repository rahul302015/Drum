

for( var i=0;i<document.querySelectorAll("button").length;i++)
{
  document.querySelectorAll("button")[i].addEventListener("click",function (){
    var buttoninner=this.innerHTML;
    sound(buttoninner);
    animation(buttoninner);
})
}
document.addEventListener("keypress",function(event)
{
  sound(event.key);
  animation(event.key);
});

function sound(key)
{
  switch (key) {
    case "w":
      var crash=new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "a":
      var kickbass=new Audio("sounds/kick-bass.mp3");
      kickbass.play();
      break;
    case "s":
      var snare=new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "d":
      var tom1=new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "j":
      var tom2=new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "k":
      var tom3=new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "l":
      var tom4=new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    default:
          console.log(buttoninner);
        }
}
function animation(y)
{
  var x=document.querySelector("." + y);
  x.classList.add("pressed");
  setTimeout(function(){x.classList.remove("pressed")},100);
}
