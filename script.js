//DAY OPTIONS
const dayslist = document.querySelector('#days')

let days = []
for(let i = 1; i<=31; i++){
   days.push(i)
}

days.forEach(day => {
    optionDay =  document.createElement('option')
    optionDay.value = day   
    dayslist.appendChild(optionDay) 
})

//MONTH OPTIONS
const monthslist = document.querySelector('#months')

let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

months.forEach(month => {
    optionMon = document.createElement('option')
    optionMon.value = month
    monthslist.appendChild(optionMon)
})

//GET CURRENT YEAR
let date = new Date()
let currentYear = date.getFullYear()


//YEAR OPTIONS
const yearslist = document.querySelector('#years')

let years = []
for(let i = currentYear - 130; i <= currentYear; i++){
    years.push(i)
}

years.forEach(year =>{
    optionYear = document.createElement('option')
    optionYear.value = year
    yearslist.appendChild(optionYear)
})
// GET INPUT AND RESULT
const dayInput = document.querySelector('.dayInput')
const monthInput = document.querySelector('.monthInput')
const yearInput = document.querySelector('.yearInput')
const result = document.querySelector('.result')

//GET CURRENT DAY AND MONTH
let currentDay = date.getDate()
let currentMonth = date.getMonth() //idx months list

//BTN ENTER
const btn = document.querySelector('.btn')
btn.addEventListener('click', () => {
    let userYear = yearInput.value
    let checkYear = currentYear - userYear
    if(checkYear < 18){
        result.innerText = 'Sorry, you are not allowed on this website'
    }else if (checkYear === 18){
        let userMonth = monthInput.value
        let idxUserMonth = months.indexOf(userMonth)
        if(idxUserMonth > currentMonth){
            result.innerText = 'Sorry, you are not allowed on this website'
        }else if(idxUserMonth === currentMonth){
            let userDay = dayInput.value
            if(userDay > currentDay){
                result.innerText = 'Sorry, you are not allowed on this website'
            }else{
                result.innerText = 'Welcome'
            }
        }
    }
    else{
        result.innerText = 'Welcome'
    }
})


