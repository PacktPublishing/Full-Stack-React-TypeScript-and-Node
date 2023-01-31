namespace GenericNamespace {
    interface Wheels {
        count: number;
        diameter: number;
    }

    interface Vehicle<T> {
        getName(): string;
        getWheelCount: () => T;
    }

    class Automobile implements Vehicle<Wheels> {
        constructor(private name: string, private wheels: Wheels) { 
            
        }

        getName(): string {
            return this.name;
        }

        getWheelCount(): Wheels {
            return this.wheels;
        }
    }

    class Chevy extends Automobile {
        constructor() {
            super("Chevy", { count: 4, diameter: 18 });
        }
    }

    const chevy = new Chevy();
    console.log("car name ", chevy.getName());
    console.log("wheels ", chevy.getWheelCount());    
}