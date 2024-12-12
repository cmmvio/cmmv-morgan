import cmmv from '@cmmv/server';
import morgan from "./index";

const app = cmmv();
app.use(morgan("combined"));

app.get("/", (req, res) => {
    res.json({Hello: "World"});
});

app.listen({ host: "127.0.0.1", port: 3000})
.then(server => {
    console.log(
        `Listen on http://${server.address().address}:${server.address().port}`,
    );
})
.catch(err => {
    throw Error(err.message);
});