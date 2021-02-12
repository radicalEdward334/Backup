document.addEventListener('DOMContentLoaded', () => {
    const grid = document.querySelector('.grid');
    const doodler = document.createElement('div');
    let doodlerLeftSpace = 100;
    let doodlerBottomSpace = 0;
    let doodlerBottomSpaceTmp = 200;// this changes with spacebar tap += 200
    let platformCount = 10;
    let isGameOver = false;
    let move = false;
    let platforms = [];
    let upTimerId;
    let downTimerId;

    
    function createDoodler() { // doodler is just a div
        grid.appendChild(doodler);
        doodler.classList.add('doodler');
        doodler.style.left = doodlerLeftSpace + 'px';
        doodler.style.bottom = doodlerBottomSpace + 'px';
        // a refreshing .getBoundingClientRect()

    }

    class Platform { //construct a platform for the grid
        constructor(newPlatBottom) {
            this.bottom = newPlatBottom;
            this.left = Math.random() * 315;
            this.visual = document.createElement('div');

            const visual = this.visual;
            visual.classList.add('platform');
            visual.style.left = this.left + 'px';
            visual.style.bottom = this.bottom + 'px';
            grid.appendChild(visual)
        }
    }

    function createPlatforms() {
        for(let i=0; i < platformCount; i++) {
            let platGap = 1300 / platformCount;
            let newPlatBottom = 100 + i * platGap;
            let newPlatform = new Platform(newPlatBottom);
            platforms.push(newPlatform)
            console.log(platforms)
        }
    }

    // REFACTOR THE PLATFORMS MOVEMENTS
    function movePlatforms() { 
        if(move) { // if doodlerBottomSpace > last 
    // since all platforms are named .platform cant we move all at once instead of looping?
            platforms.forEach(platform => {
                platform.bottom -= 1;
                platform.visual.style.bottom = platform.bottom + 'px';
            })
        }
    // if the platformBottomSpace is 0 make it fade off the screen
    }


    function jump() {
        clearInterval(downTimerId)
        upTimerId = setInterval(function() { 
            move = true; // starts moving the platforms
            doodlerBottomSpace += 10; // bezier curve?
            doodler.style.bottom = doodlerBottomSpace + 'px';
            if (doodlerBottomSpace > doodlerBottomSpaceTmp) { 
                // make the platforms stop moving 
                doodlerBottomSpaceTmp += 200; 
                move = false; // stops the platforms from moving
                fall();
            } 

        }, 30)
    }   

    function fall() {
        clearInterval(upTimerId) 
        downTimerId = setInterval(function () {
            if(doodlerBottomSpace <= 0) {
                gameOver();
            }
            doodler.style.bottom = (doodlerBottomSpace -= 5) + 'px';

            // Do platform hit calculations here:
            

        },30);
    }


    function gameOver() {
        console.log('game over');
        isGameOver = true;
        clearInterval(upTimerId)
        clearInterval(downTimerId)
    }

    function start() {
        if(!isGameOver) {
            createDoodler();
            createPlatforms();
            setInterval(movePlatforms, 10);
            jump();
        }
    } start()
})