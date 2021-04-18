document.addEventListener('DOMContentLoaded', () => {

    const character = document.querySelector('#character');
    const block = document.querySelector('#block');
    const game = document.querySelector('#game');
    const points = document.querySelector('#points');
    const daycount = document.querySelector('#daycount');

    let days = 1;
    let score = 0;

    
    
    function react(event){

        switch(event.key){

            case 'ArrowUp':
            case ' ':
            case 'w':
                if(character.classList == 'animate'){

                    return;
        
                } else {
        
                    character.classList.add('animate');
        
                    setTimeout(() => {character.classList.remove('animate');}, 500);
        
                }

                break;

            
            case 'ArrowDown':
            case 's':
                if(character.classList != 'animate'){

                    return;

                } else {

                    character.classList.remove('animate');

                }

                break;


            case 'p':
                
                alert('Paused\n\nPress OK or Space to continue');

                break;

        }

    }

    window.addEventListener('keydown', react);

    function detect(){

        let characterX = character.getBoundingClientRect().x;
        let characterY = character.getBoundingClientRect().y;
        let characterWidth = character.getBoundingClientRect().width;
        let characterHeight = character.getBoundingClientRect().height;
        let objectX = block.getBoundingClientRect().x;
        let objectY = block.getBoundingClientRect().y;
        let objectWidth = block.getBoundingClientRect().width;
        let objectHeight = block.getBoundingClientRect().height;

        if(characterX < objectX + objectWidth &&
            characterX + characterWidth > objectX &&
            characterY < objectY + objectHeight &&
            characterHeight + characterY > objectY){

                score = score;

                alert(
                    
                    "\nGAME OVER.\n\nYour Score: " + score +
                    "\nDay: " + days
                );

                window.location.reload()

            } else {

            score++;

            points.innerHTML = score;

            }

        }

    setInterval(detect, 100);


    

    function scoreDetect(){

        if(score == 10){

            daycount.innerHTML = "DAY " + days;

            setTimeout(() => {

                daycount.style.opacity = 0;

                daycount.classList.add('hidden');

            },1000);

        } else if(score == 100){

            block.style.animation = 'come 1.5s infinite linear';

        } else if (score == 200){

            block.style.animation = 'come 1s infinite linear';

        } else if (score == 300){

            block.style.height = '50px';
            block.style.top = '136px'

        } else if (score == 400){

            block.style.animation = 'come 0.75s infinite linear';

        } else if (score == 500){

            block.style.display = 'none';

            game.style.backgroundColor = '#161816';

            daycount.style.color = 'white';

            daycount.style.opacity = 1;

            daycount.classList.remove('hidden');

            daycount.innerHTML = "END OF DEMO";

            points.style.color = 'white';

            points.classList.add('hidden');

        }

    }

    setInterval(scoreDetect, 100);

})