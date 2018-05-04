import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import jwt from "jsonwebtoken";
import cors from "cors";
import initConfigs from "./configs";
import initApi from "./api";

const PORT = 3333;
const app = express();

initConfigs(app);
app.use("*", cors());
initApi(app);

let items = [];

const router = express.Router();

const APP_SECRET = process.env.APP_SECRET || "keyboard";

const config = {
  JWT: {
    name: "boomtown_token",
    secret: APP_SECRET,
    expires: 60 * 60 * 60
  }
};

app.use(express.static("public"));
const auth = (req, res, next) => {
  if (req.cookies && req.cookies[config.JWT.name]) {
    try {
      const user = jwt.verify(req.cookies[config.JWT.name], config.JWT.secret);
      if (
        user &&
        user.name === "cliff" &&
        user.email === "cliff@redacademy.com"
      ) {
        next();
      }
    } catch (e) {
      res.status(401).redirect("/login");
    }
  } else {
    res.status(401).redirect("/login");
  }
};

app.use(cookieParser());

app.use("/items", router);

app.get("/login", (req, res) => {
  res.sendFile(__dirname + "/login.html");
});

app.get("/", auth, (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post(
  "/authenticate",
  bodyParser.urlencoded({ extended: true }),
  (req, res) => {
    console.log(req.body);
    if (!req.body.username || !req.body.password) {
      res.status(400).redirect("/login");
    } else if (req.body.username === "cliff" && req.body.password === "cliff") {
      const token = jwt.sign(
        {
          name: "Cliff Chan",
          email: "cliff@redacademy.com",
          admin: true
        },
        config.JWT.secret,
        {
          expiresIn: config.JWT.expires
        }
      );

      res.cookie(config.JWT.name, token, {
        maxAge: config.JWT.expires,
        secure: process.env.NODE_ENV === "production" ? true : false
      });

      console.log(token);

      return res.status(200).redirect("/");
    } else {
      res.status(400).redirect("/login");
    }
  }
);

router
  .route("/items")
  .get(function(request, response) {
    response.send(items);
  })

  .post(bodyParser.urlencoded({ extended: true }), function(request, response) {
    console.log("Form values:", JSON.stringify(request.body, null, 2));
    const newItem = request.body;
    items.push(newItem);
    response.status(201).redirect("/");
  });

app.listen(PORT, err => {
  if (err) {
    console.log("Error starting Express...", err);
  } else {
    console.log(
      `Express GraphQL Server running. Access GraphiQL on http://localhost:${PORT}/graphiql`
    );
  }
});
