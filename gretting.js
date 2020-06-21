const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greetings")

const USER_LS = "currentUser",
    SHOWING_CN = "showing"; //여기서 어떻게 css가지는거지???


function saveName (text){
    localStorage.setItem(USER_LS, text);    //Local에 저장 (f5해도 저장되어 있음)
}


function handleSubmit(event){
    event.preventDefault();   //submit 엔터 칠때 새로고침 막기 위한
    const currentValue = input.value;   //해당 값을 가져 오기 위해
    // input 받은 값을 그대로 입력
    // console.log(currentValue)
    paintGreeting(currentValue)
    saveName(currentValue)
}

function askForName() {
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit);
}

function paintGreeting(text){
    form.classList.remove(SHOWING_CN)
    greeting.classList.add(SHOWING_CN)
    greeting.innerText = `hello ${text}`;
    //출력 값에 hello + input받은 값 출력
}

function loadName(){
    const currentUser = localStorage.getItem(USER_LS)
    if (currentUser === null){
        //currentUser 가 없으면 user 이름을 요청 
        askForName();
    }else {
        paintGreeting(currentUser);
    }
}


function init(){
    loadName();
}

init();
