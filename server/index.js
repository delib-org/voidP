class MO {
    constructor(output, id, input1, input2){
        this.output = output;
        this.id = id;
        this.input1 = input1;
        this.input2 = input2;
    }
    
}

const input = [1, 0, 0, 1,1,1];
const inputMOLayer = [];
input.map((mo,index)=>{
    inputMOLayer[index] = new MO(null, `0${index}`,input[index], null);
})



let inputLayer = inputMOLayer;
let layers = [[],[]];
let counter = 1;
let counter1 = 0;
layers[0] = inputLayer;

while(inputLayer.length>=2){
    //get a couple and pair them
    let couple = inputLayer.slice(0,2)
   
    layers[counter].push(new MO(null,`1${counter1}`,couple[0].id, couple[1].id));
    couple[0].output = `1${counter1}`;
    couple[1].output = `1${counter1}`;
    inputLayer = inputLayer.slice(2);
    counter1++;
    
}
console.log(layers)

if(inputLayer.length>2){

}
let network = {
    layer1:
        [

        ]
}