//Simple for loop with array

let a = [1,2,3,4];
for(let i=0; i<a.length; i++){
	console.log(a[i]*a[i]);
}


//array of object

let abc = [{name : 'siraj', age : 30},
            {name : 'misba', age : 26},
            {name : 'zainu', age : 2},
            {name : 'zoyu', age : 2}]
            
for(let i=0; i<abc.length; i++){
// console.log(abc[i].name, abc[i].age);
console.log(`hello ${abc[i].name} ${abc[i].age}`)
}

