function myFunction(msg){
    console.log(msg);
}
myFunction("i Love JS");
{
    function sum(x , y, callback) {
        console.log(x + y);
        if(callback){
            callback();
        }
    }
    sum(1,2,()=>{
        console.log("Success");
    })
};
{
    const arrowSum = (a ,b ) => {
        console.log(a + b);
    }
    console.log(arrowSum(1,8));
};
//multiplication function
{
    function mul(a , b){
        return a * b;
    }
}
const arrowMul =(a , b)=>{
    console.log(a * b);
};

{
    const sample = ()=>{
        let s = [1,2,3,4,5,6];
        console.log(s);
        console.log(JSON.stringify(s));
        console.log(JSON.parse(JSON.stringify(s)));

        s.push(2);
        console.log(s);
        s.pop();
        console.log(s);
    }
    sample();
};
{
    let array1 = [1, 2];
let array2 = [3, 4];
let newArray = array1.concat(array2);
// newArray is [1, 2, 3, 4]

};
{
    let array = [2, 3];
array.unshift(1);
// array is now [1, 2, 3]
};
{
    function countVowels(str){
        let count = 0;
        for (const char of str){
            if( char ==="a" || char ==="e" || char ==="i" || char ==="o" || char ==="u");
        }
        {
            count++;
        }
        console.log(count);
    }

};