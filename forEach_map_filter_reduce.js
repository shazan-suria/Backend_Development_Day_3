// forEach method

players = ["sbcd","fsffgg","qff"]

players.forEach((player) => console.log(player))

// Map Method

arr = [1,2,3,4,5,6]

cube_arr = arr.map(num => num**3)

console.log(cube_arr)

// filter

let arr1 = [1,2,3,4,5,6,7,8,9,10,11,12]

let even_arr = arr1.filter((num) => num%2==0)

console.log(even_arr)

// reduce

const sum = [1,2,3,4,5,6,7,8,9,10].reduce((current,next) => current+next)

console.log(sum)