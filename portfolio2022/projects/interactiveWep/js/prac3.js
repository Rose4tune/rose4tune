let btns,
    cursorItem,
    circle;

let x = 0,
    y = 0,
    mx = 0,
    my = 0,
    speed = 0.01;

window.onload = function(){
  btns = document.getElementsByName('btn');
  cursorItem = document.getElementById('cursorItem');
  circle = document.getElementById('circle');

  window.addEventListener("mousemove", mouseFunc, false);

  btns.forEach(element => {
    element.addEventListener("mouseover", function(){
      circle.style.transform = `scale(.3)`;
    })
    element.addEventListener("mouseout", function(){
      circle.style.transform = `scale(1)`;
    })
  });

  function mouseFunc(e){
    x = e.pageX;
    y = e.pageY;
    cursorItem.style.display = "block";
    console.log(e)
    loop()
  }

  function loop(){
    mx += (x - mx) * speed;
    my += (y - my) * speed;
    cursorItem.style.transform = `translate(${mx}px, ${my}px)`;
    
    requestAnimationFrame(loop)
  }

}