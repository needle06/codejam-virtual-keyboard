import Key from "./Key";

export default class Keyboard {
  constructor (parent) {
    this.ruLow = [
      ['ё', '1', '2','3','4','5','6','7','8','9','0','-','=', 'Backspace'],
      ['Tab','й', 'ц', 'у', 'к', 'е', 'н','г', 'ш', 'щ', 'з', 'х','ъ','\\', 'DEL'],
      ['CapsLock','ф','ы','в','а','п','р','о','л','д','ж','э','Enter'],
      ['Shift','я','ч','с','м','и','т','ь','б','ю','.','▲','Shift',],
      ['Ctrl','Win','Alt','','Alt','◄','▼','►','Ctrl']
    ];

    this.ruUp = [
      ['Ё', '!', '"','№',';','%',':','?','*','(',')','_','+', 'Backspace'],
      ['Tab','Й', 'Ц', 'У', 'К', 'Е', 'Н','Г', 'Ш', 'Щ', 'З', 'Х','Ъ','\\', 'DEL'],
      ['CapsLock','Ф','Ы','В','А','П','Р','О','Л','Д','Ж','Э','Enter'],
      ['Shift','Я','Ч','С','М','И','Т','Ь','Б','Ю','.','▲','Shift',],
      ['Ctrl','Win','Alt','','Alt','◄','▼','►','Ctrl']
    ];
    
    this.keyCode = [
      [192,49,50,51,52,53,54,55,56,57,48,189,187,8],
      [9,81,87,69,82,84,89,85,73,79,80,219,221,220,46],
      [20,65,83,68,70,71,72,74,75,76,186,222,13],
      [16,90,88,67,86,66,78,77,188,190,191,38,16],
      [17,91,18,32,18,37,40,39,17]
    ]
    this.parent = parent;
    this.state = {
      language: "ru",
      capsLock: false,
      shift: false,
      alt: false,
    }
   

    this.keys = [];
    this.container = document.createElement('div');
    this.parent.append(this.container);

    this.fillRows()

    document.addEventListener('keydown', (e) => {
      console.log(e.code, " ", e.keyCode)
      let keyCode = e.keyCode;
      let targetDiv = document.getElementById(keyCode)
      if (targetDiv === null) {
        return;
      }
      targetDiv.classList.add("keydown");
      this.capsToggle(keyCode);
      this.setShift(keyCode);
      this.setAlt(keyCode);
    })
    document.addEventListener('keyup', (e) => {
      let keyCode = e.keyCode;
      let targetDiv = document.getElementById(keyCode)
      if (targetDiv === null) {
        return;
      }
      targetDiv.classList.remove("keydown");
      this.clearShift(keyCode);
      this.clearAlt(keyCode);
    })
  }

  fillRows() {
    for (let i = 0; i < 5; i++) {
      this.row = document.createElement('div');
      this.row.classList.add('row');
      this.container.append(this.row);
      for (let j = 0; j < this.ruLow[i].length; j++) {
        this.keys.push(new Key(this.ruLow[i][j], this.ruUp[i][j], 'a', 'A', this.keyCode[i][j], this.row));
      }
    }
  }

  capsToggle(keyCode) {
    if (keyCode == 20) {
      this.state.capsLock = !this.state.capsLock;
      this.render()
    }
  }

  setShift(keyCode) {
    if (keyCode == 16) {
      this.state.shift = true;
      this.render()
    }
  }

  clearShift(keyCode){
    if (keyCode == 16) {
      this.state.shift = false;
      this.render()
    }
  }

  setAlt(keyCode) {
    if (keyCode == 18) {
      this.state.alt = true;
      this.render()
    }
  }

  clearAlt(keyCode){
    if (keyCode == 18) {
      this.state.alt = false;
      this.render()
    }
  }

  render() {
    this.keys.forEach(key => {
      key.render(this.state.language, this.state.capsLock, this.state.shift);
    });
  }
}