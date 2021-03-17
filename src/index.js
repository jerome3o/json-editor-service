express = require('express');

app = express();
app.get(
    "/edit/:inputs", (req, resp) => {
        const inputs64 = req.params.inputs;
        const buffer = Buffer.from(inputs64, "base64");
        const inputsString = buffer.toString("ascii");

        let inputs = {}

        try {
            inputs = JSON.parse(inputsString);
        }
        catch (error) {
            console.log(error)
        }
        resp.render('edit', inputs);
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