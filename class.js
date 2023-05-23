var Taxi = /** @class */ (function () {
    function Taxi(location) {
        this.currentLocation = location;
    }
    Taxi.prototype.travelTo = function (point) {
        console.log("taxi goes from ".concat(point.x, " to ").concat(point.y));
        // throw new Error("Method not implemented.");
    };
    return Taxi;
}());
var Bus = /** @class */ (function () {
    function Bus() {
    }
    Bus.prototype.travelTo = function (point) {
        console.log("bus goes from ".concat(point.x, " to ").concat(point.y));
        // throw new Error("Method not implemented.");
    };
    return Bus;
}());
var taxi_1 = new Taxi({ x: 2, y: 3 });
taxi_1.travelTo({ x: 1, y: 1 });
// taxi_1.currentLocation = {x: 2,y:3};
console.log(taxi_1.currentLocation.x);
console.log(taxi_1.currentLocation.y);
