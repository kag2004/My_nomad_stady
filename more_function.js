function testHello(name, age) {
     console.log(`백틱은  name :: 이거고 ${name}        나이는 ::  ${32} 이다` )
}

const name1 = testHello ('정일', 32);
console.log(` name (testHello 메소드에서 안에 console 내용을 name 변수에 담은거 출력 결과):   ${name1}  `);
/* 이건 로그가 당연히 안찍히네 생각해보니....
콘솔 로그를 변수에 저장하는게 안되지...
단지 testHell 메소드에서 콘솔 로그를 그냥 출력만 하고 반환 값이 없으니 name1은 값이 없을것이다. */


// 수정해서 
function testHello2(name, age) {
    return(`바뀐내용  name :: 이거고 ${name}        나이는 ::  ${32} 이다` )
}

const name2 = testHello2 ('정일', 32);
console.log(name2)