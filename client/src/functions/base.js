import MO from '../model/mo'

export function runSON() {
    const ns = {};
    ns[0] = new MO(1, 0, [], [], 0);
    ns[1] = new MO(2, 1, [], [0], 1);
    ns[2] = new MO(3, 1, [], [0], 1);

    Object.entries(ns).forEach(n => {
        console.log(n[0], n[1])
    })

    const maxLayer = getUpperLayer(ns);

    // let newCycle = true;
    for (let i = maxLayer; i >= 0; i--) {

        let neuronsInLayer = Object.entries(ns).filter(neuron => neuron[1].layer === i);

        //fire from upper to lower
        neuronsInLayer.forEach(neuron => {


            const targetNurons = neuron[1].outputs;

            //fire from the neurom to each of the target neurons
            targetNurons.forEach(targetNeuronId => {
                
                ns[targetNeuronId].accumlateCurrent(neuron[1].current, neuron[1].id);
                // if (newCycle === true){newCycle = false};
                console.log(`Target Neuron ${targetNeuronId} got current ${neuron[1].outputCurrent} from ${neuron[1].id}`)
            })

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