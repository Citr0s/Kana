declare let ace: any;

import { FormHandler } from "./Handlers/FormHandler";
import { ResponseMenuHandler } from "./Handlers/ResponseMenuHandler";

let editor = ace.edit('response-card__body-actual');
editor.setTheme("ace/theme/monokai");
editor.getSession().setMode("ace/mode/json");

new FormHandler(editor);
new ResponseMenuHandler();

document.onreadystatechange = function () {
    if (document.readyState == 'complete') {
        console.log('ready');
    }
}