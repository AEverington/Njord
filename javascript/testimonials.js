    const sliderButtons = document.getElementsByClassName("testimonial-nav-button");

function buttonColour() {
    for (let i = 0; i < sliderButtons.length; i++) {
        sliderButtons[i].classList.remove('active');
    }
    switch (track.style.right) {
        case '0vw':
            sliderButtons[0].classList.add('active');
        break;
        case '50vw':
            sliderButtons[1].classList.add('active');
        break;
        case '100vw':
            sliderButtons[2].classList.add('active');
        break;
        case '150vw':
            sliderButtons[3].classList.add('active');
        break;
        case '200vw':
            sliderButtons[4].classList.add('active');
        break;     
    }
}

//-----TESTIMONIAL BUTTON CONTROL-----//

const track = document.getElementById('track');

function positionOne() {
    track.style.right = "0vw";
    buttonColour()
};

function positionTwo() {
    track.style.right = "50vw";
    buttonColour()
};

function positionThree() {
    track.style.right = "100vw";
    buttonColour()
};

function positionFour() {
    track.style.right = "150vw";
    buttonColour()
};

function positionFive() {
    track.style.right = "200vw";
    buttonColour()
};

sliderButtons[0].addEventListener('click', positionOne);
sliderButtons[1].addEventListener('click', positionTwo);
sliderButtons[2].addEventListener('click', positionThree);
sliderButtons[3].addEventListener('click', positionFour);
sliderButtons[4].addEventListener('click', positionFive);

//-----TESTIMONIAL AUTO MOVEMENT-----//

let x = 0;

function moveSlide() {
    let slidePosition = track.style.right;
    let posValue = parseInt(slidePosition);
    let newPos = posValue + 50;
    if (newPos > 200) {
        newPos = 0;
    }
    let posString = newPos.toString();
    let newPosition = posString + 'v' + 'w';
    track.style.right = newPosition;
    buttonColour();
    x++;
    if (x < 10) {
        autoSlide();
    }
}

function autoSlide() {
    setTimeout(moveSlide, 5000);
}

autoSlide();