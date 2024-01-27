const dvdsBox = new Array(15)

class DVD {
    constructor(title, year, director){
        this.title = title
        this.year = year
        this.director = director
    }

    dvdInformation(){
        console.log(`Movie ${this.title} is released in: ${this.year} and director was ${this.director}`)
    }
}

dvdsBox[7] = new DVD("Drag me to hell", 2007, "John Cena")
console.log(dvdsBox.length)