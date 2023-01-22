const form = document.querySelector('form');
const nlwSetup = new NLWSetup(form);
const button = document.querySelector('header button');

button.addEventListener('click', add);
form.addEventListener("change", save);

function add() {
    const today = new Date().toLocaleDateString('pt-br').slice(0, -5)
    const dayExists = nlwSetup.dayExists(today)

    if (dayExists) {
        alert("dia ja ta incluso")
        return
    }


    alert('adicionado com sucesso ✅')
    nlwSetup.addDay(today)

    //parei nos 19:32 da aula
}

function save() {
    localStorage.setItem('NLWSetup@habits', JSON.stringify(nlwSetup.data))
};

const data = JSON.parse(localStorage.getItem("NLWSetup@habits")) || {}
nlwSetup.setData(data);
nlwSetup.load();