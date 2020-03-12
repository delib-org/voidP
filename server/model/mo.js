class MO {
    constructor(output, id, input1, input2, signal = 0) {
        this.output = output;
        this.id = id;
        this.input1 = input1;
        this.input2 = input2;
        this.signal = signal
        this.cutoff = 1
    }

    fnSignalAccumulate(sig) {
        console.log(`For ${this.id}, has ${this.signal}, and ${sig} will be added`)
        this.signal += sig;
        console.log(`Now ${this.id}, has ${this.signal}`)
    }

    fnPropogate(){
        if(this.output !== null){
           
            console.log(`For ${this.id} the comb signal is ${this.signal}`)
            if(this.signal>this.cutoff){
                return this.signal;
            }else {
                return this.signal/2 ;
            }
            
        } else {
            return 0
        }
    }

}

module.exports= MO