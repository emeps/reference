const newTask = document.querySelector('.new-task'); //input
const addTask = document.querySelector('.add-new-task'); // botão
const task = document.querySelector('.task'); //lista
// Adiciona as informações da nova tarefa.
function addList(){
    const li = document.createElement('li');
    return li;
};
// Habilita a tecla enter para envio de uma nova tarefa
addTask.addEventListener('keypress', function(e){
    if(e.keyCode === 13){
        if(!newTask.value) return;
        addNewTask(newTask.value);
    }
});
// Captura o valor da tarefa 
addTask.addEventListener('click', function(){
    addNewTask(newTask.value); 
 });
//  Limpa a entrada para nova tarefa
function clearInput(){
    newTask.value = '';
    newTask.focus();
}
// Adiciona nova tarefa.
function addNewTask(textIput){
    const li = addList();
    li.innerText = textIput;
    task.appendChild(li);
    clearInput();
    Delete(li);
    saveTask();
};
// Adiciona o botão de delete nas tarefas
function Delete(li){
    li.innerText += '';
    const buttonDelete = document.createElement('button');
    buttonDelete.innerText = 'Delete';
    li.appendChild(buttonDelete);
    buttonDelete.setAttribute('class', 'apagar');
}
// Remove as tarefas
document.addEventListener('click', function(e){
    const el = e.target;
    if(el.classList.contains('apagar')){
        el.parentElement.remove();
        saveTask();
    }
});
// Salvar as Tarefas 
function saveTask(){
    const liTask = task.querySelectorAll('li');
    const listTask = [];
    for(let tasks of liTask){
        let taskText = tasks.innerText;
        taskText = taskText.replace('Delete', '').trim(); 
        listTask.push(taskText);
    }
    // Converte o Array em arquivo JSON.
    const taskJSON = JSON.stringify(listTask);
    localStorage.setItem('taskies', taskJSON);
}
// Lê o localstorage do navegador.
// Adiciona os valores do localStorage a tarefas. 
function readyTask(){
    const taskRead = localStorage.getItem('taskies');
    const ListRead = JSON.parse(taskRead);
    for(let tarefas of ListRead){
        addNewTask(tarefas);
    }
}
readyTask();