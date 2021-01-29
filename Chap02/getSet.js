class Speaker {
    constructor(name) {
        this.name = name;
    }
    get Message() {
        if (!this.message.includes(this.name)) {
            throw Error("message is missing speaker's name");
        }
        return this.message;
    }
    set Message(val) {
        let tmpMessage = val;
        if (!val.includes(this.name)) {
            tmpMessage = this.name + " " + val;
        }
        this.message = tmpMessage;
    }
}
const speaker = new Speaker("john");
speaker.message = "hello";
console.log(speaker.Message);
