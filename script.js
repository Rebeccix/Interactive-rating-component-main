// Button rating 
const buttons = document.getElementsByClassName('rateButton')

const clickRatingButton = (event) => {
    
    for (let i = 0; i < 5; i++) {
        buttons[i].classList.remove('marked')
    } 
    event.target.classList.toggle('marked')
}

// --------------------------------

// Submit button 
const containerDefault = document.getElementById('section-rating')
const containerSubmited = document.getElementsByClassName('thanks-submit')

const SubmitButton = () => {

    let arr = []

    for (let i = 0; i < 5; i++) {
        arr.push(buttons[i].classList.contains('marked'))
    } 
    if (arr.includes(true)) {
        containerDefault.style.display = 'none';
        containerSubmited[0].style.display = 'flex';
    } 
}

// --------------------------------
