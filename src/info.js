export default function info(req, res) {
    const a = req.body.a;
    const b = req.body.b;
    let sum;
    const add = req.body.operation1;
    if(add === 'plus') {
     sum = a + b;
    } else {sum = 'error'}


    res.send('INFO here!!!'+ sum);
}