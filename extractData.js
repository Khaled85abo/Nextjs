const date = new Date("7/7/2022");
date;

const data = [];
const names = [
  "Big Brand",
  "Studio Great",
  "Star Retaliler",
  "Good Bussiness",
  "Avengers",
  "Tomathawk",
  "Red River",
];

const years = ["2022", "2021"];
const months = [
  "jan",
  "feb",
  "mar",
  "apr",
  "may",
  "jun",
  "jul",
  "aug",
  "sep",
  "oct",
  "nov",
  "dec",
];
const days = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28,
];
const values = [
  4300, 5500, 2200, 1300, 6000, 900, 450, 20000, 12000, 4900, 9400,
];

for (let i = 0; i < 10; i++) {
  const obj = {};
  obj.orderId = i;
  obj.customer = names[Math.floor(Math.random() * names.length)];
  const year = years[1];
  const randomMonth = months[Math.floor(Math.random() * months.length)];
  const randomDay = days[Math.floor(Math.random() * days.length)];
  obj.date = new Date(`${randomMonth}/${randomDay}/${year}`);
  obj.value = values[Math.floor(Math.random() * values.length)];
  data.push(obj);
}

for (let i = 0; i < 10; i++) {
  const obj = {};
  obj.orderId = i;
  obj.customer = names[Math.floor(Math.random() * names.length)];
  const year = years[0];
  const randomMonth = months[Math.floor(Math.random() * months.length)];
  const randomDay = days[Math.floor(Math.random() * days.length)];
  obj.date = new Date(`${randomMonth}/${randomDay}/${year}`);
  obj.value = values[Math.floor(Math.random() * values.length)];
  data.push(obj);
}
console.log(data);
const organized = {};
for (order of data) {
  const year = order.date.getFullYear();
  const month = months[order.date.getMonth()];

  if (!organized[year]) {
    organized[year] = {};
    organized[year][month] = [order];
  } else {
    if (!organized[year][month]) {
      organized[year][month] = [order];
    } else {
      organized[year][month].push(order);
    }
  }
}
console.log(organized);

// GET TOTAL VALUES PER MONTH
const totalPerMonth = [];

for (let yearKey of Object.keys(organized)) {
  yearKey;
  const aYear = organized[yearKey];
  for (let key of Object.keys(aYear)) {
    key;
    const aMonth = aYear[key];
    console.log(aMonth[0].value);
    let total = 0;
    for (let order of aMonth) {
      total += order.value;
    }
    total;
    // const total = aMonth.reduce((prev, curr)=> prev.value + curr.value, 0)
    console.log(total);
    const obj = { month: `${key}`, total, year: `${yearKey}` };
    totalPerMonth.push(obj);
  }
}

// SORT
console.log(totalPerMonth);
const sorted = totalPerMonth.sort(function (order1, order2) {
  if (order1.year > order2.year) return -1;
  if (order1.year < order2.year) return 1;

  if (months.indexOf(order1.month) > months.indexOf(order2.month)) return -1;
  if (months.indexOf(order2.month) < months.indexOf(order2.month)) return 1;
});
console.log(sorted);

const getYearTotalValue = (organized, year = new Date().getFullYear()) => {
  year;
  let total = 0;
  if (organized[year]) {
    for (let [month, arr] of Object.entries(organized[year])) {
      let tot = 0;
      for (let order of arr) {
        tot += order.value;
      }
      total += tot;
    }
  }
  return Math.ceil(total);
};
const oneYearValue = getYearTotalValue(organized);
oneYearValue;

const objIndex = (arr, srch) => {
  let index = -1;
  for (let ind in arr) {
    if (arr[ind].name == srch) {
      return ind;
    }
  }
  return index;
};
// organized: database, scale: enum {year, month}, year: number, month: string
const totalPerCustomer = (organized, scale, year = null, month = null) => {
  const output = [];
  // scale === ''
  // scale === 'year' && year === null -> count each customer totalValues per every year.
  // scale === 'year' && year === number -> count each customer totalValues in that year.
  if (scale && scale.toLowerCase() === "year") {
    if (!year) {
      for (let [year, months] of Object.entries(organized)) {
        let arr = [];
        for (let [month, orders] of Object.entries(months)) {
          for (let order of orders) {
            if (!order.customer) {
              const index = objIndex(arr, "unknown");
              if (index > -1) {
                arr[index].totalValue += order.value;
              } else {
                arr.push({
                  year,
                  name: "unknown",
                  totalValue: order.value,
                });
              }
            } else {
              const index = objIndex(arr, order.customer);
              if (index > -1) {
                arr[index].totalValue += order.value;
              } else {
                arr.push({
                  year,
                  name: order.customer,
                  totalValue: order.value,
                });
              }
            }
          }
        }
        output.push(arr);
      }
    } else {
      if (organized[year]) {
        let arr = [];
        for (let [month, orders] of Object.entries(organized[year])) {
          for (let order of orders) {
            if (!order.customer) {
              const index = objIndex(arr, "unknown");
              if (index > -1) {
                arr[index].totalValue += order.value;
              } else {
                arr.push({
                  year,
                  name: "unknown",
                  totalValue: order.value,
                });
              }
            } else {
              const index = objIndex(arr, order.customer);
              if (index > -1) {
                arr[index].totalValue += order.value;
              } else {
                arr.push({
                  year,
                  name: order.customer,
                  totalValue: order.value,
                });
              }
            }
          }
        }
        output.push(arr);
      }
    }
  } else if (scale && scale.toLowerCase() === "month") {
    if (!month && !year) {
      for (let [year, months] of Object.entries(organized)) {
        for (let [month, orders] of Object.entries(months)) {
          let arr = [];
          for (let order of orders) {
            if (!order.customer) {
              const index = objIndex(arr, "unknown");
              if (index > -1) {
                arr[index].totalValue += order.value;
              } else {
                arr.push({
                  name: "unknown",
                  totalValue: order.value,
                  month,
                  year,
                });
              }
            } else {
              const index = objIndex(arr, order.customer);
              if (index > -1) {
                arr[index].totalValue += order.value;
              } else {
                arr.push({
                  name: order.customer,
                  totalValue: order.value,
                  month,
                  year,
                });
              }
            }
          }
          output.push(arr);
        }
      }
    } else if (year && !month) {
      let arr = [];
      if (organized[year]) {
        for (let [month, orders] of Object.entries(organized[year])) {
          let arr = [];
          for (let order of orders) {
            if (!order.customer) {
              const index = objIndex(arr, "unknown");
              if (index > -1) {
                arr[index].totalValue += order.value;
              } else {
                arr.push({
                  name: "unknown",
                  totalValue: order.value,
                  month,
                  year,
                });
              }
            } else {
              const index = objIndex(arr, order.customer);
              if (index > -1) {
                arr[index].totalValue += order.value;
              } else {
                arr.push({
                  name: order.customer,
                  totalValue: order.value,
                  month,
                  year,
                });
              }
            }
          }
          output.push(arr);
        }
      }
    } else {
      if (organized[year][month]) {
        for (let order of organized[year][month]) {
          if (!order.customer) {
            const index = objIndex(output, "unknown");
            if (index > -1) {
              output[index].totalValue += order.value;
            } else {
              output.push({
                name: "unknown",
                totalValue: order.value,
                month,
                year,
              });
            }
          } else {
            const index = objIndex(output, order.customer);
            if (index > -1) {
              output[index].totalValue += order.value;
            } else {
              output.push({
                name: order.customer,
                totalValue: order.value,
                month,
                year,
              });
            }
          }
        }
      }
    }
  } else {
    for (let [year, months] of Object.entries(organized)) {
      for (let [month, orders] of Object.entries(months)) {
        for (let order of orders) {
          if (!order.customer) {
            const index = objIndex(output, "unknown");
            if (index > -1) {
              output[index].totalValue += order.value;
            } else {
              output.push({ name: "unknown", totalValue: order.value });
            }
          } else {
            const index = objIndex(output, order.customer);
            if (index > -1) {
              output[index].totalValue += order.value;
            } else {
              output.push({ name: order.customer, totalValue: order.value });
            }
          }
        }
      }
    }
  }
  return output; // [{name: 'big brand', totalValue: 832429, month? , year?},{},{},{}]
};

const customersTotal22 = totalPerCustomer(organized, "year", 2022);
const customersTotal21 = totalPerCustomer(organized, "year", 2021);
const totalMonth = totalPerCustomer(organized, "month", 2021);
const customersTotal = totalPerCustomer(organized, "year");
const allOrdersTotal = totalPerCustomer(organized);
console.log(allOrdersTotal);
console.log(customersTotal22);
console.log(customersTotal21);
console.log(customersTotal);
console.log(totalMonth);
const januaryMonth = totalPerCustomer(organized, "month", 2021, "mar");

console.log(januaryMonth);

const monthly = totalPerCustomer(organized, "month");

console.log(monthly);
