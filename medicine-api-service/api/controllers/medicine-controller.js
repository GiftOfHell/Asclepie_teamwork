"use strict";
/*
 'use strict' is not required but helpful for turning syntactical errors into true errors in the program flow
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
*/

/*
 Modules make it possible to import JavaScript files into your application.  Modules are imported
 using 'require' statements that give you a reference to the module.
  It is a good idea to list the modules that your application depends on in the package.json in the project root
 */
var util = require("util");
var faker = require("faker");
const jsf = require("json-schema-faker");

/*
 Once you 'require' a module you can reference the things that it exports.  These are defined in module.exports.
 For a controller in a127 (which this is) you should export the functions referenced in your Swagger document by name.
 Either:
  - The HTTP Verb of the corresponding operation (get, put, post, delete, etc)
  - Or the operationId associated with the operation in your Swagger document
  In the starter/skeleton project the 'get' operation on the '/hello' path has an operationId named 'hello'.  Here,
  we specify that in the exports of this module that 'hello' maps to the function named 'hello'
 */
module.exports = {
  medicines: getMedicines,
};

/*
  Functions in a127 controllers used for operations should take two parameters:
  Param 1: a handle to the request object
  Param 2: a handle to the response object
 */
function getMedicines(req, res) {
  var medicineNames = [
    "Protargol",
    "Baclofen",
    "Dapsone",
    "Dopamine",
    "Famotidine",
    "Granisetron",
    "Hydralazine",
    "Ketoconazole",
    "Methadone",
    "Potassium",
    "Thiotepa",
    "Voxelotor",
  ];
  var medicineName1 =
    medicineNames[Math.floor(Math.random() * medicineNames.length)];
  var medicineName2 =
    medicineNames[Math.floor(Math.random() * medicineNames.length)];
  var medicineName3 =
    medicineNames[Math.floor(Math.random() * medicineNames.length)];
  // this sends back a JSON response which is a single string
  res.json([
    {
      name1: "" + medicineName1,
      amount1: "" + faker.datatype.number({ min: 1, max: 35 }),
      address1: "" + faker.address.streetAddress(),
      price1: "" + faker.datatype.number({ min: 10, max: 100 }),

      name2: "" + medicineName2,
      amount2: "" + faker.datatype.number({ min: 1, max: 35 }),
      address2: "" + faker.address.streetAddress(),
      price2: "" + faker.datatype.number({ min: 10, max: 100 }),

      name3: "" + medicineName3,
      amount3: "" + faker.datatype.number({ min: 1, max: 35 }),
      address3: "" + faker.address.streetAddress(),
      price3: "" + faker.datatype.number({ min: 10, max: 100 }),
    },
  ]);
}
