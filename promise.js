// let namee = function(){
//     return new Promise(function(resolve,reject){
//          console.log("My name is daniel")
//     })
//     }


// let school = function(){
//         return new Promise(function(resolve,reject){
//              console.log("My school is unilag")
//  })
// }


// let church = function(){
//     return new Promise(function(resolve,reject){
//          console.log("My church is daystar")
// })
// }


// church().then(function(){
//     return school()
// }).then(function(){
//      return church()
// }).then(function(){
//      return namee()
// })

// const firstPromise = new Promise((resolve, reject) => {
//      setTimeout(() =>{
//           resolve("Hello there")
//      })
// })

// firstPromise.then((resolve)=>{
//      console.log(resolve)
// })


const secondPromise = new Promise((resolve, reject) => {
     result = true
      if(resolve){
         console.log("It is correct")
      }

      setTimeout(() =>{
          reject("It is not")
      },1000)
})

secondPromise.then((value) =>{
    console.log(value)
}).catch((value) =>{
     console.log(value)
})






