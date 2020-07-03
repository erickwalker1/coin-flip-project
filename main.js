
let coin = {
    state: 0,
    flip: function() {

        this.state = Math.round(Math.random())

         return this.state
    },


    toString: function() {
        
     if(this.state <= 0.5) {

           this.state = Math.floor(this.state)

            return 'Heads'
      } else {

        
          this.state = Math.ceil(this.state)

           return 'Tails'
        }
    },
      toHTML: function() {

        let image = document.createElement('img');

        image.width = "100"
        image.height = "100"
        
        if(this.state <= 0.5) {
            image.src = "./images/coinheads.jpg"
        } else {
            image.src = "./images/Cointails.jpg"

        }
        return image;
    } 
}; 

//console.log(coin.state)
//console.log(coin.flip())
//console.log(coin.toString())

 function display20Flips() {

    let list = document.createElement('ul')


    for(let i = 0; i < 20; i ++) {

       coinFlip = coin.flip()

       let randomFlip = coin.toString()
    
       let item = document.createElement('li')

       item.textContent = randomFlip

       document.body.append(item)

       console.log(coin.flip())
       console.log(coin.toString())
    }
}

//display20Flips()


 function display20Images() {
    for( let i = 0; i < 20; i ++) {

        coin.flip()

        let randomImage = coin.toHTML()

        document.body.append(randomImage)
    }
} 

display20Flips()
display20Images()


/* GOALS OF PROJECT:

The General Idea: 
- A coin is flipped to either land on hands or tails. 
- An image will be added representing whether the coin landed on heads or tails. */