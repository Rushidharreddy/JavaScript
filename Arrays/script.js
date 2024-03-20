let marks = [97, 83, 75, 65, 35];
console.log(marks);
console.log(marks . length);
// in javascript strings are immutable ,in arrays it is mutable 
{
    let marks = [97, 83, 75, 65, 35];
    for ( let idx = 0; idx < marks . length; idx++){
        console.log(marks[idx]);
    }
};
{
    let cities = ["delhi", "pune", "hyderabad","mumbai", "gurgon" ];
    for (let city of cities){
        console.log(city.toUpperCase());
    }
};
{
    let marks = [85 , 96 ,46 ,39 , 76 ,60 ];

    let sum = 0;
    for (let val of marks){
        sum += val;  
    }
    let avg = sum / marks.length;
    console.log(`avg marks of the class = ${avg}`);
};

{
    let data = [250,645,300,900,50];
    let sum = 0;
    for(let val of data){
        sum +=(val-(val*0.10));
    }
    console.log(`Avg in ${sum/data.length}`);
    console.log(data.push(400));
    console.log(data.push(300));
    console.log(data);
    x = confirm("Are You Sure to remove ??");
    if(x == true){
        console.log(data.pop());
        console.log(data);
        y =confirm("Recalculate the average ? ..");
        if(y == true){
            let sum = 0;
            for(let val of data){
                sum +=(val-(val*0.10));
            }
            console.log(`Avg in ${sum/data.length}`);
        }
        else{
            console.log("No Recalculation Occured ... ");
        }
    }
    else{
        console.log(data);
    }
    
};
{
    let items = [250 ,645 ,300 ,900 ,50];

    for (let i = 0; i < items.length; i++){
        let offer = items[i] / 10;
        items[i] -= offer;

    }
    console.log(items);
};