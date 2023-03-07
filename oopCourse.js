//#151 update prparetey

//parent class
class Person{
  test ='done';
//static property
  static count=0;
/////////////////
  constructor(name,idNumber,address){
    this.name=name;
    this.idNumber=idNumber;
    this.address=address;
    Person.count++ ;
  }
  updateInfo(newName,newIdNumber,newAddress){
    this.name=newName;
    this.idNumber=newIdNumber;
    this.address=newAddress;
    
  }
  //stqtic method
  static countPrersons(){
    return "the number of persons is :" + Person.count;
  }
}

//add information
let personeOne=new Person("Majdoleen",1000,"Gaza");

console.log(personeOne);

//update information
personeOne.updateInfo("Heba",1001,"Gaza");

console.log(personeOne);

//use a builtin constructors
let strOne='test';
let strTwo= new String('test');
console.log(typeof(strOne));//string
console.log(typeof(strTwo));//object
console.log(strOne.constructor===String);//true
console.log(strTwo.constructor===String);//true

//#152 class static properties and methods

//access to normal property
console.log(personeOne.test);//done

console.log(Person.test);//undefined

//access to ststic property and method
console.log(personeOne.count);//undefine

console.log(Person.count);//1

//static method test
//object 2
let personTwo = new Person("Eman",1002,"Deir ElBalah");

console.log(personTwo);

console.log(Person.countPrersons());//2

//object 3
let personThree = new Person("Katarei",1003,"Zemoo");

console.log(personThree);

console.log(Person.countPrersons());//3

//#153 class inheritance

//Derived class
class Teacher extends Person{

  constructor(name,idNumber,address,degree,salary,martialStutas){
      
       super(name,idNumber,address);
   
       this.degree=degree; 
       this.salary=salary;
       this.martialStutas=martialStutas;
}
}

//create object
let teacherOne = new Teacher("Faten",1000,"Nusirat","Bachelor's","1500$","marreid");

console.log(teacherOne);

teacherOne.updateInfo("Tahreir",1001,"Abasan","Bachelor's","1500$","marreid");

console.log(teacherOne);

//#154 class Encapsulation

