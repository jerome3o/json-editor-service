const { readFile } = require('fs').promises;
express = require('express');

app = express();
app.get(
    "/edit/:schema", (req, resp) => {
        // TODO: Handle requests with redirect urls
        const schema64 = req.params.schema;
        const buffer = Buffer.from(schema64, "base64");
        const schemaString = buffer.toString("ascii");
        let schema = {}

        try {
            schema = JSON.parse(schemaString);
        }
        catch (error) {
            console.log(error)
        }
        
        resp.render('edit', {schema: schema})
    }
);
app.get(
    "/", async (req, resp) => {
        resp.send("TODO: docs")
    }
);
app.use(express.static("static"));
app.set('views', "./views");
app.set('view engine', 'pug');

const port = 3000;
app.listen(port, () => console.log(`App listening on port ${3000}`));