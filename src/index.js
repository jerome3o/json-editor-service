const { readFile } = require('fs').promises;
express = require('express');

app = express();
app.get(
    "/edit/:schema", (req, resp) => {
        const schema64 = req.params.schema;
        console.log(schema64);
        const buffer = new Buffer(schema64, "base64");
        const schemaString = buffer.toString("ascii");
        console.log(schemaString);
        let schema = {}
        try {
            schema = JSON.parse(schemaString);
        }
        catch (error) {
            console.log(error)
        }
        
        console.log(schema);
        resp.render('edit', {schema: schema})
    }
);
app.get(
    "/", async (req, resp) => {
        // resp.send(await readFile("./static/index.html", "utf-8"));
        resp.render('index', {message: "yo yo"});
    }
);
app.use(express.static("static"));
app.set('views', "./views");
app.set('view engine', 'pug');

const port = 3000;
app.listen(port, () => console.log(`App listening on port ${3000}`));