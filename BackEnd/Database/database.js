const sqlite3 = require("sqlite3").verbose();
let sql;

// //Connecting to database
const db = new sqlite3.Database("./Cars.db", sqlite3.OPEN_READWRITE, (err) => {
  if (err) return err;
});

// //Creating table
// sql =
//   "CREATE TABLE Cars(id INTEGER PRIMARY KEY,Brand,Model,Price INTEGER,Seat INTEGER,Drive,Cargo INTEGER,Top_Speed INTEGER,Range INTEGER,Acceleration,ChargePower,ChargeSpeed,FastChargePower,FastChargeSpeed)";
// db.run(sql);

//Insert table
sql =
  "INSERT INTO cars(Brand,Model,Price,Seat,Drive,Cargo,Top_Speed,Range,Acceleration,ChargePower,ChargeSpeed,FastChargePower,FastChargeSpeed) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)";
db.run(
  sql,
  [
    "Lexus",
    "RZ 450e LUXURY AWD",
    65880,
    5,
    "All Wheel Drive",
    988 /*litre*/,
    160 /* KMH */,
    315 /* KM YE KADAR */,
    "5.6" /* 0-100 */,
    "6.6 kW AC",
    "28 km/h",
    "147 kW DC",
    "480 km/h",
  ],
  (err) => {
    if (err) throw err;
  }
);

// //Selecting table
// sql = "SELECT * FROM cars";
// db.all(sql, [], (err, rows) => {
//   if (err) throw err;
//   rows.forEach((row) => {
//     console.log(row);
//   });
// });

// //Deleting table
// sql = "DROP TABLE cars";
// db.run(sql);

// // //Drop Column
// sql = "ALTER TABLE Cars DROP COLUMN Body";
// db.run(sql);

// //Update Row
// sql = "UPDATE Cars SET ChargePower='11 kW AC' WHERE id=1";
// db.run(sql);

db.close();
