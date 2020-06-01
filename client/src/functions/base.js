// import MO from '../model/mo'

export function runSON(ns) {
   

    Object.entries(ns).forEach(n => {
        console.log(n[0], n[1])
    })

    const maxLayer = getUpperLayer(ns);

    // let newCycle = true;
    for (let i = maxLayer; i >= 0; i--) {

       

        let neuronsInLayer = Object.entries(ns).filter(neuron => neuron[1].layer === i);

        //get all neurons in output layer
        const targetNurons = new Set();
        //fire from upper to lower
        neuronsInLayer.forEach(neuron => {

           
            neuron[1].outputs.forEach(outputId=>{
                targetNurons.add(outputId)
                ns[outputId].accumlateCurrent({id:neuron[1].id, current:neuron[1].outputCurrent})
            })
            

            //fire from the neurom to each of the target neurons
            

        })

        targetNurons.forEach(tragetNuronId=>{
         
            ns[tragetNuronId].calculateInputs();
        })
    }
    console.log(ns)
}

function getUpperLayer(neurons) {
    let max = 0;
    Object.entries(neurons).forEach(neuron => {

        if (max < neuron[1].layer) max = neuron[1].layer;
    })

    return max;
}