/*for(i=1 ,text="" ;i<=5 ;i++){
  text=i;
  document.write(i + "<br />");
}

var x=0;
while(x<=20){
  document.write(x +"<br>");
  x++;
}

var i=20;
do{
  document.write(i +"<br>");
  i++
}while(i<=25)

for(i=0;i<=10;i++){
  if(i==5){
    break;
  }
  document.write(i +"<br>")
}

for(i=0;i<=10;i++){
  if(i==5){
    continue;
  }
  document.write(i +"<br>")
}

function myFunction(name){
  alert("Welcome to you in MJ company"+" "+"Eng."+name);
}
myFunction("David");
myFunction("Noah");

function myFunction() {
  alert("Welcome to you in MJ company" + " " );
}
myFunction();

// 88 Attribute and example 

//Element.attribute

console.log(document.getElementsByTagName("p")[0].attributes);

//Element.hasAttribute

let myP=document.getElementsByTagName("p")[0];

if(myP.hasAttribute("data-src")){
  if(myP.getAttribute===""){
    myP.removeAttribute("data-src");
  }else{
    myP.setAttribute("data-src","new-value")
  }
}else{
  console.log("not found");
}
/////

function average(num1, num2, num3) {
  var sum = num1 + num2 + num3;
  return sum / 3
}

console.log(average (3,6,9));
console.log(average (10,10,10));
console.log(average (1,2,3));
/////////
if(document.getElementsByTagName("div")[1].hasAttributes()){
  console.log("has attributes");
}else{
  console.log("no attributes at div");
}

////#89 create and append element

let myElement =document.createElement("div");
let myAttribute=document.createAttribute("elzero")
let myText=document.createTextNode("Hello word!")


myElement.className="testClass";
myElement.setAttributeNode(myAttribute);

////append text to element
myElement.appendChild(myText);

//append element to body 
document.body.appendChild(myElement);
console.log(myElement)
/////

let ele=document.getElementsByTagName("div")[1];
ele.setAttribute("id","taiba")
console.log(ele);

/////
let test=prompt("whats your name?","majd");
alert("user");
/////
 var result=confirm("do you want to staying with us?")
 if(result==true){
   alert("thanks for being here❤")
 }else{
   alert("good bye!")
 }

///////#90 practeis

let myDiv=document.createElement("div");
let myHead=document.createElement("h3");
let myPar=document.createElement("p");
 
 ///// print 100 element

for(let i=0;i<=100;i++){
  
let myHeadingText=document.createTextNode("product title" + i);

myHead.appendChild(myHeadingText);//add heading text to h3

let myParaText=document.createTextNode("product descrption" + i)

myPar.appendChild(myParaText);//add paragraph text to p

///////add element to div

myDiv.appendChild(myHead);//add heading to div
myDiv.appendChild(myParaText);//add pragraph to div
}

myDiv.className="product";
document.body.appendChild(myDiv)

/////////#91 DOM children

let divTest=document.getElementById("test");

console.log(divTest.children);//return just element in div
console.log(divTest.childNodes);//return all node in div
console.log(divTest.firstChild);//return the first child(element,text,comment) in element
console.log(divTest.lastChild);//return the last child(element,text,comment) in element
console.log(divTest.firstElementChild);//return the first element child in the main element
console.log(divTest.lastElementChild);//return the last element child in the main element

/////#92 DOM events

//onclick
let test =document.getElementById("butTest");

test.onclick= function(){
  console.log("useing onclick")} // use onclick by ananomus function
  
test.oncontextmenu=function(){
  console.log("useing oncontextmenu")
}

test.onmouseenter=function(){
  console.log("useing onmouseenter")
}

test.onmouseleave=function(){
  console.log("useing onmouseleave")
}

test.oncontextmenu=function(){
  console.log("useing oncontextmenu")
}

/////#93 

function main() {

    //take flight number and its status

    var flightNumber = readLine();
    var flightStatus = readLine();
    let flight1 = new Flight(number ,status );
   

    //assign a flight object to flight1 variable
    
    //output
    console.log('The flight ' + flight1.number + ' is ' + flight1.status)
}

function Flight(flightNumber, status) {
    //fix the constructor
    number = flightNumber;
    status = status;
};

flight1.flightStatus="landed";
flight1.flightNumber="SBI 380"
////////////////
function contact(name, number) {

    this.name = name;

    this.number = number;
}
 function print(){
  console .log(a.name+":"+a.number );
  console.log(b.name+":"+b.number)
  
}
var a = new contact("David", 12345);
var b = new contact("Amy", 987654321);
print();


//////#93 vaildate form

let userInput=document.querySelector("[name='username']");
let ageInput=document.querySelector("[name='age']")

////////

document.forms[0].onsubmit=function(e){
  let userValid=false;
  let ageValid=false;
  
  ////////console.log(userInput.value);
  ////////console.log(userInput.value.length)
  
  if(userInput.value!=="" && userInput.value.length <=10){
    userValid=true;
  };
  
  ///////
  if(ageInput!=="") {
    ageValid=true;
  }
  
  ///////
  if(userValid===false || ageValid===false){
    e.preventDefault();
  }
};
document.links[0].onclick=function(event){
  console.log(event);
  event.preventDefault();
};

////////////

/////// #94 event simulation - click focue blur
//عملنا محاكاه لل event focus

let one =document.querySelector(".one");
let two =document.querySelector(".two");
window.onload=function(){
  two.focus();
};
////
one.onblur=function(){
  document.links[0].click();
}

/////////


////#95 class list object
let element = document.getElementById("my-div");

console.log(typeof element.classList)//Object

console.log(element.classList.contains("show")) //true

console.log(element.classList.item(2));//show

element.onclick=function(){
 element.classList.add("done","yes")//add (done,yes)to the class list 
  element.classList.remove("test");
  element.classList.toggle("majood")
}


//////////
//#96 css styling and stylesheets
 let elementE =document.getElementById("mydiv");
 elementE.style.color="yellow";
 elementE.style.cssText='font-weight:bold;color:red;';
// elementE.style.removeProperty()
      


////////#104 ,setTimeout & clearTimeout

setTimeout(function(){
  console.log('Hello world');
},2000)

//

setTimeout(Msg,3000,'Majood','21');

function Msg(user,age){
  console.log('My names'+' '+user+' '+ 'and my age is :'+' '+age);
}

//

let count =setTimeout(Msg,3000);

function Msg(user,age){
  console.log('Hello world');
}

let btn = document.querySelector("button");

btn.onclick=function(){
  clearTimeout(count)
}

/////#105 ,setInterval& clearInterval

//حيطبع نفس الجملة ويضل يكرر فيها كل ٢٠٠٠ملي ثانية 
setInterval(function(){
  console.log("Hello world");
},2000)

//
setInterval(Msg,3000,'Majood','21');

function Msg(user,age){
  console.log('My names'+' '+user+' '+ 'and my age is :'+' '+age);
}
;

///////////
/*
  BOM [Browser Object Model]
  - setInterval(Function, Millseconds, Additional Params)
  - clearInterval(Identifier)


// setInterval(function () {
//   console.log(`Msg`);
// }, 1000);

// setInterval(sayMsg, 1000);

// function sayMsg() {
//   console.log(`Iam Message`);
// }

// setInterval(sayMsg, 1000, "Osama", 38);

// function sayMsg(user, age) {
//   console.log(`Iam Message For ${user} His Age Is: ${age}`);
// }

let div = document.querySelector("div");

function countdown() {
  div.innerHTML -= 1;
  if (div.innerHTML === "0") {
    clearInterval(counter);
  }
}

let counter = setInterval(countdown, 1000);
//////


//////#106 ,
//////#77,forEach

let alllis=document.querySelectorAll("ul li");

let allDivs=document.querySelectorAll(".contant div");


alllis.forEach (function(ele){
 ele.onclick=function(){
  
  //
   //remove active class ftom this elemant
   
   هنا حيلف عل كل عناصر المصفوفة ويشيل الكلاس أكتيف منهن وهنا بتيجي فايدة الفورايش إنو بتعمل لوب على كل العناصر وبطبق الفنكشن عليها بدون الحاجة لتخزين قيم هادي العناصر في مصفوفة جديدة
   
   alllis.forEach(function(ele){
     ele.classList.remove("active")
   })
   ////
   //add active class to this elemant
   /*
   هنا حيضيف كلاس الأكتيف فقط على العنصر تلي ضغطت عليه
   
   this.classList.add("active")
   
   ////
   //hide all divs
   /*
   هنا لما أضغط على أي عنصر بدي يا يخفي كل الديفز الموجودين عندي
   
    allDivs.forEach(function (ele){
   ele.style.display=("none");
 })
 }
 

 
})
//console.log(allli);

////////#112, local storage


////////#115, destructuring array part1

let myFreind = ['Ali','Saied','Ahamad'];
let [a="Sami",b,,d="Majed"]=myFreind;
console.log(a);
console.log(b);
console.log(c);
console.log(d);

////////#116,destructuring array part2

let myFreind = ['Ali','Saied','Ahamad',['shadey','amr',['mohammed','jamal']]];
//let[,,,[a,,[,b]]]=myFreind;
let  [,,,[a,,[,b]]]=myFreind;
console.log(a);
console.log(b);

//هنا جربنا مع النيستد آري

///////#117, destructuring array part3

//لمتغيرات بطريقة تقليدي swap بدنا نعمل 
let book='video';
let video='book';
// بدنا نبدل قيم المتغيرين فحنحتاج 
//متغير تالت ونخزن في قيمة أول متغير  
let box=book; //video
//book=video; //book
//video=box; //video
//console.log(book); //book
//console.log(video); //video

/// destructiring array الحين بدنا نعمل
//نفس الاشي لكن بإستخدام ال

[book,video]=[video,book];//كل تلي فوث أختصرنا بسطر واحد
console.log(book); //book
console.log(video); //video


//#118, destructuring object part1

let user={
  theName: 'Majood',
  theAge:21,
  theAddress:'Gaza',
  theWork:"JS DEVELOPER"
  
}
//console.log(user);
/*
let theName;

let theAge;

let theAddress;

let theWork;

//console.log(theName);//undefiend

({theName,theAge,theWork,theAddress}=user) // هاد في حال كانت المتغيرات 
//معرفة مسبقاً


let {theName,theAge,theWork,theAddress}=user; // هاد في حالة ما كنا معرفين 
//متغيرات من قبل

console.log(theName);
console.log(theAge);
console.log(theAddress);
console.log(theWork);

/////#119, destructuring object part2

let user={
  theName: 'Majood',
  theAge:21,
  theAddress:'Gaza',
  theWork:"JS DEVELOPER"
  
}

const {theName:n,theAge:a,theWork,theAddress:r='Rafah',theColor:c='red'}=user;//هنا أعطينا اسم متغيرات غير الاسم تاع ال بروبارتي إلي في الأوبجكت

console.log("My name is"+" "+n+"and im"+" "+a +"years old");
console.log(c);//red
console.log(r);//Gaza


// destructuring in nested object:

let user={
  theName: 'Majood',
  theAge:21,
  theAddress:'Gaza',
  theWork:"JS DEVELOPER",
    skills:{ //nested object
      html:70,
      css:60,
      js:50,
      sports:"football"
    }
  
}

//const {theName:n,
//theAge:a,
//      skills:{
//        html:h,
//        css:c,
//        sports:s,
//      }
  
//      }=user;
      
      
//    console.log(c);
     
///////// 

let {html : skillOne , css:skillTwo, js:skillThree}=user.skills;//access to the nested object

console.log(skillOne);

////114, BOM Challange

// 1-alart:
//alert('You gonna be agreat JS DEVELOPEE');

// 2-confirm:
//let confirmMss = confirm('Are u drink a coffe this morning?')
//if(confirmMss==true){
//alert("U have a great morning")
//}else{
 // alert("Plz drink your coffe to have a nise day🙏")
//}

//3-prompt:

//prompt("are you awake?","Good morning💕")

let myDiv=document.getElementById("5")

function countDown(){
 myDiv.innerHTML -=1;
 
if(myDiv.innerHTML=="2"){
 
  clearInterval(counter)
  
}
}

let counter=setInterval(countDown,1000);
console.log(counter);


//#122, set data type and method

let myNumber=[1,2,3,2,1,'c'];
//let mySet = new Set([1,1,2,2,3]);//create object from set

let mySet = new Set(myNumber);//{1,2,3,a}
console.log(mySet);//size 4

mySet.add('b').add(5);//add one elemant to data set
console.log(mySet);//size 6

mySet.delete('a');
console.log(mySet);//size 5

console.log(mySet.size);//5 طبع حجم آخر وحده

console.log(mySet.delete('b'));//true

//mySet.clear();//بتحدف كل الداتا
console.log(mySet);//size 0

console.log(mySet.has('A'.toLowerCase()));//false لأنو عملت كلير فوق فحدف كل الداتا

////
let myUniqueNumber=[1,2,3,2,1,'c'];
let myUniqueSet = new Set(myUniqueNumber);
console.log(myUniqueSet.size)

console.log(myUniqueSet.has('C'.toLowerCase()))//true

console.log(myUniqueSet[1])//undefined


//#124, set vs weakSet

//#Set
//1.type of data
let mySet = new Set([1,2,2,3,4,'a'])
console.log(mySet);

//2.values alias kays
let itrator=mySet.keys();
console.log(itrator)
console.log(itrator.next().value);
console.log(itrator.next().value);
console.log(itrator.next().value);
console.log(itrator.next().value);
console.log(itrator.next().value);//value:a , done:false
console.log(itrator.next()); //value: undefined , done:true
 
 
 //3.forEach
 mySet.forEach((el)=>console.log(el))
 

 //#weakSet
 //1.type of data
 
// let myWs = new weakSet([1,2,2,3,4,'a']);//invalid value(just object)
 
 let myWs = new WeakSet([{a:'Ahmad',b:'Bilal'}]);//بطبع الأوبجكت
 
console.log(myWs);
 
 
 //#125, map data type vs object
 
 let myMap = new Map();
 console.log(myMap)
 
 //#135, regular expression
 
 let myReg ='hello Majood this is our first reg majood';

 let regX =/majood/ig;

 let regx=/my/;
 
 console.log(myReg.match(regX));//[majood,Majood]
  
 console.log(myReg.match(regx));//null
 
 
  //#136, regular expression- ranges part1
  
  ///////(x|y)=>x or y
  let myReg =' org pal hotmil email com';
  
  let regX =/(hotmil|com|email)/; //pattern with (OR) range

  console.log(myReg.match(regX));  //['hotmail','hotmail']
  
  ///////[0-9]=>o to 9
  
  let myRegNum ="9867832";
  let regXNum =/[0-9]/g; //pattern with (to) range

  //console.log(myRegNum.match(regXNum));  //["9","8","6","7","8","3","2"]
  
////////[^0-9]=>not zero to nine

    let myRegN="9867832";
  let regXN =/[^0-5]/ig; //pattern with (not to) range

  console.log(myRegN.match(regXN));  //["9","8","6","7","8"]
  
  
  ///////practise
  
//let regEmail ='majdoleenjami@gmail.com';
//let regPattern=/[a-z]@(gmail|hotmail).(com|org|info)/ig;

//let regEmail ="mj mj12 mj12m";
//let regPattern=/mj[1-9]m/g;
//console.log(regEmail.match(regPattern))


//#137,RegX, part2

let myString= 'aAbBCc1279^%$@';
let myCS=/[a-zA-Z]/g;
let myCSi=/[a-zA-Z]/ig;
let mynotCSi=/[^a-zA-Z]/ig;
let mynotCSi2=/[^a-z^A-Z]/ig;


console.log(myString.match(myCS));//كل الأحرف سواء بالكابيتال أو السمول
console.log(myString.match(myCSi));//نفس إلي فوق
console.log(myString.match(mynotCSi2));


let myReg =' org pal hotmil email com';
  
  let regX =/hotmil|com|email/; //pattern with (OR) range

  console.log(myReg.match(regX));  //['hotmail']
  
  //#138 Regular expretion
  
  let myString = 'majdoleen Comapny 1024 $%@^ _ -';
  
  let reString ='palestine palpay repal rpaljody '

  let myPaw=/\w/ig;
  
  let myPaW=/\W/ig;
  
  let myPad=/\d/ig;
  
  let myPaD=/\D/ig
  
  let myPas=/\s/ig
  
  let myPaS=/\S/ig

  let myPab=/\bpal/ig //[palestine,palpay]
  
  let myPaB=/\Bine/ig //palestine
  
  let myPabB=/\Bine|\bpal/ig;
  
  
//  console.log(myString.match(myPaw))//كل الأحرف والأرقام والاندرسكور
  
//  console.log(myString.match(myPaW));//بطلع عكس إلي فوق كل حاجة ماعدا إلي فوق
    
//  console.log(myString.match(myPad));//بطلعلي فقط الأرقام
    
// console.log(myString.match(myPaD));//بطلعلي كل حاجه حتى المسافات ما عدا الأرقام
    
//  console.log(myString.match(myPas));//بطلعلي كل المسافات إلي بالنص
    
// console.log(myString.match(myPaS));//بطلعلي كل حاجة ما عدا المسافات
  
//  console.log(reString.match(myPab));//بطلعلي كل الكلمات إلي بتبدأ بالكلمات إلي أعطيتو ياها
 
//  console.log(reString.match(myPaB));//بطلعلي كل الكلمات إلي تنتهي    بالكلمات إلي أعطيتو ياها
   
//  console.log(reString.match(myPabB));//بطلعلي كل الكلمات إلي تنتهي أو  تبدأ بالكلمات إلي أعطيتو ياها 


//#144 form validation 

document.getElementById("registar").onsubmit = function() {
  
  let phoneNo= document.getElementById
  ("phone").value;
  
  let rePhEx=/\(\+\d{3}\)\s(59|56)\s\d{3}\s\d{4}/;
  let reTest=rePhEx.test(phoneNo);
  console.log(reTest);
 if(reTest===false){
    return false;
 }
return false;
  }
  
  //#146 challenge

  let url1='elzero.org';
  
  let url2='http://elzero.org';
  
  let url3='https://elzero.org';
  
  let url4='https://www.elzero.org';
  
  let url5='https://www.elzero.org:8080/articles.php?id=100&cat=topics';


   //لكل متعير باترن
  let re1=/[a-z0-9]+\.org/ig;
  
  let re2=/(http\:\/\/)?\w+\.org/ig;
    
  let re3=/(https\:\/\/)?\w+\.\w+/ig;
  
  let re4=/(https\:\/\/)?(www)?\.\w+\.\w+/ig;
  

  
 console.log(url1.match(re1));//done

console.log(url2.match(re2));//done

console.log(url3.match(re3));//done

console.log(url4.match(re4));//done

//بإستخدام باترن واحد


let regEx=/((http|https)\:\/\/)*(www.)*[a-z0-9]+\.org(\:\d{4}\/\w\.\w\?id\=[\w\D]\=\w)/ig;

console.log(url1.match(regEx));//done

console.log(url2.match(regEx));//done

console.log(url3.match(regEx));//done

console.log(url4.match(regEx));//done

console.log(url5.match(regEx));//done


//#148 , #149 constructor function

//الطريقة الأولى
function User(id,userName,salary){
  this.i=id;
  this.n=userName;
  this.s=salary+1000;
}

let userOne=new User(100,'Ahmad',3000);

let userTwo=new User(101,'Saeid',9000);

let userThree=new User(102,'Ali',7000);

console.log(userOne.s);//3000

//console.log(userOne.salary);//undefined

//طريقة تعريف الكونستركتور بال ES6

class RentCar{
  constructor(name,color,spead,salary){
    this.name=name;
    this.color=color;
    this.spead=spead;
    this.salary=salary*20/100;//disCount
  }
};

let Car1 =new RentCar('rangeRovar',"Red","120KM/h",200);

let Car2 =new RentCar('KIA',"Black","125KM/h",500);


console.log(Car1);

console.log(Car2);

console.log(Car1 instanceof RentCar);//true

console.log(Car2.instructor===User);//false
*/

