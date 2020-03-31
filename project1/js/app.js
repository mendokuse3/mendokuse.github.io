$(() => {


// on opening, have modal that displays story
    const $introModal = $('#intro-modal');
    const $closeIntro = $('.close');

    $closeIntro.on('click', () => {
        $introModal.hide();
    });


// timer on top
    // simply counts down from variable time, which by default
    // will be a set amount of time, but can be adjusted at bottom
    let time = 10;
    const $roundTime = $('#time').text(time);
    
    const countDownTime = setInterval(function() {
        time --;
        $roundTime.text(time);
        if(time < 0){
            clearInterval(countDownTime);
            $roundTime.text('TIME IS UP');
        }
    }, 1000)



// game area
    // math.random to randomly generate position x and position y
    // divs that pop up are absolute and contain random images which will be in an array
    // 2 different arrays to pick from, of good and bad
    // target will last a set time before removing itself
    // clicking on image will remove the div and add a point to score while decrementing target left
    // clicking on body will decrement score
    // after all the targets have been displayed and clicked, round is over
    // once round is over, either display button or time before next round


// info area
    // score which will update continuously upon clicks
    // miss clicked which will track expired targets and if you click on body
    // targets left will be default 20 targets, but can be set in bottom
    // round count will be default 5, but can be adjusted


// option area
    // rules will be a button that opens modal that explains the rules of game
    // num of popups will take input that adjusts target left in info aka max targets/round
    // popup size will take input that adjusts size of divs -> images
    // round timer will adjust time at top
    // target duration will adjsut time counter at top, which stays same at each round
    




})