import express, { Express, Request, Response } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import stringsController from "./controllers/strings";
import productsController from "./controllers/products";
import productListController from "./controllers/productlist";
import parcelMachinesController from "./controllers/parcelmachines";
import eleringController from "./controllers/elering";

const app: Express = express();

app.use(cors({
    origin: ["http://localhost:3006", "*"],
    methods: `GET, PATCH, POST, DELETE, FETCH`
}));
app.use(bodyParser.json());

app.get('/', (req: Request, res: Response) => {
    res.send('Express + TypeScript Server');
});

app.use('/', stringsController);
app.use('/', productsController);
app.use('/', productListController);
app.use('/', parcelMachinesController);
app.use('/', eleringController);

app.listen(3000,() => {
    console.log(`[server]: Server is running at http://localhost:3000`);
});