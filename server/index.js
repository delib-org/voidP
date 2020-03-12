class MO {
    constructor(output, id, input1, input2) {
        this.output = output;
        this.id = id;
        this.input1 = input1;
        this.input2 = input2;
    }

}

const input = [1, 0, 0, 1, 1, 1, 0, 1];
const inputMOLayer = [];





let layers = [];
let counter = 0;



input.map((mo, index) => {
    inputMOLayer[index] = new MO(null, `${counter}-${index}`, input[index], null);
})

layers[counter] = inputMOLayer;


while (layers[counter].length > 2) {
    counterLoop = 0

    layers.push([]);
    while (counterLoop < layers[counter].length) {
        //get a couple and pair them
        let couple = layers[counter].slice(counterLoop, counterLoop + 2);


        couple[0].output = `${counter}-${counterLoop}`;
        couple[1].output = `${counter}-${counterLoop}`;
        layers[counter + 1].push(new MO(null, `${counter+1}-${counterLoop}`, couple[0].id, couple[1].id));

        counterLoop += 2;

    }
    counter++;
    console.log(layers)
}


