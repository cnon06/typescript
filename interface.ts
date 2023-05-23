interface Point
{
    x: number;
    y: number;
}


interface Passenger
{
    name: string;
    phone: string;
}



interface vehicle
{
    currentLocation: Point;
    travelTo(point: Point) : void;
    getDistance(paintA: Point, pointB: Point);
    addPassanger(passenger: Passenger);
    removePassanger(passenger: Passenger);

}