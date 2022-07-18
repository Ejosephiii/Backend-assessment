const complimentBtn = document.getElementById("complimentButton");
const fortuneButton = document.querySelector("#fortuneButton");

const artistInput = document.getElementById("artistInput");
const artistButton = document.getElementById("artistButton");

const indexSelect = document.getElementById("indexSelect");
const newArtistInput = document.getElementById("newArtistInput");
const indexButton = document.getElementById("indexButton");

const indexSelectDelete = document.getElementById("indexSelectDelete");
const deleteButton = document.getElementById("deleteButton");

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const getFortune = () => {
     axios.get(`http://localhost:4000/api/fortune/`)
        .then(res => {
            const data = res.data
            alert(data)
     })
}

const postArtist = () => {

    const nameBody = {

        artist: artistInput.value
    }

    axios.post("http://localhost:4000/api/post/artist/", nameBody)
   
        .then((res) => {
            alert(res.data);
        })
};

const putArtist = () => {
    const putBody = {
        newArtist: newArtistInput.value
    }

    axios.put(`http://localhost:4000/api/put/artist/${indexSelect.value}`, putBody)
        .then((res) => {
            alert(res.data);
        })
}

const deleteArtist = () => {
 
    axios.delete(`http://localhost:4000/api/delete/artist/${indexSelectDelete.value}`)
        .then((res) => {
            alert(res.data);
        })
}


complimentBtn.addEventListener('click', getCompliment);
fortuneButton.addEventListener('click', getFortune)
artistButton.addEventListener('click',  postArtist);
indexButton.addEventListener('click', putArtist);
deleteButton.addEventListener('click', deleteArtist);