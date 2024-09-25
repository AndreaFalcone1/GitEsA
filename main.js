//Binding
let bottoneGenerate = document.getElementById('bottoneGenerate');
let lista = document.getElementById('lista');

//Vars
let arrayLaboratori = [
  //--1--//
  {
    lab: '121',
    posti: 25,
    occupato: [false, true, true, false, true],
  },
  //--2--//
  {
    lab: '122',
    posti: 26,
    occupato: [true, true, false, false, false],
  },
  //--3--//
  {
    lab: '6',
    posti: 24,
    occupato: [false, false, true, true, true],
  },
  //--4--//
  {
    lab: '24',
    posti: 28,
    occupato: [false, true, true, true, false],
  },
];

let list = '';

bottoneGenerate.onclick = () => {
  list = arrayLaboratori.map((element) => {
    let listDisponibilita = [];
    for (let i = 0; i < element.occupato.length; i++) {
      if (element.occupato[i]) {
        listDisponibilita.unshift(
          'Il laboratorio ' +
            element.lab +
            " è libero all'ora " +
            parseInt(i + 1)
        );
      }
    }
    return listDisponibilita;
  });
  render();
};

const render = () => {
  let stringBuilder = '<hr>';
  for (let i = 0; i < list.length; i++) {
    for (let j = 0; j < list[i].length; j++) {
      stringBuilder += list[i][j] + '<br>';
    }
    stringBuilder += '<hr>';
  }
  lista.innerHTML = stringBuilder;
};
