module.exports = {
    getFortune: (req,res) => {
        
        const fortunes = ["You will live until you die", "Read documentation, confused you will be", "You will achieve your goals in 3 months"]

        let randomIndex2 = Math.floor(Math.random() * fortunes.length)
        let randomFortune = fortunes[randomIndex2]
        console.log(randomFortune)
        
        res.status(200).send(randomFortune)

        
        

    },

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    }

}