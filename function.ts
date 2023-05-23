// function getAverage(a: number, b: number , c?: number) : string
// {
// let itemCount = 2;
// let total = a+b;
// if(typeof c != 'undefined') 
// {
//     itemCount = 3;
//     total += c;
// }
// let result = total/itemCount 
// return `result: ${result}`;

// }

// function getAverage(...a: number[]) : string
// {
// let itemCount = 0;
// let total = 0;

// for(let i=0; i<Number.length;i++)
// {
//     itemCount++;
//     total += a[i];
// }
// let result = total/itemCount 
// return `result: ${result}`;

// }


const  getAverage = (...a: number[]) : string =>
{
let itemCount = 0;
let total = 0;

for(let i=0; i<Number.length;i++)
{
    itemCount++;
    total += a[i];
}
let result = total/itemCount 
return `result: ${result}`;

}
getAverage(20,20);
getAverage(20,20,30);
getAverage(20,20,40);