export class ResponseMenuHandler {
    constructor() {
        let menuButtons = document.getElementsByClassName('response-menu__button');

        for (let key in menuButtons) {
            if (typeof menuButtons[key] !== 'object')
                continue;
            
            menuButtons[key].addEventListener('click', (e) => {
                this.handleButtonClick(e);
            });
        }
    }

    handleButtonClick(e: Event) {
        console.log(e);
    }
}