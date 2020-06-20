// 브라우저title 클릭시 색을 변환해라   (이벤트 감지 @click)
const title = document.querySelector("#title");
console.log('첫번째');

function handevent(){
    title.style.color = "red";
    console.log('handevent 감지시 로그');
}

//addEventListener 이벤트 탐지??
title.addEventListener('event', handevent);
console.log('title event 될떄');

//메소드
