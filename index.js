const entryForm = document.getElementById("entryForm");
const tasksSection = document.getElementById("tasks");
const entryTextBox = document.getElementsByClassName('entry-textbox');


function addEntryToDom(event) {
    event.preventDefault();
    const entryDiv = document.createElement("div");
    entryDiv.className = 'single-task';
    entryDiv.innerText = entryTextBox[0].value;
    tasksSection.appendChild(entryDiv);
    entryTextBox[0].value = 'git'
    

}

entryForm.addEventListener('submit', addEntryToDom);