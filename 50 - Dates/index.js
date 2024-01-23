// Date objects = Objects that contain values that represent dates and times
//                These date objects can be changed and formatted

const date = new Date();

date.setFullYear(2024);
date.setMonth(0);
date.setDate(1);
date.setHours(2);
date.setMinutes(3);
date.setSeconds(3);

console.log(date);

const date1 = new Date("2023-12-31");
const date2 = new Date("2024-01-01");

if (date2 > date1) {
  console.log("HAPPY NEW YEAR");
}
