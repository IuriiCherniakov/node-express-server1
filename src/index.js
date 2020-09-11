import express from 'express';
import home from "./home";
import info from "./info";
import errorHandler from "./errorHandler";

const app = express();
const PORT = 5000;
//localhost:5000/

app.get('/', home);
app.post('/info', info);

errorHandler(app)

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
