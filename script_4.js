//1

let i = 1;
let n = Number (prompt('Привет'));
while ( i <= n) {
    alert('Привет'); 
    i++
}

//2

let i = 1;
do {
  console.log(i);
  i++
} while ( i < 6);

//3


let i = 7;
do {
  console.log(i);
  i++
} while ( i < 23);


//4

const obj = {
  Коля: 200,
  Вася: 300,
  Петя: 400,
}
for (const key in obj) {
    console.log (`${key} - зарплата ${obj[key]} долларов`);
}


//5

let n =1000;
let nam=0;
while (n >= 50) {
    n /= 2;
    nam++;
}  
    console.log (n);
    console.log(nam);

//6

for (let day = 3; day <= 31; ) {
    if (day += 7 ) {
    }console.log (`Сегодня пятница, ${day}-е число. Необходимо подготовить отчет.`)
}
