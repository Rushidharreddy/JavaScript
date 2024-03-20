// For loop 1
for (let i = 1; i <= 5; i++) {
    console.log("apna college");
};

// For loop 2
let sum = 0;
for (let i = 0; i <= 5; i++) {
    sum = sum + i;
}
console.log("sum=", sum);
console.log("loop has ended");

// While loop
let j = 1;
while (j <= 20) {
    console.log("apna college");
    j++;
};

// For...in loop
let student = {
    name: "Rahul kumar",
    age: 25,
    cgpa: 8.3,
    ispass: true,
};
for (let key in student) {
    console.log("key=", key, "value", student[key]);
}
for(let num = 0 ; num <= 100 ; num++){
    if (num % 2 === 0)
    console.log("num=" , num);
};
let str = "Apnacollage";
console.log(str[8]);
console.log("Apna\ncollege");
{
    let str =("apna\ncollage");
    console.log(str.length);
};
{
    let str ="Apnacollege";
    str =str.toUpperCase();
    console.log(str);
     
};
{
 let str1 = "apna";
 let str2 ="college";
 let res =str1. concat(str2);
 console.log(res);
};
{
    let fullName =prompt("enter your fullname without spaces");

    let username = "@" +fullName + fullName . length;
    console.log(username);
};