namespace InterfaceNamespace {
    interface Thing {
        name: string;
        getFullName: () => string;
    }

    interface Vehicle extends Thing {
        wheelCount: number;
        updateWheelCount: (newWheelCount: number) => void;
        showNumberOfWheels: () => void;
    }

    class Motorcycle implements Vehicle {
        name: string;
        wheelCount: number;
        constructor(name: string) {
            // no super for interfaces
            this.name = name;
        }
        updateWheelCount(newWheelCount: number){
            this.wheelCount = newWheelCount;
            console.log(`Automobile has ${this.wheelCount}`);
        }
        showNumberOfWheels() {
            console.log(`moved Automobile ${this.wheelCount} miles`);
        }
        getFullName() {
            return "MC-" + this.name;
        }
    }

    const moto = new Motorcycle("beginner-cycle");
    console.log(moto.getFullName());
}