const mario = document.querySelectorAll('.mario')[0];
const pipe = document.querySelector('.pipe');
const clouds = document.querySelector('.clouds');
const moita = document.querySelector('.moita');
const fimdejogo = document.querySelector('.clouds2');

const jump = () => {
    mario.classList.add("jump");

    setTimeout(()=>{
    mario.classList.remove('jump');
     },500);
}       

const loop = setInterval(() =>{

    console.log('loop')

    const pipePosition = pipe.offsetLeft;
    const cloudsPosition = clouds.offsetLeft;
    const moitaPosition = moita.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px','');

    if(pipePosition <= 80
         && pipePosition > 0 && marioPosition < 80){

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = "./images/game-over.png";
       
        mario.style.marginLeft = '5px'

        clouds.style.animation = 'none';
        clouds.style.left = `${cloudsPosition}px`;

        moita.style.animation = 'none';
        moita.style.left = `${moitaPosition}px`;
        
        fimdejogo.src = "./images/fim-jogo.png";
         

        clearInterval(loop)

    }

}, 10);

    document.addEventListener('keydown', jump);