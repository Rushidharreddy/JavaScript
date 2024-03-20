console.log("Hello World");
// Arthemtic operators
let a = 6;
let b = 3;
console.log("a =", a," & b=", b);
console.log("a+b", a+b);
console.log("a-b", a-b);
console.log("a*b",a*b);
console.log("a/b",a/b);
{
    let a =6;
    let b =4;
    console.log("a=",a ,"& b =",b);
    a++;
    console.log("a =",a);

};
{
    let a =8;
    let b =4;
    console.log("a=",a ,"& b =",b);
    a +=4;
    console.log("a=",a);
    b -=4;
    console.log("b=",b);
};
// comparsion operator
{
let a =5;
let b =2;
console.log("5!=2",a!=b);
};
{
    let a =6;
    let b =4;
    console.log("a=",a ,"& b =",b);
    console.log("6>4",a>b);
};
//Conditional Statements
{
    let age =19;
    if (age>=18){
        console.log("you can vote");
    }


    if (age<18){
        console.log("you cannot vote");
    }
};
{
    let age =17;
    if (age >=18) 
    console.log("you can vote");
      else {
        console.log("you cannot vote");
    }
};
{
    let num =7;
    if(num%2 ===0)
    console.log("it is even number");
    else{
        console.log("it is odd number");
    }
};
{
    let age =23;
    age >= 18 ? console.log("adult") :  console.log("notadult");
};
    // prompt("enter a number");

{
    let score = 75;
    // let Grade;
    if (score >= 90 && score <= 100){
        console.log("Grade = A");
    }
    
    else if ( score <= 89 && score >=70){
        console.log("Grade= B");
    }
    
    
    else if ( score>=50 && score<=69){
        console.log("Grade= C");
    }

    else{
        console.log("Grade = F");
    }
   
};

