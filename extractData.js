const data = []
const names = ['Big Brand', 'Studio Great', 'Star Retaliler', 'Good Bussiness', 'Avengers', 'Tomathawk', 'Red River']

const years = ['2022', '2021']
const months = ['january', 'february', 'mars', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december']
const days = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28]
const values = [4300, 5500, 2200, 1300, 6000, 900, 450, 20000, 12000, 4900, 9400]

for (let i = 0; i < 10; i++) {
    const obj = {}
    obj.orderId = i
    obj.customer = names[Math.floor(Math.random() * names.length)]
    const year = years[1]
    const randomMonth = months[Math.floor(Math.random() * months.length)]
    const randomDay = days[Math.floor(Math.random() * days.length)]
    obj.date = new Date(`${randomMonth}/${randomDay}/${year}`)
    obj.value = values[Math.floor(Math.random() * values.length)]
    data.push(obj)
}

for (let i = 0; i < 10; i++) {
    const obj = {}
    obj.orderId = i
    obj.customer = names[Math.floor(Math.random() * names.length)]
    const year = years[0]
    const randomMonth = months[Math.floor(Math.random() * months.length)]
    const randomDay = days[Math.floor(Math.random() * days.length)]
    obj.date = new Date(`${randomMonth}/${randomDay}/${year}`)
    obj.value = values[Math.floor(Math.random() * values.length)]
    data.push(obj)
}
console.log(data.length)
const organized = {

}
for (order of data) {
    const year = order.date.getFullYear();
    const month = months[order.date.getMonth()]

    if (!organized[year]) {
        organized[year] = {}
        organized[year][month] = [order]
    } else {
        if (!organized[year][month]) {
            organized[year][month] = [order]
        } else {
            organized[year][month].push(order)
        }
    }
}
console.log(organized)

// GET TOTAL VALUES PER MONTH
const totalPerMonth = []

for (let yearKey of Object.keys(organized)) {
    yearKey
    const aYear = organized[yearKey]
    for (let key of Object.keys(aYear)) {
        key
        const aMonth = aYear[key]
        console.log(aMonth[0].value)
        let total = 0
        for (let order of aMonth) {

            total += order.value
        }
        total
        // const total = aMonth.reduce((prev, curr)=> prev.value + curr.value, 0)
        console.log(total)
        const obj = { month: `${key}`, total, year: `${yearKey}` }
        totalPerMonth.push(obj)
    }
}

// SORT 
console.log(totalPerMonth)
const sorted = totalPerMonth.sort(function (order1, order2) {

    if (order1.year > order2.year) return -1;
    if (order1.year < order2.year) return 1;

    if (months.indexOf(order1.month) > months.indexOf(order2.month)) return -1;
    if (months.indexOf(order2.month) < months.indexOf(order2.month)) return 1;
})
console.log(sorted)


const objIndex = (arr, srch) => {
    let index = -1
    for (let ind in arr) {
        if (arr[ind].name == srch) {
            return ind
        }
    }
    return index
}

const TotalPerCustomer = (scale = 'year', data) => {
    if (scale === 'year') { }
    if (scale === 'month') { }

    const output = []
    // {name: '', total: 234324}
    for (let order of data) {

    }

    return output; // [{name: 'big brand', total value: 832429},{},{},{}]
}
const test = [
    { name: 'one', total: 2342 },
    { name: 'two', total: 242 },
    { name: 'three', total: 232 },
]
