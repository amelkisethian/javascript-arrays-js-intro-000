var chocolateBars = [
  'snickers',
  'hundredgrand',
  'kitkat',
  'skittles'
]

function addElementToBeginningOfArray() {
  var array = [1, 2]
  [4, ...array] 
  return array 
}

function destructivelyAddElementToBeginningOfArray() {
  var array = [1,2]
  array.unshift(4)
  return array
}
