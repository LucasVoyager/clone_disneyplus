document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('[data-tab-button]');
    const questions = document.querySelectorAll('[data-faq-question]');
    
    for (let i=0; i< buttons.length; i++) {
        buttons[i].addEventListener('click', function(butt) {
            const tabTarget = butt.target.dataset.tabButton;
            const tab = document.querySelector(`[data-tab-id=${tabTarget}]`);
            hideTabs();
            tab.classList.add('shows__list--is-active');
            changeButton();
            butt.target.classList.add('shows__tabs__button--is-active');
        })
    }

    for (let i = 0; i < questions.length; i++) {
        questions[i].addEventListener('click', openAndCloseQuestion)
    }
})

function openAndCloseQuestion(element) {
    const classe = 'faq__questions__item--is-open';
    console.log(element);
    const elemDad = element.target.parentNode;

    elemDad.classList.toggle(classe);
}

function hideTabs() {
    const tabContainers = document.querySelectorAll('[data-tab-id]');

    for(let i = 0; i< tabContainers.length; i++) {
        tabContainers[i].classList.remove('shows__list--is-active');
    }
}

function changeButton() {
    const buttons = document.querySelectorAll('[data-tab-button]');

    for (let i=0; i< buttons.length; i++) {
        buttons[i].classList.remove('shows__tabs__button--is-active');
    }
}