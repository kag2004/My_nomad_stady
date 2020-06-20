// if(20 > 5 && ){ 
//     console.log('yes')
// } else {
//     console.log('no')
// }

const age = prompt("너의 나이는???");
// console.log('입력 받은 나이 확인 :: ', age);

//0~10 아직성장중 / 10~20 생명력이 넘쳐!! / 20~30 젊어 / 30~40 인생에 재미 낙이 없음 / 40~50 이제 다 재미 없어질때 / 50~60 슬슬 놓아줘야 하는 if로 만들어라
if (age >= 0 && age <=10 ){
    console.log("0~10 아직성장중");
} else if (age >= 10 && age <= 20){
    console.log("10~20 생명력이 넘쳐!!"); 
} else if (age >= 20 && age <= 30){
    console.log("20~30 젊어서 당돌해"); 
}
console.log('??')
