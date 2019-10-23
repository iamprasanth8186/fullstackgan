// // var str ="king  ";
// // var str1='kong ';
// // var str3=`goal 
// // <h1>good follow</h>
// // <p> lorem epsum</p>
// // <h1>head</h1>`;

// // console.log (str3);
// // document.write(str3);

// // var s="  anu my love";
// // var age="20";
// // var sal=10000;
// // var com="wipro";

// // console.log("my name is "+s+"  my age is   "+age+"my salary is   "+sal+"my company is  "+com);
// // document.write(`my anme is  ${s} and  my age is ${age} and i work for${com} and iam getting salaary${sal}`);
// // console.log(typeof s);
// // console.log(typeof sal);
// // //number
// // var num =10;
// // var num1=10.10;
// // var num2=1/1;
// // console.log(typeof num);
// // console.log(typeof num1);
// // console.log(typeof num2);


// // var test=true;
// // var test1=false;
// username ="raffi";
// var username;
// console.log(username);
// non-primitive data types
// let lang=['java','python',undefined,null,143,'ruby'];
// var array=['my','own','project','my','style'];
// var array1=new Array('atp','good','practice');
// console.log(lang[2]);
// console.log(array);
// console.log(array1);


//---------length---//



// var array3=Array(7);
// console.log(array3);
// var array4=Array.of(1,2,3,4,5);
// console.log(array4);
// var str="pavan is good boy";
// console.log(typeof(array3));
// console.log(Array.isArray(str));
// console.log(Array.isArray(array37))


//----string---to Array--3 methods----//

// var str="iam good boy";
// var strtoarray=str.split(' ');
// console.log(strtoarray);
// var es6=Array.from(str);
// console.log(es6);
// let[...king]=str;
// console.log(king);
// console.log(king.join(''));

//-///---concate array----//////



// let array1=['array','love'];
// let array2=['danger','dove'];
// let concating=array1.concat(array2,'king');
// console.log(concating);

// let total=[...array1,...array2,'pavan'];


//////------reverse the string-------///////

// var str ='good';
// var reverse=[...str].reverse().join('');
// console.log(reverse);





///-----4th-oct-------//////


// let user={
//     name:'anu',
//     sal:20000,
//     com:'cgi',
//     skills:['java','python','first','cc']}
// console.log(user.name);
// console.log(user.skills);


//-------literals----//
///----constructor-way------///


// let obj=new Object();
// obj.name='thopu';
// obj.age=20;
// obj.sal=30000;
// obj.com='tcs';
// console.log(obj);


//--------another method--//

// let name='pavan';
// let age=20;
// let rel='wife';
// let gf='divya';
// let ud={
// name:name,
// age:age,
// gf:gf,
// rel:rel,
// salary:28888
// };
// console.log(ud);

// let ud1={
//     name,
//     age,
//     gf,
//     rel,
//     salary:29900
//     };
//     console.log(ud1);
    


//-------multiple objects in  array----//





// var user=[
//     {
//         name:'pavan',
//         age:22,
//         sal:234567,
//         com:'ibm',
//         designation:'machine learnming',
//         dob:'20/12/1998',
//         loc:'bangalore',
//         genger:'male',
//         photos:'https://pixabay.com/photos/girl-horse-nature-rider-kiss-4455005/'
//     },
//     {
//         name:'raju',
//         age:22,
//         sal:234567,
//         com:'ibm',
//         designation:'machine learnming',
//         dob:'20/12/1998',
//         loc:'bangalore',
//         genger:'male',
//         photos:'https://pixabay.com/photos/girl-horse-nature-rider-kiss-4455005/'
//     },
//     {
//         name:'raffie',
//         age:22,
//         sal:234567,
//         com:'ibm',
//         designation:'machine learnming',
//         dob:'20/12/1998',
//         loc:'bangalore',
//         genger:'male',
//         photos:'https://pixabay.com/photos/girl-horse-nature-rider-kiss-4455005/'
//     },"selling"
    
// ];

// console.log(user);




////------------5th oct-----////




// let users={
//       name:'raffie',
//       age:22,
//       sal:234567,
//       com:'ibm'
// };
// let me =Object.create(users);
// me.name='manu';
// me.age=34;
// me.com='tcs';
// console.log(me);
// console.log(users);




/////---------object to array like object---//

// let users={
//           name:'raffie',
//           age:22,
//           sal:234567,
//           com:'ibm'
//     };
// let emp=Object.entries(users);
// emp.forEach(element => {console.log(emp);    
// });



// /////---------freezing------///


// let emp1={
//   'emp-name':'raffie',
//     'emp-age':22,
//     sal:234567,
//     com:'ibm'
// };
// let check=Object.freeze(emp);
// emp['emp-name']='king';
// console.log(check);

//---------object hold the data--//


// let emp={
//       'emp-name':'raffie',
//         'emp-age':22,
//         sal:234567,
//         com:'ibm',
//         alldata()
//         {
// console.log(`${this['emp-name']}
// and ${this['emp-age']}`);
//         }
//   };

// console.log(emp.alldata);





// //------------9th--oct----------------///



// function number(){
//     let args=arguments;
//     console.log(args);
//     console.log(Array.isArray(args));
//     let [...checkspread]=args;

//     console.log(typeof checkspread);
//     console.log(Array.isArray(checkspread));
//     console.log(arguments);
// }
// number(100,30,34,34,32);
// var array=[1,4,6,8];
// console.log(array);


//---------function closure------///


// var simpletext='hello simple text ho wr u ';
// function jspider(){
//     let jspidertext='hello j spider how r u ';
//     console.log(jspidertext);
//     function qspider(){
//         let qspidertext='hello qspider how r u';
//         console.log(qspidertext);
//         console.log(jspidertext);
//         console.log(simpletext);  
        
//     }
//     qspider();
// }
// jspider();


//----------call back-111------///


// function jspider(cb)
// {
//     console.log('j spider here');
//     cb();
    
// }
// jspider(function(){
//     alert('hello king prashanth');
// });

    
//-------call back 2222----//


// function jspider(cb)
// {
//     console.log('welocome j spider');
//     cb;
    
// }
// function qspider(){
//     console.log('welcome q spider');
    
// }
// jspider(qspider());



//-------function hoisting----working for naming function---//

// sachin();
// function sachin(){
//     console.log('hey sachine how r u');
    
// }



///---it will not wor for function expression--//



// dravid();
// var dravid=function (){
//     console.log('hey how r u dravid');
    
// }


//---------Arrow Function--------///


//-------10th oct -------------------------anoymous fuction with object-----------//



// let users={
// name:'king',
// age:23,
// company:'  tcs',
// details:function(){
//    console.log (`my name is ${this.name} and my age is ${this.age} and iam working for${this.company}`);

// }
// };
// users.details();



// let users1={
//     name:'king',
//     age:23,
//     company:'  tcs',
//     details:() =>{
//        console.log (`my name is ${users1.name} and my age is ${users1.age} and iam working for${users1.company}`);
    
//     }
//     };
//     users1.details();
    



//-----------fat arrow with arguments-----

// let num=function(){
//     console.log(arguments);
    
// };
// num(10,20,30,40,50);


// //------aruguments with fat arrow--///
    
// let numb=()=>{
//     console.log(arguments);
    
// };
// numb(10,20,30,40,50);

    

//-----------rest object----//



// let  number=(...rest)=>{
//     console.log(rest);
//     console.log(typeof rest);
//     console.log(Array.isArray(rest));
// };
// number(1020,30,40,50,60);


// let es5=function(){
//     [...array]=es5;
//     console.log(arguments);
//     console.log(typeof arguments);
//     console.log(Array.isArray(arguments));
//     console.log(array);
    
// };
// es5(10,20,30,40,50);



//--------Array-- methods------------//


//------forEach loop------//


// let lang=['angular','node','express','react'];
// var str="pavan is good boy and raffie is bad boy"
// lang.forEach(function(item){
//     console.log(item);
    
// });

// [...str].forEach(function(item){
//     console.log(item);
    
// });

// //----using for loop--////
// for(var i=0;i<lang.length;i++)
// {
//     console.log(lang[i]);
    
// }


//---Array for Each method---/////



// let lang =['aary','good','follow','emi nammava'];
// lang.forEach((value,index,array)=>{
//     console.log(value);
//     console.log(index);
//     console.log(array);
// });
    

//----------for of loop---WITH ARRAY AND STRING  ------//


// var user=['king','pavan','raffie','mg','gd mg'];
// var str='hellon j spider';
// for (let  i of user) 
// {
//     console.log(i);
    
// }
// for (let j of str) 
// {
//     console.log(j);
//     document.write(j+'<br>');
    
// }



//--------pop-----///

// var user=['king','pavan','raffie','mg','gd mg','hot look'];
// var pop=user.pop();
// let length=user.length;
// console.log(pop);
// console.log(length);
// console.log(user);

// ///--delete method---//
// delete user[4];
// let length2=user.length;
// console.log(length);
// console.log(user);


// //-----pop method-----//
// lang=['hi','how','are','you','darling'];
// lang.pop();
// console.log(lang);


// ///----shift----//
// lang=['hi','how','are','you','darling'];
// lang.shift();

// console.log(lang);

// //------unshift------//
// lang=['hi','how','are','you','darling'];
// lang.unshift('pug');
// lang.push('firebase');
// console.log(lang);



//----splice operatoe-----//

// lang=['hi','how','are','you','darling'];
// lang.splice(2,0,'kingkong');

// console.log(lang);




//---------oct 14th--2019----//

//string methos--------/// regular expression-----//


// let str='hello nodejs nodejs is backend language ';
// let regtotal=str.replace(/nodejs/g,'java');
// console.log(regtotal);


//------trim method----------//


// let str='     naresh is lover boy  ';
// let data=str.trim();
// console.log(data);
// console.log(str);


//-------upper AND LOWER AND STRIKE----SLICE----//


// var str='hello how r u raffie  and pavan and raju and All are GD mg';
// // let uc=str.toUpperCase();
// // let lc =str.toLowerCase();
// // console.log(uc);
// // console.log(lc);
// // let substr=str.substr(0,5);
// // console.log(substr);

// // let str1=str.substring(5,1);
// // console.log(str1);

// // let str2=str.slice(4,8);
// // console.log(str2);


// //-------search operator--///

// let search=str.search('raju');
// let match=str.match(/raffie/g);
// console.log(match);
// console.log(search);




//----------startwith and ----endswith-----//

// var str='hello how r u raffie  and pavan and raju and All are GD mg';
// // if (str.startsWith('h'))
// //  {
// //     alert('string is start with "h"');
// // }
// // else{
// //     alert('not start with "h"');
// // }

// // var repeat=str.repeat(10);
// // console.log(repeat);



// ///-----split method----string into substring--//
// var test=str.split('');
// console.log(test);
// console.log(test.reverse('').join(''));



//-----15th -----oct----/////


////----image ----link ----elements-----//





// var images=document.images;
// let imageswithArray=Array.from(images);
// imageswithArray.forEach(img =>console.log(img));
// console.log(images);



// var links=document.links;
// let [...link]=links;
// link.forEach(i=>console.log(i))




//-----heading collection----///


// var h1=document.getElementById('id');
// var clas=document.getElementsByClassName('jspider');
// h1.style.background='yellow';
// h1.style.padding='10px';
// h1.style.margin='20px';
// h1.style.borderRadius='20px';

//---add two numbers--//

// function addNumbers(){
//     alert('hello add numbers')

//     var firstNumber=parseFloat(document.getElementsById('firstnumber').value);
//     var secoNdnumber=parseFloat(document.getElementsById('secondnumber').value);
//     document.getElementsById('total').value= firstNumber +secondNumber;
//     if(isNaN(firstnumber)|| firstnumber===" "){
//         alert('please add number not a string')
//     }
//     if(isNaN(secondnumber)|| secondnumber===""){
//         alert('please add second  number not stirng')
//     }
// }


///----------16th oct-----///


// let list =document.getElementsByTagName('li');
// let [...li]=list;
// li.forEach(x=>{
//     console.log(x);
//     x.classList.add('anu');
//     x.innerHTML='hey darling how r u';

// })


//--------selectors------//


// var odd =document.querySelectorAll('li:nth-child(odd)');
// var even=document.querySelectorAll('li:nth-child(even)');
// odd.forEach(x=>{
//     x.classList.add('odd');
//     x.innerHTML='odd here';
// });
// even.forEach(y=>{
//     y.classList.add('even');
//     y.innerHTML='even here';
// });


/////-----button--with --changing------//

// var oddButton=document.getElementById('odd');
// var evenButton=document.getElementById('even');

// var oddli=document.querySelectorAll("li:nth-child(odd)");

// var evenli=document.querySelectorAll("li:nth-child(even)");


// oddButton.addEventListener('mouseenter',()=>{
//     console.log('mouseenter..odd');
//     oddli.forEach(odd=>{
//         odd.classList.add('odd');
//     });
//     evenli.forEach(even=>{
//         even.classList.remove('even');
//     });
   
// });
// evenButton.addEventListener('mouseenter',()=>{
//     console.log('mouseenter even..');
//     evenli.forEach(even=>{
//         even.classList.add('even');
//     });
//     oddli.forEach(odd=>{
//         odd.classList.remove('odd');
//     });

// });




//-----19th ---oct-----///

// var date=new Date();
// var h=date.getHours();
// var m=date.getMinutes();
// var s=date.getSeconds();
//  var prashanth=document.getElementById('clock').innerHTML=`${h}:${m}:${s}`;

// var username = 'raffie and pavan na lovers';


// setTimeout(function(){
//     document.write(username);
// },1000);


// setInterval(function()  {
//     document.write(username);
    
// }, 1000);

//----clock----19th oct----19th -----0ct------//


// setInterval(() => {
//     var date=new Date();
// var h=date.getHours();
// var m=date.getMinutes();
// var s=date.getSeconds();
// var formate=date.getHours()<12? 'am':'pm';
// document.getElementById('clock').innerHTML=`${h}:${m}:${s} ${formate}`
    
// }, 1000);


////---clock---another method---//

// setInterval(() => {
//     var date=new Date();
//     var time =date.toLocaleTimeString();
//     var da=date.toLocaleDateString();
//     document.getElementById('clock').innerHTML=time;
//     // document.getElementById('clock').innerHTML=da;
    
// }, 1000);




//-------21st----oct--------------------------//


//----22nd----oct----------------------//

