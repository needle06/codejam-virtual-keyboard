export default class Key {
  constructor(valueRuLow, valueRuUp, valueEnLow, valueEnUp, keyCode, parent) {
    this.valueRuLow = valueRuLow;
    this.valueRuUp = valueRuUp;
    this.valueEnLow = valueEnLow;
    this.valueEnUp = valueEnUp;
    this.parent = parent;
    this.child = null;
    this.button = null;
    this.keyCode = keyCode;
    this.createButton();
  }

  createButton() {
    this.child = document.createElement('span');
    this.child.innerText = this.valueRuLow;
    this.button = document.createElement('div');
    this.parent.append(this.button);
    this.button.append(this.child);
    this.button.classList.add('key');
    this.button.id = this.keyCode;
  }

  render(language, capsState, shiftState) {
    if (language === 'ru' && capsState === shiftState) {
      this.child.innerText = this.valueRuLow;
    }
    if (language === 'ru' && capsState !== shiftState) {
      this.child.innerText = this.valueRuUp;
    }
    if (language === 'en' && capsState === shiftState) {
      this.child.innerText = this.valueEnLow;
    }
    if (language === 'en' && capsState !== shiftState) {
      this.child.innerText = this.valueEnUp;
    }

    if (capsState === true && this.keyCode === 20) {
      this.button.classList.add('active');
    }
    if (capsState === false && this.keyCode === 20) {
      this.button.classList.remove('active');
    }
  }
}
