//simple function

function abc(name, lastname){
    console.log(`hello ${name} ${lastname}`);
}
abc('zainu', 'pathan');


//function with array of object

let abc = [{name : 'siraj', age : 30},
            {name : 'misba', age : 26},
            {name : 'zainu', age : 2},
            {name : 'zoyu', age : 2}]

            let abc1 = [{name : 'siraj1', age : 30},
            {name : 'misba1', age : 26},
            {name : 'zainu1', age : 2},
            {name : 'zoyu1', age : 2}]

function greet (arr){
    for(let i=0;i<arr.length;i++){
        console.log(arr[i].name, arr[i].age);
    }
}
greet(abc);
greet(abc1);
