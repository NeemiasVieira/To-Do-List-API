import express from "express";
import routes from "./routes.js";
import "express-async-errors";
import { AppException } from "./errors/AppException.js";
import cors from 'cors'


// https://to-do-list-api-production.up.railway.app/    Railway
// https://to-do-list-api-pink.vercel.app/              Vercel


const app = express();

app.use(express.json());
app.use(routes);
app.use(cors);


app.use((error, resquest, response, next ) => {
  if (error instanceof AppException){
    return response.status(error.statusCode).json({message: error.message});
  }

  return response.status(500).json({
    status: "Error",
    message: "Internal Server Error"
  })
})


app.listen(process.env.PORT || 3333,"0.0.0.0", () => {
  console.log("🚀 Server is running on port 3333");
});


