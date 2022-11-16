// const bodyParser = require("body-parser");

document.querySelector('button').addEventListener('click', fetchName)
//enables calls to JQuery function
hoverImage = null;

// function that removes the previous search results from the DOM
function removeElementsByClass(className){
    var elements = document.getElementsByClassName(className);
    while(elements.length > 0){
      elements[0].parentNode.removeChild(elements[0]);
    }
}

//constructor function for storing search results so that they can be added to the database if desired
class SearchRes {
    constructor(name, img, color, type, cmc){
        this.name = name
        this.img = img
        this.color = color
        this.type = type
        this.cmc = cmc
    }
}


class SearchRes2Faced {
    constructor(name, img, color, type, cmc, secondImg){
        this.name = name
        this.img = img
        this.color = color
        this.type = type
        this.cmc = cmc
        this.secondImg = secondImg
    }
}



// function to allow for a timeout before fetch request to prevent spamming the api
function delay(ms){
    return new Promise(resolve => setTimeout(resolve, ms))
}




async function fetchName(){

    removeElementsByClass('results')
    const searchName = document.querySelector('.cardSearch').value
    const url = `https://api.scryfall.com/cards/search?order=cmc&q=${searchName}`
    await delay(100)

    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data.data)
            let searchResults = []
            data.data.forEach((element, index) => {

                //element creation
                var li = document.createElement("li") 
                var img = document.createElement("img")
                var addButton = document.createElement("button")

                li.className = 'results'       

                // card called ragged recluse has 2 card faces. This doesnt have the image_uri property, and instead the two images of the card are under .card_faces[0].image_uris and card_faces[1].image_uris.                
                if(element.hasOwnProperty('card_faces')){
                    img.className = 'text-hover-image two-face'
                    img.src = element.card_faces[0].image_uris.normal
                    img.dataset.imgForHover = element.card_faces[0].image_uris.normal
                    img.dataset.secondFace = element.card_faces[1].image_uris.normal




                    //------- Need to add another category here for the second card face. Currently only one is stored --------


                    // const addNew2FCard = new SearchRes(element.name, element.card_faces[0].image_uris.normal, element.color_identity, element.type_line, element.cmc)
                    const addNew2FCard = new SearchRes2Faced(element.name, element.card_faces[0].image_uris.normal, element.color_identity, element.type_line, element.cmc, element.card_faces[1].image_uris.normal)


                    searchResults.push(addNew2FCard)
                } 
                 else {
                    img.className = 'text-hover-image'
                    img.src = element.image_uris.normal
                    img.dataset.imgForHover = element.image_uris.normal
                    //creates objects of each card that can be added to db later
                    const addNewCard = new SearchRes(element.name, element.image_uris.normal, element.color_identity, element.type_line, element.cmc)
                    searchResults.push(addNewCard)
                }

                addButton.innerText = "Add to Cube"
                addButton.className = "addCard"
                addButton.dataset.srNum = index   

                document.querySelector('.displayResults').appendChild(li).append(img, addButton)
           
            });

        

            // code for the add to database buttons
           var addToDatabase = document.querySelectorAll('.addCard')

            for(var addCard of addToDatabase){
                addCard.addEventListener('click', testing)
            }

            function testing(yip){
                let n = yip.target.dataset.srNum
              
                if(searchResults[n].secondImg){
                    console.log(`${searchResults[n].name} has two faces`)
                    fetch('/cube-list', {
                        method: 'post',
                        headers: {'Content-Type': 'application/json'},
                        body: JSON.stringify({
                            name: searchResults[n].name,
                            image: searchResults[n].img,
                            color: searchResults[n].color,
                            type: searchResults[n].type, 
                            cmc: searchResults[n].cmc,
                            secondImg: searchResults[n].secondImg
                            
                        })
                    })
                } else {
                    fetch('/cube-list', {
                        method: 'post',
                        headers: {'Content-Type': 'application/json'},
                        body: JSON.stringify({
                            name: searchResults[n].name,
                            image: searchResults[n].img,
                            color: searchResults[n].color,
                            type: searchResults[n].type, 
                            cmc: searchResults[n].cmc,
                            
                        })
                    })
                }
                
                alert ('card added to list!')
                // $(".cardHasBeenAdded").fadeIn( 300 ).delay( 1000 ).fadeOut( 400 );
            }

            
            // Calls the hover function written in JQuery
            function enableHover(){
                hoverImage();
            }
            enableHover()

            //
            function cardAdded(){
                // addedAlert();    
            }
            




        })

        
        .catch(err=> {
            console.error(err)
        })
    
};
