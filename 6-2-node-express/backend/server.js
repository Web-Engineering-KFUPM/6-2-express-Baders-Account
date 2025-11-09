import express from "express";
import cors from "cors";
import { getRandomQuote } from "./quotes.js";
const app = express();


{/*write code for cors*/
    app.use(cors());
}


{/*write code to define routes*/
    app.get("/",(req,res)=>{
        res.send("Welcome to the Quote Generator API");
    });

    app.get("/api/quote", (req,res) =>{
        const quote = getRandomQuote().randInt;
        res.json({quote});
        res.send({quote});
    });

}


{/*write code to create server*/
    
    app.listen(3000, () => {
        console.log("Server is running on http://localhost:3000");
    })
    
}