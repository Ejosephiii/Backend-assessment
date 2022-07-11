const complimentBtn = document.getElementById("complimentButton")

const postInput = document.querySelector("#post-input");



const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

complimentBtn.addEventListener('click', getCompliment)

const fortuneBtn = document.querySelector("#fortuneButton")



const getFortune = () => {
    axios.get("http:/localhost:4000/api/fortune")
    .then(res => {
        const data = res.data
        alert(data)
    })
}

fortuneBtn.addEventListener("click", getFortune)



