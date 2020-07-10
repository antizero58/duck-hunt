'use strict';

document.addEventListener('click', () =>
{
  const target = event.target;
  
  for (let i = 1; i <= 7; i++) 
  {
    if (target.closest(`.duck-${i}`))
    {
      setTimeout(() =>
      {
        const aud = new Audio('resources/shot.mp3');
        aud.play();
      });
      return;
    }
  }
});

function restart() {
  for (let i = 1; i <= 7; i++) 
  {
    let duckClass = `duck-${i}`;
    let duckCheckClass = `check-duck-${i}`;

    let duck1 = document.querySelector('.' + duckClass);
    duck1.classList.remove(duckClass);
    void duck1.offsetWidth;
    let checkDuck1 = document.querySelector('.' + duckCheckClass);
    checkDuck1.checked = false;
    duck1.classList.add(duckClass);
  }
}
