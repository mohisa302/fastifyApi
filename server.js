
const app = require('fastify')({logger : true});

app.register(require('fastify-swagger'), {
    exposeRoute: true,
    routePrefix: '/docs',
    swagger: {
        info: {title: 'fastifyApi'},
    },
});

app.register(require('./routes/item'));

const port = 5000;


const start = async () => {
    try {
        await app.listen(port, () => console.log(`listening port ${port}...`))
    } catch (err) {
        app.log.error(err);
        process.exit(1);
    }
}

start();