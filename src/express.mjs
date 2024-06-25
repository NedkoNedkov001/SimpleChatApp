import express from "express";
import homeRoute from './route/home_route.mjs'
const app = express();

app.set("view engine", "ejs");
app.set('views', './views');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("resources"));

app.use('/', homeRoute)

export default (port = 5050) => {
  app.listen(port, () => {
    console.log(`Listening at port ${port}`);
  });
};
