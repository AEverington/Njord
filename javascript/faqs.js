const questions = document.getElementsByClassName('question');
const dropdowns = document.getElementsByClassName('dropdown-icon');

// Open Answer //

function openQuestion(event) {
    event.stopImmediatePropagation();
    this.removeEventListener('click', openQuestion);
    event.currentTarget.querySelector('.answer').classList.add('open')
    event.currentTarget.querySelector('.question-wrapper').querySelector('.dropdown-icon').style.transform = "rotate(180deg)";
    this.addEventListener('click', closeQuestion);
}

function closeQuestion(event) {
    event.stopImmediatePropagation();
    this.removeEventListener('click', closeQuestion);
    event.currentTarget.querySelector('.answer').classList.remove('open');
    event.currentTarget.querySelector('.question-wrapper').querySelector('.dropdown-icon').style.transform = "rotate(0deg)";
    this.addEventListener('click', openQuestion);
}

for (let i = 0; i < questions.length; i++) {
    questions[i].addEventListener('click', openQuestion);
}
