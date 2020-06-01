// const express = require('express');
const fs = require('fs');
const argv = require('yargs').argv;
const { init } = argv;

console.log(argv)
// const app = express();

const MO = require('./model/mo');
const Dictionary = require('./model/dictionary')
// const mon = [];

// for(let i = 0; i<10;i++){
//     mon[i] = new MO();
// }

//creating new network
let dic;
if (init) {
    dic = new Dictionary();
    dic.createNeurons(10, 3)

    

    fs.writeFileSync('./data.json', JSON.stringify(dic), 'utf-8');

} else {
    dic = JSON.parse(fs.readFileSync('./data.json',{encoding:'utf8', flag:'r'}));
    console.log(dic)
}

console.log('.........dictionary..........')
    console.log(dic)
    console.log(dic.layers)

// mon[0].addTargets(mon[1])
// dic.addAxonSourceToTarget(mon[0], mon[1])


// console.log('mon[0]: ',mon[0])
// console.log('mon[1]:',mon[1])





// const input = [1, 0, 0, 0,0,1,1,1,1,1,1,1,1,1,1];
// const inputMOLayer = [];

// let layers = [];
// let counter = 0;



// input.map((mo, index) => {
//     inputMOLayer[index] = new MO(null, `${counter}-${index}`, input[index], null);
// })

// layers[counter] = inputMOLayer;

// //build the network
// console.log('build network')
// while (layers[counter].length > 2) {
//     counterLoop = 0

//     layers.push([]);
//     while (counterLoop < layers[counter].length) {
//         //get a couple and pair them
//         let couple = layers[counter].slice(counterLoop, counterLoop + 2);
//         if (couple.length === 2) {

//             couple[0].output = { layer: counter + 1, position: counterLoop / 2 };
//             couple[1].output = { layer: counter + 1, position: counterLoop / 2 };;
//             layers[counter + 1].push(new MO(null, `${counter + 1}-${counterLoop / 2}`, couple[0].id, couple[1].id));


//         }
//         counterLoop += 2;
//     }
//     counter++;

// }

// //load sensory input
// layers[0].map((mo, index)=>{
//     mo.signal = input[index];
// })

// //teach the network
// console.log('start learning')
// layers.map((layer, index) => {

//     //go over the layer and send inputs if input is 1
//     layer.map((mo, index2) => {

//         if (mo.fnPropogate() !== 0) {
//             console.log(`Propogate to ${mo.output.layer}-${mo.output.position}`)
//             layers[mo.output.layer][mo.output.position].fnSignalAccumulate(mo.fnPropogate())
//         }
//     })

// })

// console.log(layers)
// const port = process.env.PORT || 3001
// app.listen(port, ()=>{console.log(`Server listen on port ${port}`)})
