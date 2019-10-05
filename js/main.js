'use strict';

{
  const num = 5;
  const winner = Math.floor(Math.random() * num);

  for( let i = 0; i < num; i++ ){
    const div = document.createElement('div');
    div.classList.add('box');
    div.textContent = 'Click me!';

    div.addEventListener('click', () => {
      if ( i === winner ) {
        div.classList.add('win');
        div.textContent = 'Win!';
      }
      else {
        div.classList.add('lose');
        div.textContent = 'Lose!';
      }
    });
    document.body.appendChild(div);
  }
}