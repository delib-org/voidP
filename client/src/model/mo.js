class MO {
    constructor(id, layer, outputs ,outputCurrent = 0) {
        this.id = id;
        this.layer = layer;
        this.inputs = {};

        this.outputs = outputs;


        this.newCycle = false;

        this.sumCurrents = 0;
        this.trashold = .8;
        this.cycleInputs = [];
        this.potentiations = new Set();
        this.inputCurrents = []
        this.outputCurrent = outputCurrent;
        
    }

    set setNewCycle(go) {
        this.newCycle = true;
    }

    set setEndCycle(go) {
        this.newCycle = false;
    }

    accumlateCurrent(input) {


        //add all inputs with more then trashold
        if (input.current > this.trashold) {


            if (!{}.hasOwnProperty.call(this.inputs, input.id)) {
                this.inputs[input.id] = { synapticStrength: 0.1 }

                //mark inputs that has more strength in this cycle
                this.cycleInputs.push(input.id)
            }

            this.sumCurrents += (input.current * this.inputs[input.id].synapticStrength)
        }

    }

    calculateInputs() {
        this.outputCurrent = 0;

        

        if (this.sumCurrents >= this.trashold) {

            //make the comming synapsis stronger
            this.cycleInputs.forEach(inputId => {
                this.inputs[inputId].synapticStrength += 0.1;
            })

            this.outputCurrent = 1;
        }
        //empty array of inputs and clear sumCurrent for a new cycle
        this.cycleInputs = [];
        this.sumCurrents = 0;
    }


}

export default MO;