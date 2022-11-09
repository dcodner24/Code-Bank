const path = require("path");
const express = require("express");
const session = require("express-session");
const exphbs = require("express-handlebars");
const routes = require("./controllers");
const sequelize = require("./config/connection");
const helpers = require("./utils/helpers");
const { User, Account, Transaction } = require('./models');

// Set up Handlebars.js engine with custom helpers
// const helpers = require("./utils/helpers");
const hbs = exphbs.create({
  helpers,
});
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const sess = {
  secret: process.env.DB_SECRET,
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
    checkExpirationInterval: 1000 * 60 * 10, // will check every 10 minutes
    expiration: 1000 * 60 * 30, // will expire after 30 minutes
  }),
};
const app = express();
const PORT = process.env.PORT || 3001;




app.use(session(sess));

// Inform Express.js on which template engine to use
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(session(sess));

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");
app.use(routes);


sequelize.sync({ force: false });

app.listen(PORT, () =>
  console.log("app is listening on http://localhost:3001")
);
