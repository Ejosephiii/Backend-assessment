const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment, postArtist, putArtist, deleteArtist, getFortune } = require('./controller')

app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getFortune);
app.post("/api/post/artist", postArtist);
app.put("/api/put/artist/:id", putArtist);
app.delete("/api/delete/artist/:id", deleteArtist);

app.listen(4000, () => console.log("Server running on 4000"));