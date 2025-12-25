function appendOperation(operation) {
    document.getElementById('resultarea').innerHTML += operation;
}

function calculateResult() {
    let container = document.getElementById('resultarea');
    let result = eval(container.innerHTML);
    container.innerHTML = result;
}

function deleteLast() {
    let container = document.getElementById('resultarea');
    if (container.innerHTML.endsWith(' ')) {
        container.innerHTML = container.innerHTML.slice(0, -3)
    } else {
        container.innerHTML = container.innerHTML.slice(0, -1)
    }

}