class MO {
    constructor(id, layer, inputs, outputs, inputCurrent = 0, outputCurrent = 0) {
        this.id = id;
        this.layer = layer;
        this.inputs = new Set(inputs);

        this.outputs = outputs;

        this.trashold = .8;
        this.potentiations = new Set();
        this.inputCurrent = inputCurrent;
        if (inputCurrent > this.trashold) {
            this.outputCurrent = this.inputCurrent;
        } else{
            this.outputCurrent = 0;
        }
    }

    accumlateCurrent(newCurrent, input) {
        this.inputCurrent += newCurrent

        //limit max current to 1
        if (this.inputCurrent > 1) this.inputCurrent = 1;

        // if (isNewCycle) this.inputs.clear()

        if (newCurrent > this.trashold) {
            this.inputs.add(input)
            
        }

        if (this.inputCurrent > this.trashold) {
            this.outputCurrent = 1;
            this.inputs.forEach(input => {
                this.potentiations.add(input)
            })
        }
    }
}

export default MO;