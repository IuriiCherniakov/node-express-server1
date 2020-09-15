import infoRouter from '../info/Routes';

export default function routes (app){
app.use('/info', infoRouter );
app.use('/user', infoRouter );
}