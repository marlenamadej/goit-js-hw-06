function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

  const changeBackgroundColor=document.querySelector('.change-color');
  const displayColorName=document.querySelector('.color');
  const body=document.querySelector('body');
          
  changeBackgroundColor.addEventListener("click", function(){
    body.style.backgroundColor=getRandomHexColor()
    displayColorName.textContent = getRandomHexColor()
  });

  // ZROBIONE