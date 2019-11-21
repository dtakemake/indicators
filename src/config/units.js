const weight = {
  "default" : "kg",
  "units"  : {
    "kg" : "кг", 
    "lb" : "фунты"
  }
}

const length = {
  "default" : "sm",
  "units"  : {
    "sm" : "см",
    "ft" : "футы"
  }
}

const units = { weight, length }

export default units

export {
  weight, 
  length
}
