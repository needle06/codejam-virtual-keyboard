import Keyboard from "./Keyboard";

let wrapper = document.createElement('div');
wrapper.classList.add('wrapper');

let textArea = document.createElement('textarea');
document.body.append(wrapper);
wrapper.prepend(textArea);
//wrapper.append(keyboard);

let keyboard = new Keyboard(wrapper);