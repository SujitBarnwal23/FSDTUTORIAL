const age = 20;

if(age==20){
    console.log('age is 20');
}
else if (age==54){ //only checks for value
    console.log('age is 54' );
}
else{
    console.log('age is not 20');
}

const number = '54';

if(number==20){
    console.log('number is 20');
}
else if (number===54){ // checks for both data type and value
    console.log('number is 54' );
}
else{
    console.log('number is not 20');
}

//operators like boolean values{true,false}, !=(not equal to),!==(compulsory not equal to),>,<,>=,<=(greater than, less than, greater than equal to, less than equal to)
//logical operator && (and) dono condition true hona chahiye, operator || (or) koi bhi true huya toh pura condition true

//terniary operator
console.log(age == 20 ? 'age is 20' : 'age is not 20');//first condition and then if true hai toh karna chahiye and agar false huya toh kya karna hai

// switch case statements

switch(age){
    case 20:
console.log('you are 20')
    break;
    case 18:
console.log('you are 18')
    break;
    default: 
    console.log('your age is unknown')
    break;
}
// without break
switch(age){
    case 20:
console.log('you are 20')
    
    case 18:
console.log('you are 18')
    
    default: 
    console.log('your age is unknown')
    break;
}


//loops 

// genearl loop -- > for ,while , do while

for (let i = 0;i<10;i++){
    console.log(i);
}
let a =0
while(a<11){
    console.log(a);
    a++;
}
//now explainig diff b/w while and do while
// let k = 10;
// do{
//     console.log(k);
//     k+=1;
// }while(k<11)

/// lets understand break and continue
// let k = 0;
// do{
//     console.log(k);
//     if (k===5){
//         break;
//     }
//     k+=1;
// }while(k<10)x    
// console.log('done')
// let k = 0;
// do{
//     if (k===5){
//         continue;
//     }
//     console.log(k);
//     k+=1;
// }while(k<10)
// console.log('je')

let arr = [2,3,4,5]
arr.forEach(function(element){
    console.log(element);
})

// let arr = [2,3,4,5]
arr.forEach(function(element,index,array){
    console.log(element,index,array);
})


let obj = {
    name:'sujit',
    age:30
}
for(let key in obj){
    console.log(obj[key])
}

//functions
// // even can be declared as 
// const meet = function(parameter){
//     code block
// }
function meet(name,place='fff'){
    console.log(`${name} meet me in ${place}`);
    return 5;
}

let name= 'mulund';
let place ='ghansoli';
let valu = meet(name,place);

console.log(valu)//give default value ie fff of return even if any parameter is missing

const myobj = {
    name :'sanju',
    game:function(){
        return 'free fire';
    }
}
console.log(myobj.game())






























