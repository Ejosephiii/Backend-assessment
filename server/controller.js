const artistArr = ["Kendrick", "J Cole", "Travis Scott", "Coast Contra", "Bad Meets Evil"];

module.exports = {

    // DO NOT CHANGE THIS CODE; USE THIS CODE AS INSPIRATION
    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },

    getFortune: (req,res) => {
        
        const fortunes = ["You will live until you die", "Read documentation, confused you will be", "You will achieve your goals in 3 months"]
    
        let randomIndex2 = Math.floor(Math.random() * fortunes.length)
        let randomFortune = fortunes[randomIndex2]
        console.log(randomFortune)
        
        res.status(200).send(randomFortune)
    },

    postArtist: (req, res) => {
        console.log("Endpoint hit");
        console.log(req.body);

        artistArr.push(req.body.artist);

        res.status(200).send(artistArr);
    },

    putArtist: (req, res) => {
        console.log("Endpoint hit");
        console.log(req.params);
        console.log(req.body);

        const indexToEdit = +req.params.id; 
        
        artistArr[indexToEdit] = req.body.newArtist;

        res.status(200).send(artistArr);
    },

    deleteArtist: (req, res) => {
        console.log("ENDPOINT HIT HIT HIT");
        console.log(req.params);

        const indexToDelete = +req.params.id;

        artistArr.splice(indexToDelete, 1);

        res.status(200).send(artistArr);
    }

}