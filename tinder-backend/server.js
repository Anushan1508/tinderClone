import express from "express";
import mongoose from "mongoose";
import dbCards from "./dbCards";

// import cards from "./models/dbCards";

//App Config
const app = express();
const port = process.env.PORT || 8001;
const coneection_url =
  "mongodb+srv://admin:JXpj0k7A0WOa4UEC@cluster0.7dgpt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

//Middlewares

//DB config
mongoose.connect(coneection_url, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

//API Endpoints
app.get("/", (req, res) => res.status(200).send("Hello Tinder"));
// app.post("/tinder/cards", (req, res) => {
//   const dbCard = req.body;

//   Cards.create(dbCard, (err, data) => {
//     if (err) {
//       res.statusCode(500).send(err);
//     } else {
//       res.statusCode(201).send(data);
//     }
//   });
// });
// app.get(
//   "/tinder/cards",
//   (req,
//   (res) => {
//     Cards.find((err, data) => {
//       if (err) {
//         res.statusCode(500).send(err);
//       } else {
//         res.statusCode(200).send(data);
//       }
//     });
//   })
// );

//Listener
app.listen(port, () => console.log(`Listening on localhost: ${port}`));
