const { isString } = require('../functions/general');
const MO = require('./mo');


class Dictionary {
    constructor() {
        this.mosId = new Set()
        this.mos = [];
        this.mosIndex = {}
        this.layers = []
    }

    addToDictionary(mos) {
        try {
            if (Array.isArray(mos)) {
                mos.forEach(mo => {
                    this.addMo(mo)
                })
            } else {
                this.addMo(mos);
            }


        } catch (err) {
            console.error(err)
        }
    }

    addMo(mo) {
        if (!this.mosId.has(mo.id)) {
            if ({}.hasOwnProperty.call(mo, 'id')) {
                const index = this.mos.length;
                this.mosIndex[mo.id] = index;
                this.mos.push(mo);
                this.mosId.add(mo.id)
            } else {
                console.error(mo);
                console.error("Mo didnt had an id")
            }
        }
    }

    //creating neruon networks

    createNeurons(numberOfNeurons, neuronsInLayer) {
        try {
            if (numberOfNeurons < 2) throw `Too few neurons: ${numberOfNeurons}`;
            if (neuronsInLayer === undefined) throw 'User should add neurons in layer'

            const mon = [];

            for (let i = 0; i < 10; i++) {
                mon[i] = new MO();
            }

            this.addToDictionary(mon);
            console.log(this.mos)
            this.createLayers(neuronsInLayer)
        } catch (err) {
            console.error("Error at createNeurons", err)
        }
    }
    createLayers(numberOfNeurons) {
        //create
        try {
            if(numberOfNeurons === undefined) throw 'numberOfNeurons is undefined'

            this.layers = createLayers(this.mos, numberOfNeurons);
        } catch (err) {
            console.error("Error at createLayers", err)
        }
    }

    addAxonSourceToTarget(sourceMO, targetMO) {

        try {
            const targetId = targetMO.id;
            const sourceId = sourceMO.id

            if (!isString(targetId)) throw `target.id is not a string ${targetId}`;
            if (!isString(sourceId)) throw `source.id is not a string ${sourceId}`;

            const targetIndex = this.mosIndex[targetId];
            console.log(targetId, targetIndex)
            this.mos[targetIndex].addSource(sourceId);
        } catch (err) {
            console.error(err)
        }

    }

    // firing

    fire(sources) {

    }
}

function createLayers(arr, neuronsInLayer) {
    try {
        if (!Array.isArray(arr)) throw "arr is not an array";
        if (isNaN(neuronsInLayer)) throw "neuronsInLayer is not a number";
        if (arr.length < neuronsInLayer) throw `arr length (${arr.length}) is smaller then nuerons in layer(${neuronsInLayer})`;

        const x = [...arr];
        console.log(x)
        const y = [];

        while (x.length >= neuronsInLayer) {
            y.push(x.splice(0, neuronsInLayer));
        }
        console.log(y)
        y[y.length - 1] = [...y[y.length - 1], ...x];
        return y;
    } catch (err) {
        console.error(`Error at createLayers ${err.lineNumber}`);
        console.error(err)
    }
}

module.exports = Dictionary;