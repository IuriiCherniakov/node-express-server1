const names = [];
export default function info(req, res) {
names.push(req.body.name)

    res.status(200).json( names);
}


// const a = req.body.a;
// const b = req.body.b;
// let sum;
// const add = req.body.operation1;
// if(add === 'plus') {
//  sum = a + b;
// } else {sum = 'error'}