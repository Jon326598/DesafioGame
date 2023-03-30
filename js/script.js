const mario = document.querySelectorAll('.mario')[0];
        const jump = () => {
            mario.classList.add("jump");
            setTimeout(()=>{
                mario.classList.remove('jump');
            },500);
        }
        document.addEventListener('keydown', jump);