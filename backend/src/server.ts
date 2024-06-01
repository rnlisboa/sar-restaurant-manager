import express, { Request, Response, NextFunction }  from "express";
import 'express-async-errors';
import routes from "./routes";
import path from "path"

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(routes);

//acessar imagens
app.use(
    '/files',
    express.static(path.resolve(__dirname, '..', 'tmp'))
)

//middleware para tratamento de erros
app.use((err: Error, req: Request, res: Response, next: NextFunction)=>{
    if(err instanceof Error){
        return res.status(400).json({
            error: err.message
        })
    }

    return res.status(500).json({
        status: 'error',
        message: 'Internal server error'
    })
})

app.listen(3333, () => console.log("http://localhost:3333/"))