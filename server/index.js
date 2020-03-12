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
        }
    }

}

const input = [1, 0, 1, 1];
const inputMOLayer = [];

let layers = [];
let counter = 0;



input.map((mo, index) => {
    inputMOLayer[index] = new MO(null, `${counter}-${index}`, input[index], null);
})

layers[counter] = inputMOLayer;

//build the network
console.log('build network')
while (layers[counter].length > 2) {
    counterLoop = 0

    layers.push([]);
    while (counterLoop < layers[counter].length) {
        //get a couple and pair them
        let couple = layers[counter].slice(counterLoop, counterLoop + 2);
        if (couple.length === 2) {

            couple[0].output = { layer: counter + 1, position: counterLoop / 2 };
            couple[1].output = { layer: counter + 1, position: counterLoop / 2 };;
            layers[counter + 1].push(new MO(null, `${counter + 1}-${counterLoop / 2}`, couple[0].id, couple[1].id));


        }
        counterLoop += 2;
    }
    counter++;

}

//load sensory input
layers[0].map((mo, index)=>{
    mo.signal = input[index];
})

//teach the network
console.log('start learning')
layers.map((layer, index) => {
    console.log(`layer ${index}`)
    //go over the layer and send inputs if input is 1
    layer.map((mo, index2) => {
     
        if (mo.output !== null) {
            layers[mo.output.layer][mo.output.position].fnSignalAccumulate(mo.signal * .4534545)
        }
    })
    
})


console.log(layers)
