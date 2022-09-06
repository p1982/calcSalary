const salary = document.querySelector("#salary")
const range = document.querySelector("#hours")
const hoursSpan = document.querySelector("#hours-span")
const maxValue = 40
const minValue = 10

countFullTime(range.value)

range.addEventListener('change', function (e) {
    const hours = e.target.value
    if (hours < 26) {
        countPartTime(hours)
    } else {
        countFullTime(hours)
    }
})

function countPartTime(hours) {
    const amount = hours * 52 * 60
    renderAmount(amount)
    renderSpanValue(hours)
}

function countFullTime(hours){
    const amount = hours * 52 * 65
    renderAmount(amount)
    renderSpanValue(hours)
}

function renderAmount(amount) {
    const splited = amount.toString().split('')
    const secondPart = splited.splice(splited.length - 3).join('')
    const firstPart = splited.join('')
    salary.innerText = `$${firstPart},${secondPart}`
}

function renderSpanValue(hours){
    hoursSpan.innerText = `${hours}`
    const koficient = (95 / (maxValue-minValue)).toFixed(2)
    const calcSpanPosition = (hours-minValue) * koficient
    console.log(calcSpanPosition);
    hoursSpan.style.left = `${calcSpanPosition}%`
}