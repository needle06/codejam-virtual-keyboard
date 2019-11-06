import Keyboard from './Keyboard';

const wrapper = document.createElement('div');
wrapper.classList.add('wrapper');

const textArea = document.createElement('textarea');
document.body.append(wrapper);
wrapper.prepend(textArea);


const keyboard = new Keyboard(wrapper, textArea);
keyboard.render();
