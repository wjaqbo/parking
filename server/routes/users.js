import { Router } from "express";

// userRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.

// This will help us connect to the database
import { getDb } from "../db/connection";

// This help convert the id from string to ObjectId for the _id.
import { ObjectId } from "mongodb";

const userRoutes = Router();
// This section will help you get a list of all the records.
userRoutes.route("/user").get(function (req, res) {
  let db_connect = getDb("parking");
  db_connect
    .collection("users")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});

// This section will help you get a single record by id
userRoutes.route("/user/:id").get(function (req, res) {
  let db_connect = getDb();
  let myquery = { _id: ObjectId( req.params.id )};
  db_connect
      .collection("users")
      .findOne(myquery, function (err, result) {
        if (err) throw err;
        res.json(result);
      });
});

// This section will help you create a new record.
userRoutes.route("/user/add").post(function (req, response) {
  let db_connect = getDb();
  let myobj = {
    person_name: req.body.person_name,
    person_position: req.body.person_position,
    person_level: req.body.person_level,
  };
  db_connect.collection("users").insertOne(myobj, function (err, res) {
    if (err) throw err;
    response.json(res);
  });
});

// This section will help you update a record by id.
userRoutes.route("/user/:id").post(function (req, response) {
  let db_connect = getDb();
  let myquery = { _id: ObjectId( req.params.id )};
  let newvalues = {
    $set: {
      person_name: req.body.person_name,
      person_position: req.body.person_position,
      person_level: req.body.person_level,
    },
  };
  db_connect
    .collection("users")
    .updateOne(myquery, newvalues, function (err, res) {
      if (err) throw err;
      console.log("1 document updated");
      response.json(res);
    });
});

// This section will help you delete a record
userRoutes.route("/:id").delete((req, response) => {
  let db_connect = getDb();
  let myquery = { _id: ObjectId( req.params.id )};
  db_connect.collection("users").deleteOne(myquery, function (err, obj) {
    if (err) throw err;
    console.log("1 document deleted");
    response.status(obj);
  });
});

export default userRoutes;