export class ResponseMenuHandler {
    constructor() {
        let menuButtons = document.getElementsByClassName('response-menu__button');

        for (let key in menuButtons) {
            if (typeof menuButtons[key] !== 'object')
                continue;

            menuButtons[key].addEventListener('click', (e) => {
                this.handleButtonClick(menuButtons, key, e);
            });
        }
    }

    handleButtonClick(buttons: HTMLCollectionOf<Element>, index: string, e: Event) {
        if (!buttons[index].classList.contains('mdl-button--colored')) {
            for (let key in buttons) {
                if (typeof buttons[key] !== 'object')
                    continue;

                if (buttons[key].classList.contains('mdl-button--colored'))
                    buttons[key].classList.remove('mdl-button--colored');
            }

            buttons[index].classList.add('mdl-button--colored');
        }

        let availableElements = document.getElementsByClassName('response-card__element');
        let tabToDisplay = buttons[index].getAttribute('data-item');

        for (let key in availableElements) {
            if (typeof buttons[key] !== 'object')
                continue;

            if (!availableElements[key].classList.contains('hide-element'))
                availableElements[key].classList.add('hide-element');

            if (availableElements[key].classList.contains(`response-card__${tabToDisplay}`))
                availableElements[key].classList.remove('hide-element');

        }
    }
}