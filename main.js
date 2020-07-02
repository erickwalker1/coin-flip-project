
let coin = {
    state: 0,
    flip: function() {

         this.state = Math.random()

         return this.state
    },


     toString: function() {
        
         if(this.state >= 0.5) {
            return 'Heads'
        } else {
           return 'Tails'
        }
    },
      toHTML: function() {
        let image = document.createElement('img');
        
        if(this.state >= 0.5) {
            image.src = "images/coinheads.jpg"
        } else {
            image.src = "images/Cointails.jpg"
        }

        return image;
    } 
};

console.log(coin.flip())
console.log(coin.toString())

 function display20Flips() {

    for(let i = 0; i < 20; i ++) {
        
       let randomFlip = coin.toString()

       document.body.textContent = randomFlip
    }
}

display20Flips()


function display20Images() {
    for( let index = 0; index < 20; index ++) {
       
        let randomImage = coin.toHTML()

        document.body.textContent = randomImage
    }
} 

display20Images()
/* GOALS OF PROJECT:

The General Idea: 
- A coin is flipped to either land on hands or tails. 
- An image will be added representing whether the coin landed on heads or tails. */