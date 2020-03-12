class MO {
    constructor(output, id, input1, input2, signal = 0) {
        this.output = output;
        this.id = id;
        this.input1 = input1;
        this.input2 = input2;
        this.signal = signal
    }

    fnSignalAccumulate(sig) {
        console.log(`For ${this.id}, has ${this.signal}, and ${sig} will be added`)
        this.signal += sig;
        console.log(`Now ${this.id}, has ${this.signal}`)
    }

    fnPropogate(){
        if(this.output !== null){
            return this.input1 + this.input2;
        } else {
            return false
        }
    }

}

module.exports= MO