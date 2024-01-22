'use strict';

{
  document.addEventListener('click', ()=>{
  
  document.addEventListener('mousemove', (e) => {
    document.querySelector('p').textContent = `X: ${e.clientX} Y: ${e.clientY}`;
  });
});
}