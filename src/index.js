import express from 'express';
import errorHandler from "./modules/core/errorHandler";
import logger from "./modules/core/logger";
import parseResponse from "./modules/core/parseResponse";
import cors from "./modules/core/cors";
import routes from "./modules/core/routes";
import dbConnect from "./modules/core/db";

const app = express();
const PORT = 5000;
//localhost:5000/
dbConnect();
logger(app);
parseResponse(app);
cors(app);
routes(app);
// app.get('/', home);
// app.post('/info', info);
errorHandler(app);

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
});













// //import lodash from 'lodash'
// const lodash = require('lodash');
// //babel
//
// const a = {
//     name: 'JOE'
// }
// const b = lodash.get(a, 'lastname', '----');
// console.log('Hello,', b);
