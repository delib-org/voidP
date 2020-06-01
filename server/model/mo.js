const {makeId} = require('../functions/general');

class MO {
    constructor() {
        
        this.id = makeId(2);
       
        this.targets = new Set();
        this.sources = new Set();
    }

    addTargets(targets) {
        try {
            if (Array.isArray(targets)) {
                targets.forEach(target => this.addTarget(target))
            } else {
                this.addTarget(targets)
            }
        } catch (err) {
            console.error(`Error at addTargets ${this.id}`)
            console.error(err)
        }

    }
    addTarget(target){
        this.targets.add(target.id)
    }
    removeTargets(targets){
        try {
            if (Array.isArray(targets)) {
                targets.forEach(target => this.targets.delete(target))
            } else {
                this.targets.delete(targets)
            }
        } catch (err) {
            console.error(`Error at removeTargets ${this.id}`)
            console.error(err)
        }

    }

    addSource(sourceId){
        this.sources.add(sourceId)
    }

    

    

    

}

module.exports = MO