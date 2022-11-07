// ARRAY WITH ALL THE NEEDED STATUSES
let status = [
  "Blank",
  `Learning (new)`,
  `Normal (monitoring)`,
  `Normal`,
  `LIQUIDATION`,
  `Divest SO`,
  `Divest DNS`,
  `EOL`,
  `Discontinued/DNS`,
  `Special Order`,
];

// DATA FOR FUNCTIONS
let months = 0;
let orders = 0;
let modlog = "Needed changes added to mod log.";
let map = "Needed changes added to mod log + MAP adjustment.";
let instock = 0;

// STATUS GUIDE (USE THIS NUMBERS FOR CALLING THE ARRAY USING ACTUAL AND NEWER PARAMETERS):
// 0 = Blank
// 1 = Learning
// 2 = Normal (mon)
// 3 = Normal
// 4 = LIQUIDATION
// 5 = Divest SO
// 6 = Divest DNS
// 7 = EOL
// 8 = Discontinued/DNS
// 9 = Special Order

const update = (
  amount,
  time,
  change,
  actual,
  newer,
  catalog_add,
  map_adjust
) => {
  orders = amount;
  months = time;
  console.log(`${orders} Orders in the last ${months} months.`);
  switch (change) {
    case true:
      console.log(`Status update: ${status[actual]} -> ${status[newer]}`);
      break;
  }
  switch (catalog_add) {
    case true:
      console.log(modlog);
      break;
  }
  switch (map_adjust) {
    case true:
      console.log(map);
  }
};

const newitem = (date) => {
  console.log("In stock since ");
};

const show = () => {
  console.log(`
STATUS GUIDE (USE THIS NUMBERS FOR CALLING THE ARRAY USING ACTUAL AND NEWER PARAMETERS)
 0 = Blank
 1 = Learning
 2 = Normal (mon)
 3 = Normal
 4 = LIQUIDATION
 5 = Divest SO
 6 = Divest DNS
 7 = EOL
 8 = Discontinued/DNS
 9 = Special Order
  `);
};
