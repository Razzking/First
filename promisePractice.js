// async function data(url){
//     setTimeout(async ()=> {
//        await fetch(url);
//        return "Hello, World!";
//     }, 1000)
// }

// async function fetchData(url){
//     try {
//         const apiFetch = await data(url)
//         // const result = await new Promise( (res , rej) => {
//         //     setTimeout( ()=> rej( "Hello, World!" ) , 1000)
//         // });
//         // console.log(result)
//         return apiFetch;

//     } catch (error) {
//         console.log("Failed to fetch data")
//     }
// }

// fetchData('https://jsonplaceholder.typicode.com/posts/10')
// .then( (result) => console.log( result ))
// .catch( (e) => console.error(e))

async function allpromise(){
    const p1 = new Promise.resolve("hello1");
    const p2 = new Promise.resolve("hello2");
    const p3 = new Promise.resolve("hello3");
    const p4 = new Promise.resolve("hello4");
    const p5 = new Promise.resolve("hello5");

    await Promise.all( [p1, p2] ).then( (x) => console.log(x));

}

  // const passStd = students.filter( (marks)=> marks.score >= 60);
  // const avgMarks = passStd.reduce((total , marks) => total += marks.score , 0);
  // return avgMarks / passStd.length;