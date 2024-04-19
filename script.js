const form = document.getElementById('form-submit');
let linhas = '';
const names = [];
const tels = [];


form.addEventListener('submit', function(e) {
    e.preventDefault();
    addLinha();
})

function addLinha() {
    const nameInput = document.getElementById('name');
    const telInput = document.getElementById('tel');
    
    names.push(nameInput.value);
    tels.push(telInput.value);

    let linha = '<tr>';
    linha += `<td>${nameInput.value}</td>`;
    linha += `<td>${telInput.value}</td>`;
    linha += '</tr>';

    linhas += linha

    const bodyTable = document.querySelector('tbody');
    bodyTable.innerHTML = linhas;

    nameInput.value = '';
    telInput.value = ''; 
}