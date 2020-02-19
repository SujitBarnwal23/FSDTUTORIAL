// after 14 line 
console.time('mycode');
//start
console.log("hi sujit");//strings
console.log(4+43)//math operation
console.log(34);//numericals
console.log(true)//boolean
console.log([4,5,34,123])//array

console.log({sujit:'this',marks:65});//javascript object //sujit ko qoutes me nahi likha yahi syntax hai
console.table({sujit:'this',marks:65});

console.warn('this is warning');
// console.clear();//semicolons nahi lagaya toh chalega but technically lagana chahiye kyuki code sentence ko end kar rahe hai isliye
// and js automatically semicolons assume bhi kar leti hai

// now time function
console.timeEnd('mycode');
//assert for checking whether true or not
//console.assert(age>189,age>189 is not possible);
//console.assert(599>189,age>189 is not possible); and assert me ulti statement ya condition likhunga ki age 189 se kamm hona chahiye
// console.assert(566<189,'Age >189 is not possible');//shown as error and  error manually bhi likh sakte hai
// after commenting 22
console.error('this is an error');
//explain about single line comment and multiline comment ie
// single line ==> //
// multiline ==> /* */

/////////////////////////////////////================================================================================

//variable in js
// same as container but har ek ka apna container hota hai vaise hi js me and hav some rules
// var, let,const ==>keywordsin js
// value assign nahi sirf declare karte hai keyword ko use karke
var name = 'sujit'; 
console.log('name'); // then expalin about " " and back ticks ` ` as `Su"jit` or `suj'it` 
var moto;//sirf inform kiya hai interpreter ko
// moto = 'i am learnig js';
console.log('moto'); // yeah string nahi ek variable hai isliye direct likhenge
console.log(moto); // agar  ko comment kar diya toh shows undefined here jiska matlab sirf inittialize kiya and kuch value nahi diya

var age = 34;
console.log(age);//color is blue notice that .... that means it is number and if '' applied it will be string and no mathematical instruction can be performed
/* Rules for creating js variwable
1. cannot start with numbers
2. can start with letter,  _ , $  and _ and dollars use mat karo jyada tar kyuki js me _ private var ke tor par oops me use karte hai
and  $ jquery jaise js framework me use karte hai toh confusion avoid karne ke liye ise use mat karo.
3. variable names case sensitive
*/

// modern js me const aur let ko jyada use karte hai kyuki code readability ko increase kar diya and code kafi clean lagta hai
var city = ' mumbai';
console.log(city);
city='ghansoli';
console.log(city);
//and yeah mai const ke sath nahi kar sakta tha
const travel = ' manali';
console.log(travel);
//travel = 'amritsar '; ///show error
/// fayda kya hai --- jab programming kar rahe hai and koi variable change na kare ki agar galti se bhi change na kar baithe. and agar variable manipulate galti se ho gya toh bug aane ke chance badh jayenge
// and fir debug karte baithenge and unhi variables ko bane jinhe pure code me same hi rakhna hai

//const fruit; //shows error matlab jab bhi const use karna ho usko declare bhi and value bhi assigned karni padti hai.


//let variable
//var hota hai global level scope kahi bhi if , for loop me use kar sakte hai and voh ek jaisa hi rahega
// let is block level   block==> {   }
{
    let city = 'mulund';
    console.log(city);
}
// and this gives city ghansoli
console.log(city);

// array is connection of numbers sirf const ko thoda aur explain karne ke liye bich me la raha hu
const arr1 = [15,48,56];
arr1.push(85);
console.log(arr1); //execute kar sakta  const me kuch add kar sakte hai but kya nahi kar sakte toh usko re-declare nahi kar sakte.

/*
The various tokens in your code (variables, classes, functions, namespaces, etc.) 
can be named using one of these three styles, broadly speaking:

1. camelCase (ex: someVar, someClass, somePackage.xyz)
2. kebab-case (ex: some-var, some-class, some-package.xyz)
3. PascalCase (ex: SomeVar, SomeClass, SomePackage.xyz)
4.snake_case (ex: some_var, some_class, some_package.xyz)

*/

//white board
// ==> data types -----> primitives data types
let std = 'sujit';
console.log('My name is '+ std);
console.log(typeof name);

// type conversion and coercion

let myVar;
myVar = 34;
console.log(myVar,(typeof myVar));
myVar = String(34);
console.log(myVar,(typeof myVar));
 let booleanVar = true;
 console.log(typeof booleanVar);
 booleanVar =String(true);
 console.log(booleanVar, typeof booleanVar);

 let date = new Date();
 console.log(date , typeof date);

 let datee = String(new Date());
 console.log(datee , typeof datee);

let arr = [1,2,3,4];
console.log(arr,typeof arr);
let arrr = String([1,2,3,4]);
console.log(arrr.length,typeof arrr);

let i = 8;
console.log(i.toString());

//now number func
let stri = "34";
console.log(stri , typeof stri);
let strin = Number("38");
console.log(strin , typeof strin);
let strif = Number("38d");
console.log(strif , typeof strif);

let number = parseInt('64.025');
console.log(number , typeof number);
number = parseFloat('64.025');
console.log(number , typeof number);
number = parseInt('64.025');
console.log(number.toFixed(4) , typeof number);//converts it to that decimal point
number = parseFloat('64.025');
console.log(number.toFixed(4) , typeof number);

//type coercion
let mystr = "698";
let mynum = 34;
console.log(mystr+mynum);
// string ko number me cinvert karke add karde ya fir number ko string me karke concatenate karde
 mystr = Number("698");
 mynum = 34;
console.log(mystr+mynum);
//string functions
let html = "html is " + " My fav lang";
console.log(html);
html = html.concat(" python ","js ");
console.log(html);
console.log(html.length);
console.log(html.toLowerCase());
console.log(html.toUpperCase());

console.log(html[0]);
console.log(html[1]);

console.log(html.indexOf('i'));
console.log(html.indexOf('gfds'));//gives -1 which shows this is not present

console.log(html.lastIndexOf('s'));//gives the last occurrence of that character
console.log(html.charAt(0));
console.log(html.endsWith(' '));//if ends with that it gives true or returns false
console.log(html.includes('js'));

console.log(html.substring(0,3));// gives character starting from 0 to 3-1=2 ie 2 not including 3
console.log(html.slice(-4));//gives last ke 4
console.log(html.slice(0,4));// gives starting 4
//both are identical ie substring and slice but difference is if substring gets negative value it returns total string and only last -4 will not be return
console.log(html.split(' '));//gives array of all elements split by space jaha par bhi hai vaha se split break kar ke de dega
console.log(html.replace('python','C'))//only first occurence

//template literals
let fruits1 = 'orange'
let fruits2 = 'apple';
//yaha par enter marke niche ja sakte and concatinatekarne ki jarurat nahi sirf `` iske wajah se --> for line 180  and yeah feature naye JS version ES6 me aaya hai
let myHtml = `hello  ${std}
                <h1> this is heading</h1>
                <p> you like ${fruits1}<p>
                and ${fruits2}`;
document.body.innerHTML = myHtml;

// arrays

let mark = [2,3,45,6];// for line 210 onwards it should be let or either const
const fruits = ['orange','apple','pineapple'];
const mixed = ['str',5,[8,3]];

const ar = new Array(23,45,89,47,78);
console.log(arr);
console.log(mixed);
console.log(fruits[0]);
console.log(ar.length);
console.log(Array.isArray(ar));//returns true if it is array and return false if it is not a array
ar[0]='sujit';
console.log(ar);

let value = mark.indexOf(45);
console.log(value);
//mutating or modifying array
mark.push(34);console.log(mark);//array ke end me lagao
mark.unshift(87);console.log(mark)//array ke start me lagao
mark.pop();console.log(mark);//array ke end se nikalo 
mark.shift();console.log(mark);// array start se nikalo
mark.splice(1,2);console.log(mark);// first parameter se start karke secound parameter takk ke numbers ko count karke hata do
mark.reverse();console.log(mark);// and ab takk jo bhi function ya methods use kiya voh original array ko change kar raha hai and return kar raha hai
let marks2 = [3,4,5,6]
mark =  mark.concat(marks2);    //cannot change mark so change it to let from const or direct declare but can be change using methods
console.log(mark);    

//objects --> used for storing key value pair abhi oops me nahi jayenge

let myobj = {
    class :'501',
    lang:'JS',
    isActive:'true',
    student:[2,5,78,98]
}
//for accessing object
console.log(myobj);
console.log(myobj['class'])
console.log(myobj.student)

