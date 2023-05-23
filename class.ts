interface Point
{
    x: number;
    y: number;
}





interface Vehicle
{
    color: string;
    currentLocation: Point;
    travelTo(point: Point) : void;
    

}

class Taxi implements Vehicle
{
//    currentLocation: Point;
//     color: string;
constructor (private _location?: Point, private _color?: string)
{
// this.currentLocation = location;
// this.color = color;

}
    color: string;
    currentLocation: Point;
    
get _location () 
{
    return this._location;
}

set _location ()
{
    
}
   
    travelTo(point: Point): void {
        
        console.log(`taxi goes from ${point.x} to ${point.y}`);
       
    }
    
}




let taxi_1 : Taxi = new Taxi({x: 2,y:3},'red');

taxi_1.travelTo({x:1,y:1});
 taxi_1.currentLocation = {x: 2,y:3};
console.log(taxi_1.currentLocation.x);
console.log(taxi_1.currentLocation.y);


function sinan(a:number, b?:number)
{

}
sinan(3,5);