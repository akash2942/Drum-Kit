var numberofdrums = document.querySelectorAll(".drum").length;

for(var i=0;i<numberofdrums;i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click",function(){
      var buttonInnerHtml = this.innerHTML;
      makeSound(buttonInnerHtml);
      buttonAnimation(buttonInnerHtml);

  });

}

document.addEventListener("keypress",function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
});

function makeSound(key) {

  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    case "j":
      var c = new Audio("sounds/c.mp3");
      c.play();
      break;

    case "k":
      var a = new Audio("sounds/a.mp3");
      a.play();
      break;

    case "l":
      var b = new Audio("sounds/b.mp3");
      b.play();
      break;


    default: console.log(key);

  }
}

function buttonAnimation(currentKey) {

  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);

}
