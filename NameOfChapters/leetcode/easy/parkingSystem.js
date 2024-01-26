class ParkingSystem {
    constructor(small, medium, big){
        this.parkingSlots = [small, medium, big]
    }

    addCar(size){
        if(size === 1){
            if(this.parkingSlots[0] === 0) return false
            this.parkingSlots[0] = this.parkingSlots[0] - 1
            return true
        } else if(size === 2){
            if(this.parkingSlots[1] === 0) return false
            this.parkingSlots[1] = this.parkingSlots[1] - 1
            return true
        }
        else {
            if(this.parkingSlots[2] === 0) return false
            this.parkingSlots[2] = this.parkingSlots[2] - 1
            return true
        }
    }
}

const parkingSystem = new ParkingSystem(1, 1, 0)

