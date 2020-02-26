var InterfaceNamespace;
(function (InterfaceNamespace) {
    var Motorcycle = /** @class */ (function () {
        function Motorcycle(name) {
            // no super for interfaces
            this.name = name;
        }
        Motorcycle.prototype.updateWheelCount = function (newWheelCount) {
            this.wheelCount = newWheelCount;
            console.log("Automobile has " + this.wheelCount);
        };
        Motorcycle.prototype.showNumberOfWheels = function () {
            console.log("moved Automobile " + this.wheelCount + " miles");
        };
        Motorcycle.prototype.getFullName = function () {
            return "MC-" + this.name;
        };
        return Motorcycle;
    }());
    var moto = new Motorcycle("beginner-cycle");
    console.log(moto.getFullName());
})(InterfaceNamespace || (InterfaceNamespace = {}));
