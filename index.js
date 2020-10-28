const express = require("express");
const mongoose = require ("mongoose");
const { graphqlHTTP } = require("express-graphql");
const Note = require("./models/note");
const  schema  = require("./schema");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 4300;

app.use(cors());

app.get("/", (req, res)=>{
    res.json({message: "Note taking API v1"});
});

app.use("/graphql", 
            graphqlHTTP({
                schema: schema,
                graphiql: true
            })
        );
mongoose.connect("mongodb+srv://faith:oyetunji123@cluster1.b3umu.mongodb.net/note-taking?w=majority", {useNewUrlParser: true, useUnifiedTopology: true}).then((result) => {

    console.log("Database Connected");
    app.listen(PORT, ()=>{console.log(`Server is listening on PORT ${PORT}`);});

}).catch(err => console.log(err));