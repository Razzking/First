// forEach method break by Exceptuion

let arr = [1,2,3,4,5]
try {arr.forEach( (value) => {
    
        if(value  < 3 ){

        console.log(value)
        }else { throw new Error("forEach break");}
    })
 
}catch (error) {
        console.log(error.message)
}

//      String to Array of Object By Using JSON

const obj =  `[{ "a": 1, "b": 2 }, { "a": 3, "b": 4 }]`
let jsonArr = JSON.parse(obj)

console.log( jsonArr , typeof jsonArr)

// third branch first commit
// third branch second commit
// second branch first commit 
