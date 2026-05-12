const p = document.getElementById('pantalla');
const container = document.getElementById('botones');

const botones = [
    ['C', 'limpiar', null],
    ['÷', 'fn', '/'], ['×', 'fn', '*'], ['←', 'fn', null],
    ['7', '', '7'], ['8', '', '8'], ['9', '', '9'], ['-', 'fn', '-'],
    ['4', '', '4'], ['5', '', '5'], ['6', '', '6'], ['+', 'fn', '+'],
    ['1', '', '1'], ['2', '', '2'], ['3', '', '3'], ['.', 'fn', '.'],
    ['0', 'cero', '0'], ['=', 'igual', null]
];

botones.forEach(([texto, clase, valor]) => {
    const btn = document.createElement('button');
    btn.textContent = texto;
    if (clase) btn.className = clase;
    btn.onclick = () => {
        if (texto === 'C') p.value = '';
        else if (texto === '←') p.value = p.value.slice(0, -1);
        else if (texto === '=') { try { p.value = eval(p.value); } catch { p.value = 'Error'; } }
        else p.value += valor;
    };
    container.appendChild(btn);
});