const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = 'toDos';

const toDos = [];

function saveToDos(){
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos))
}

function paintToDo(text){
    // console.log(text);
    const li = document.createElement("li")
    const delBtn = document.createElement("button")
    const span = document.createElement("span");
    const newId = toDos.length + 1;
    delBtn.value = "XXXXXXXXXXXXX";
    
    span.innerText = text;
    li.appendChild(delBtn);
    li.appendChild(span);
    li.id = newId;
    toDoList.appendChild(li);
    const toDoObj = {
        text:text,
        id: newId
    };
    toDos.push(toDoObj);
    saveToDos();
}


function handleSubmit(event){
    event.preventDefault(); //엔터 잠금
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value ='';
}


// function something(toDo){
//     console.log(toDo.text);
// };

function loadToDos() {
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if (loadedToDos !== null){
        console.log('loadToDos 확인 :: ',loadToDos);
        const parsedToDos = JSON.parse(loadedToDos);
        // console.log(parsedToDos);
        parsedToDos.forEach(function(toDo){
            paintToDo(toDo,text);
            console.log(toDo.text);
        });
    }
}

function init(){
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit)
}

init();
