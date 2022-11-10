const path = require("path");
const express = require("express");
const session = require("express-session");
const exphbs = require("express-handlebars");
const routes = require("./controllers");
const sequelize = require("./config/connection");
const helpers = require("./utils/helpers");

const hbs = exphbs.create({
  helpers,
});
const SequelizeStore = require("connect-session-sequelize")(session.Store);

const sess = {
  secret: process.env.DB_SECRET,
  cookie: {
    maxAge: 3000000,
    httpOnly: true,
    secure: false,
    sameSite: 'strict',
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};


//create an instance of express
const app = express();
const PORT = process.env.PORT || 3001;


//  use express sessions with sequelize
app.use(session(sess));

// Inform Express.js on which template engine to use
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use(routes);


sequelize.sync({ force: false, alter: false}).then(()=>{
  app.listen(PORT, () =>
  console.log("app is listening on http://localhost:3001")
);
});
