// let h1 = document.querySelector("h1");

// function changeColor(color, delay) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             h1.style.color = color;
//             resolve("color changed");
//         }, delay);
//     })
// }

// changeColor("red", 1000)
// .then(() => {
//     console.log("color red");
//     return changeColor("orange", 1000)
// })
// .then(() => {
//     console.log("color orange");
//     return changeColor("green", 1000)
// })
// .then(() => {
//     console.log("color green");
//     return changeColor("pink", 1000)
// })
// .then(() => {
//     console.log("color pink");
//     return changeColor("yellow", 1000)
// })
// .then(() => {
//     console.log("color yellow");
//     return changeColor("purple", 1000)
// })
// .then(() => {
//     console.log("color purple");
// })

// // .catch(() => {  //okay not to write it for this code
// //     console.log("Error occurs");
// // })


// let h1 = document.querySelector("h1");

// function changeColor(color, delay) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             h1.style.color = color;
//             resolve("color changed");
//         }, delay);
//     })
// }

// async function color() {
//     await changeColor("red", 1000);
//     await changeColor("hotpink", 1000);
//     await changeColor("yellow", 1000);
//     await changeColor("deeppink", 1000);
    
//     let v = 7;
//     console.log(v);
//     console.log(v, v);
// }


//APIs
// let url = "https://catfact.ninja/fact";

// fetch(url)
//   .then((res) => {
//     return res.json();
//   })
//   .then((data) => {
//     console.log(data.fact);
//     return fetch(url);
//   })
//   .then((res) => {
//     return res.json();
//   })
//   .then((data2) => {
//     console.log(data2.fact);
//   })
//   .catch((err) => {
//     console.log("ERROR -", err);
//   })

//   console.log("hello");

// async function getFacts() {
//     try {
//         let res = await fetch(url);
//         let data = await res.json();
//         console.log(data.fact);    
//     } catch(e) {
//         console.log("ERROR");
//     }
// }

//headers in axios function
let url = "https://icanhazdadjoke.com";

async function getJokes() {
    try{
        const config = { headers: { Accepet: "application/json" } };
        let res = await axios.get(url, config);
        console.log(res.data);
    } catch(err) {
        console.log(err);
    }
}
