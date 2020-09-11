export default function home(req, res) {
    res.status(200).json({
            name: 'Yuriy',
            age: '33',
            components: ['abc', 'w', 123]

        }
    );
}