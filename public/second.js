
class ColorList {
    constructor(a, b, c, d, e, f, color, textCol){
        this.creature = a
        this.instant = b
        this.sorcery = c
        this.enchantment = d
        this.artifact = e
        this.planeswalker = f
        this.cardColor = [color]
        this.textCol = textCol
    }
    // this method is used to filter cards from the DB into arrays based on type, while also storing the cmcs of matching cards
    sortCards(e){
        let containsColor = e.color.toString() === this.cardColor.toString() // if element color is the same as the color of this class
        let creature = e.type.includes("Creature") //may need to also include power/toughness to help distinguish enchantment creatures. Will need to add another category to the fetch /post in main.js
        let instant = e.type.includes("Instant")
        let sorcery = e.type.includes("Sorcery")
        let enchantment = e.type.includes("Enchantment")
        let artifact = e.type.includes("Artifact")
        let planeswalker = e.type.includes("Planeswalker")

        // this variable is used to check if the cmc array already contains the current cmc value
        const check = (el) => el === e.cmc

        if(containsColor && creature){
            if(!this.creature.cmcs.some(check)){
                this.creature.cmcs.push(e.cmc)
                }
            this.creature.cards.push(e)
        }
        else if(containsColor && instant){
            if(!this.instant.cmcs.some(check)){
                this.instant.cmcs.push(e.cmc)
                }
            this.instant.cards.push(e)
        }
        else if(containsColor && sorcery){
            if(!this.sorcery.cmcs.some(check)){
                this.sorcery.cmcs.push(e.cmc)
                }
            this.sorcery.cards.push(e)
        }
        else if(containsColor && enchantment){
            if(!this.enchantment.cmcs.some(check)){
                this.enchantment.cmcs.push(e.cmc)
                }
            this.enchantment.cards.push(e)
        }
        else if(containsColor && artifact){
            if(!this.artifact.cmcs.some(check)){
                this.artifact.cmcs.push(e.cmc)
                }
            this.artifact.cards.push(e)
        }
        else if(containsColor && planeswalker){
            if(!this.planeswalker.cmcs.some(check)){
                this.planeswalker.cmcs.push(e.cmc)
                }
            this.planeswalker.cards.push(e)
        }
    }
    

    //sorts the cmc array for each card type into ascending order
    orderCMC(){
        this.creature.cmcs = this.creature.cmcs.sort((x, y) => x - y)
        this.creature.cards = this.creature.cards.sort((a, b) => a.name.localeCompare(b.name))
        this.instant.cmcs = this.instant.cmcs.sort((x, y) => x - y)
        this.sorcery.cmcs = this.sorcery.cmcs.sort((x, y) => x - y)
        this.enchantment.cmcs = this.enchantment.cmcs.sort((x, y) => x - y)
        this.artifact.cmcs = this.artifact.cmcs.sort((x, y) => x - y)
        this.planeswalker.cmcs = this.planeswalker.cmcs.sort((x, y) => x - y)
    }


    populateColor(){
        
        this.creature.cmcs.forEach(element => {
            this.creature.cards.forEach(card => {
                if(card.cmc === element){
                    var li = document.createElement("li")
                    li.innerHTML = card.name
                    li.dataset.imgForHover = card.image
                    li.className = "text-hover-image"
                    document.querySelector(`.${this.textCol}.creature`).append(li)
                }
            })
            
        })

        // this.creature.cards.forEach(element => {
        //     var li = document.createElement("li")
        //     li.innerHTML = element.name
        //     li.dataset.imgForHover = element.image
        //     li.className = "text-hover-image"
        //     document.querySelector(`.${this.textCol}.creature`).append(li)
        // })

        this.instant.cards.forEach(element => {
            var li = document.createElement('li')
            li.innerHTML = element.name
            li.dataset.imgForHover = element.image
            li.className = "text-hover-image"
            document.querySelector(`.${this.textCol}.instant`).append(li)
        })

        this.sorcery.cards.forEach(element => {
            var li = document.createElement('li')
            li.innerHTML = element.name
            li.dataset.imgForHover = element.image
            li.className = "text-hover-image"
            document.querySelector(`.${this.textCol}.sorcery`).append(li)
        })

        this.enchantment.cards.forEach(element => {
            var li = document.createElement('li')
            li.innerHTML = element.name
            li.dataset.imgForHover = element.image
            li.className = "text-hover-image"
            document.querySelector(`.${this.textCol}.enchantment`).append(li)
        })

        this.artifact.cards.forEach(element => {
            var li = document.createElement('li')
            li.innerHTML = element.name
            li.dataset.imgForHover = element.image
            li.className = "text-hover-image"
            document.querySelector(`.${this.textCol}.artifact`).append(li)
        })

        this.planeswalker.cards.forEach(element => {
            var li = document.createElement('li')
            li.innerHTML = element.name
            li.dataset.imgForHover = element.image
            li.className = "text-hover-image"
            document.querySelector(`.${this.textCol}.planeswalker`).append(li)
        })
    }

}

//Colour combination categories
let whiteCards = new ColorList({cards: [], cmcs: []}, {cards: [], cmcs: []}, {cards: [], cmcs: []}, {cards: [], cmcs: []}, {cards: [], cmcs: []}, {cards: [], cmcs: []}, "W", "white")

let blueCards = new ColorList({cards: [], cmcs: []}, {cards: [], cmcs: []}, {cards: [], cmcs: []}, {cards: [], cmcs: []}, {cards: [], cmcs: []}, {cards: [], cmcs: []}, "U", "blue")

let blackCards = new ColorList({cards: [], cmcs: []}, {cards: [], cmcs: []}, {cards: [], cmcs: []}, {cards: [], cmcs: []}, {cards: [], cmcs: []}, {cards: [], cmcs: []}, "B", "black")

let redCards = new ColorList({cards: [], cmcs: []}, {cards: [], cmcs: []}, {cards: [], cmcs: []}, {cards: [], cmcs: []}, {cards: [], cmcs: []}, {cards: [], cmcs: []}, "R", "red")

let greenCards = new ColorList({cards: [], cmcs: []}, {cards: [], cmcs: []}, {cards: [], cmcs: []}, {cards: [], cmcs: []}, {cards: [], cmcs: []}, {cards: [], cmcs: []}, "G", "green")

let gruulCards = new ColorList({cards: [], cmcs: []}, {cards: [], cmcs: []}, {cards: [], cmcs: []}, {cards: [], cmcs: []}, {cards: [], cmcs: []}, {cards: [], cmcs: []}, "G,R", "gruul")





function getFetch(){
    fetch('/collection/test')
        .then(res => res.json())
        .then(data => {
            console.log(data)
            data.forEach(element =>{

                whiteCards.sortCards(element)
                blueCards.sortCards(element)
                blackCards.sortCards(element)
                redCards.sortCards(element)
                greenCards.sortCards(element)
                gruulCards.sortCards(element)

            })
            whiteCards.orderCMC()
            blueCards.orderCMC()
            blackCards.orderCMC()
            redCards.orderCMC()
            greenCards.orderCMC()

            whiteCards.populateColor()
            blueCards.populateColor()
            blackCards.populateColor()
            redCards.populateColor()
            greenCards.populateColor()


            function imgHover(){
                hoverImageCube();
            }
            imgHover()
            


        })
        .catch(err => {
            console.error(err)
        })
}

getFetch()

//calls the hover function from JQuery






