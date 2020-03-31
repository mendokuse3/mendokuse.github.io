$(() => {


// on opening, have modal that displays intro
    const $introModal = $('#intro-modal');
    const $closeIntro = $('.close');

    $closeIntro.on('click', () => {
        $introModal.hide();
    });


// timer on top
    // simply counts down from variable time, which by default
    // will be a set amount of time, but can be adjusted at bottom
    let time = 5;
    const $roundTime = $('#time').text(time);
    
    const countDownTime = () => {
        const timer = setInterval(function() {
            time --;
            $roundTime.text(time)
            if(time < 0){
                $roundTime.css('font-size', '23px');
                $roundTime.text('TIME IS UP');
                clearInterval(timer);
            }
        }, 1000);
    }
    
    $closeIntro.on('click', countDownTime);



// info area
    const $score = $('#score');
    const $missCounter = $('#miss-counter');
    const $remainingTargets = $('#remaining-targets');
    const $round = $('#round');

    let score = 0;
    let missCounter = 0;
    let remainingTargets = 20;
    let round = 1;
    // score which will update continuously upon clicks
    // miss clicked which will track expired targets and if you click on body
    // targets left will be default 20 targets, but can be set in bottom
    // round count will be default 5, but can be adjusted
    
    const updateInfo = () => {
        $score.text(score);
        $missCounter.text(missCounter);
        $remainingTargets.text(remainingTargets);
        $roundTime.text(round);
    }

    
// game area
    // 2 different arrays to pick from, of good and bad
    const pestArray = [
        "https://cdn.pixabay.com/photo/2013/07/13/10/26/snail-157212_1280.png", "https://cdn.pixabay.com/photo/2012/04/02/14/24/hungry-worm-24634_1280.png", "https://cdn.pixabay.com/photo/2013/07/13/10/15/cockroach-156887_1280.png"  
    ]

    const dontClickArray = [
        "https://cdn.pixabay.com/photo/2014/04/03/09/58/eggplant-309459_1280.png", "https://cdn.pixabay.com/photo/2012/04/18/20/21/strawberry-37781_1280.png", "https://cdn.pixabay.com/photo/2013/07/12/18/19/tomato-153272_1280.png"
    ]

    const $gamezone = $('#play-area');

    const createTargets = () => {
        const target = $('<div>').addClass('target');
        target.css('background-image', `url(${pestArray[0]}`);

        target.on('click', (event) => {
            const item = event.currentTarget;
            // clicking on image will remove the div and add a point to score while decrementing target left
            // increment score and decrement targets left
            score += 100;
            remainingTargets --;
            updateInfo();
            item.remove();
            
        })
        
        $gamezone.append(target);
    }
    createTargets();


    // math.random to randomly generate position x and position y
    // divs that pop up are absolute and contain random images which will be in an array
    // target will last a set time before removing itself
    // clicking on body will decrement score
    // after all the targets have been displayed and clicked, round is over
    // once round is over, either display button or time before next round



// option area
    // rules will be a button that opens modal that explains the rules of game
    // num of popups will take input that adjusts target left in info aka max targets/round
    // popup size will take input that adjusts size of divs -> images
    // round timer will adjust time at top
    // target duration will adjsut time counter at top, which stays same at each round
    




})