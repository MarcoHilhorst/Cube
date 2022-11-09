
class ColorList {
    constructor(a, b, c, d, e, f){
        this.creature = a
        this.instant = b
        this.sorcery = c
        this.enchantment = d
        this.artifact = e
        this.planeswalker = f
    }
}

let whiteCards = new ColorList({cards: [], cmcs: []}, {cards: [], cmcs: []}, {cards: [], cmcs: []}, {cards: [], cmcs: []}, {cards: [], cmcs: []}, {cards: [], cmcs: []})



// let whiteCards = {
//     creature: {
//         cards: [],
//         cmcs: []
//     },
//     instant: {
//         cards: [],
//         cmcs: []
//     },
//     sorcery: {
//         cards: [],
//         cmcs: []
//     },
//     enchantment: {
//         cards: [],
//         cmcs: []
//     },
//     artifact: {
//         cards: [],
//         cmcs: []
//     },
//     planeswalker: {
//         cards: [],
//         cmcs: []
//     },
// }

let blueCards = {
    creature: {
        cards: [],
        cmcs: []
    },
    instant: {
        cards: [],
        cmcs: []
    },
    sorcery: {
        cards: [],
        cmcs: []
    },
    enchantment: {
        cards: [],
        cmcs: []
    },
    artifact: {
        cards: [],
        cmcs: []
    },
    planeswalker: {
        cards: [],
        cmcs: []
    },
}

let blackCards = {
    creature: {
        cards: [],
        cmcs: []
    },
    instant: {
        cards: [],
        cmcs: []
    },
    sorcery: {
        cards: [],
        cmcs: []
    },
    enchantment: {
        cards: [],
        cmcs: []
    },
    artifact: {
        cards: [],
        cmcs: []
    },
    planeswalker: {
        cards: [],
        cmcs: []
    },
}

let redCards = {
    creature: {
        cards: [],
        cmcs: []
    },
    instant: {
        cards: [],
        cmcs: []
    },
    sorcery: {
        cards: [],
        cmcs: []
    },
    enchantment: {
        cards: [],
        cmcs: []
    },
    artifact: {
        cards: [],
        cmcs: []
    },
    planeswalker: {
        cards: [],
        cmcs: []
    },
}

let greenCards = {
    creature: {
        cards: [],
        cmcs: []
    },
    instant: {
        cards: [],
        cmcs: []
    },
    sorcery: {
        cards: [],
        cmcs: []
    },
    enchantment: {
        cards: [],
        cmcs: []
    },
    artifact: {
        cards: [],
        cmcs: []
    },
    planeswalker: {
        cards: [],
        cmcs: []
    },
}




var li = document.createElement("li")


function getFetch(){
    fetch('/collection/test')
        .then(res => res.json())
        .then(data => {
            // console.log(data)
            data.forEach((element, i) =>{
                let mono = element.color.length === 1
                let twoCol = element.color.length === 2
                let containsWhite = element.color[0] === "W"
                let containsBlue = element.color[0] === "U"
                let containsBlack = element.color[0] === "B"
                let containsRed = element.color[0] === "R"
                let containsGreen = element.color[0] === "G"
                let creature = element.type.includes("Creature")
                let instant = element.type.includes("Instant")
                let sorcery = element.type.includes("Sorcery")
                let enchantment = element.type.includes("Enchantment")
                let artifact = element.type.includes("Artifact")
                let planeswalker = element.type.includes("Planeswalker")

                const check = (e) => e === element.cmc

                if(mono && containsWhite){
                    
                    if(creature){
                        if(!whiteCards.creature.cmcs.some(check)){
                            whiteCards.creature.cmcs.push(element.cmc)
                        }
                        whiteCards.creature.cards.push(element.name)
                    }
                    else if(instant){
                        if(!whiteCards.instant.cmcs.some(check)){
                            whiteCards.instant.cmcs.push(element.cmc)
                        }
                        whiteCards.instant.cards.push(element.name)
                    }
                    else if(sorcery){
                        if(!whiteCards.sorcery.cmcs.some(check)){
                            whiteCards.sorcery.cmcs.push(element.cmc)
                        }
                        whiteCards.sorcery.cards.push(element.name)
                    }
                    else if(enchantment){
                        if(!whiteCards.enchantment.cmcs.some(check)){
                            whiteCards.enchantment.cmcs.push(element.cmc)
                        }
                        whiteCards.enchantment.cards.push(element.name)
                    }
                    else if(artifact){
                        if(!whiteCards.artifact.cmcs.some(check)){
                            whiteCards.artifact.cmcs.push(element.cmc)
                        }
                        whiteCards.artifact.cards.push(element.name)
                    }
                    else if(planeswalker){
                        if(!whiteCards.planeswalker.cmcs.some(check)){
                            whiteCards.planeswalker.cmcs.push(element.cmc)
                        }
                        whiteCards.planeswalker.cards.push(element.name)
                    }  
                }
                else if(mono && containsBlue){
                    
                    if(creature){
                        if(!blueCards.creature.cmcs.some(check)){
                            blueCards.creature.cmcs.push(element.cmc)
                        }
                        blueCards.creature.cards.push(element.name)
                    }
                    else if(instant){
                        if(!blueCards.instant.cmcs.some(check)){
                            blueCards.instant.cmcs.push(element.cmc)
                        }
                        blueCards.instant.cards.push(element.name)
                    }
                    else if(sorcery){
                        if(!blueCards.sorcery.cmcs.some(check)){
                            blueCards.sorcery.cmcs.push(element.cmc)
                        }
                        blueCards.sorcery.cards.push(element.name)
                    }
                    else if(enchantment){
                        if(!blueCards.enchantment.cmcs.some(check)){
                            blueCards.enchantment.cmcs.push(element.cmc)
                        }
                        blueCards.enchantment.cards.push(element.name)
                    }
                    else if(artifact){
                        if(!blueCards.artifact.cmcs.some(check)){
                            blueCards.artifact.cmcs.push(element.cmc)
                        }
                        blueCards.artifact.cards.push(element.name)
                    }
                    else if(planeswalker){
                        if(!blueCards.planeswalker.cmcs.some(check)){
                            blueCards.planeswalker.cmcs.push(element.cmc)
                        }
                        blueCards.planeswalker.cards.push(element.name)
                    }
                }
                else if(mono && containsBlack){
                    
                    if(creature){
                        if(!blackCards.creature.cmcs.some(check)){
                            blackCards.creature.cmcs.push(element.cmc)
                        }
                        blackCards.creature.cards.push(element.name)
                    }
                    else if(instant){
                        if(!blackCards.instant.cmcs.some(check)){
                            blackCards.instant.cmcs.push(element.cmc)
                        }
                        blackCards.instant.cards.push(element.name)
                    }
                    else if(sorcery){
                        if(!blackCards.sorcery.cmcs.some(check)){
                            blackCards.sorcery.cmcs.push(element.cmc)
                        }
                        blackCards.sorcery.cards.push(element.name)
                    }
                    else if(enchantment){
                        if(!blackCards.enchantment.cmcs.some(check)){
                            blackCards.enchantment.cmcs.push(element.cmc)
                        }
                        blackCards.enchantment.cards.push(element.name)
                    }
                    else if(artifact){
                        if(!blackCards.artifact.cmcs.some(check)){
                            blackCards.artifact.cmcs.push(element.cmc)
                        }
                        blackCards.artifact.cards.push(element.name)
                    }
                    else if(planeswalker){
                        if(!blackCards.planeswalker.cmcs.some(check)){
                            blackCards.planeswalker.cmcs.push(element.cmc)
                        }
                        blackCards.planeswalker.cards.push(element.name)
                    }
                }
                else if(mono && containsRed){
                    
                    if(creature){
                        if(!redCards.creature.cmcs.some(check)){
                            redCards.creature.cmcs.push(element.cmc)
                        }
                        redCards.creature.cards.push(element.name)
                    }
                    else if(instant){
                        if(!redCards.instant.cmcs.some(check)){
                            redCards.instant.cmcs.push(element.cmc)
                        }
                        redCards.instant.cards.push(element.name)
                    }
                    else if(sorcery){
                        if(!redCards.sorcery.cmcs.some(check)){
                            redCards.sorcery.cmcs.push(element.cmc)
                        }
                        redCards.sorcery.cards.push(element.name)
                    }
                    else if(enchantment){
                        if(!redCards.enchantment.cmcs.some(check)){
                            redCards.enchantment.cmcs.push(element.cmc)
                        }
                        redCards.enchantment.cards.push(element.name)
                    }
                    else if(artifact){
                        if(!redCards.artifact.cmcs.some(check)){
                            redCards.artifact.cmcs.push(element.cmc)
                        }
                        redCards.artifact.cards.push(element.name)
                    }
                    else if(planeswalker){
                        if(!redCards.planeswalker.cmcs.some(check)){
                            redCards.planeswalker.cmcs.push(element.cmc)
                        }
                        redCards.planeswalker.cards.push(element.name)
                    }
                }
                else if(mono && containsRed){
                    
                    if(creature){
                        if(!redCards.creature.cmcs.some(check)){
                            redCards.creature.cmcs.push(element.cmc)
                        }
                        redCards.creature.cards.push(element.name)
                    }
                    else if(instant){
                        if(!redCards.instant.cmcs.some(check)){
                            redCards.instant.cmcs.push(element.cmc)
                        }
                        redCards.instant.cards.push(element.name)
                    }
                    else if(sorcery){
                        if(!redCards.sorcery.cmcs.some(check)){
                            redCards.sorcery.cmcs.push(element.cmc)
                        }
                        redCards.sorcery.cards.push(element.name)
                    }
                    else if(enchantment){
                        if(!redCards.enchantment.cmcs.some(check)){
                            redCards.enchantment.cmcs.push(element.cmc)
                        }
                        redCards.enchantment.cards.push(element.name)
                    }
                    else if(artifact){
                        if(!redCards.artifact.cmcs.some(check)){
                            redCards.artifact.cmcs.push(element.cmc)
                        }
                        redCards.artifact.cards.push(element.name)
                    }
                    else if(planeswalker){
                        if(!redCards.planeswalker.cmcs.some(check)){
                            redCards.planeswalker.cmcs.push(element.cmc)
                        }
                        redCards.planeswalker.cards.push(element.name)
                    }
                }
                
                
                // else if(mono && containsBlack){
                //     black.push(element)
                // }
                // else if(mono && containsRed){
                //     red.push(element)
                // }
                // else if(mono && containsGreen){
                //     green.push(element)
                // }
            })
            // Sorting for the white coloured array
            // white.forEach(element =>{
            //     let creature = element.type.includes("Creature")
            //     let instant = element.type.includes("Instant")
            //     let sorcery = element.type.includes("Sorcery")
            //     let enchantment = element.type.includes("Enchantment")
            //     let artifact = element.type.includes("Artifact")
            //     let planeswalker = element.type.includes("Planeswalker")
            //     let creatureCMCs = []
            //     let instantCMCs = []
            //     let sorceryCMCs = []
            //     let enchantmentCMCs = []
            //     let artifactCMCs = []
            //     let planeswalkerCMCs = []

            //     if(creature === true){
                    



            //         // variable that we will use to check if the converted manacost category exists
            //        var cmcCategory = document.getElementById(`wCreatureCMC${element.cmc}`)
            //         if(!cmcCategory){
            //             var ul = document.createElement("ul")
            //             ul.id = `wCreatureCMC${element.cmc}`
            //             document.querySelector('.whiteCreatures').appendChild(ul)
            //         }
                    
            //     }
            // })

        })
        .catch(err => {
            console.error(err)
        })
}

getFetch()




