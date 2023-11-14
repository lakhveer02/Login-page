//PROMISSE

// let complete = true;
// function prom(a,b){
//     return prom =new Promise(function(resolve, reject)  {
//        console.log("ruko zara")
//        var c = a*b;
//        setTimeout(()=>{
//         if(a,b){
//             resolve(`your answwer:${c}`);
//         }else{
//             reject("i am failld");
//         }
//        }, 1000) 

//     });
//    }
// //  let one =(result)=> {
// //   console.log(result);
// //  }
// //  let rej =(error)=>{
// //     console.log(error);
// //  }

//  prom(5,5).then((result) =>{
//     console.log(result);
//  }).catch((error) =>{
//     console.log(error);
//  });



//  prom(false).catch(rej);

//    console.log(prom(true));


// let prom =new Promise(function(resolve, reject)  {
//     if(complete){
//         resolve("i am secusful");
//     }else{
//         reject("i am failld");
//     }
// });
// console.log(prom);


// .then method

// fetch('https://jsonplaceholder.typicode.com/users')
//     .then((response) => response.json())
//     .then((data) => {
//         console.log(data);
//         for (var x in data) {
//             document.write(`${data[x].name} <br>${data[x].phone}<br> ${data[x].website} <br>${data[x].id}<br>${data[x].email} <br><br>`);
//         }
//     })
//     .catch((error) => console.log("Error fetching data:", ));



// //async

// async function fetchData() {
//   try {
//       const response = await fetch('https://jsonplaceholder.typicode.com/users');
//       if (!response.ok) {
//           throw new Error('Network response was not ok');
//       }
//       const data = await response.json();

//       data.forEach((user) => {
//           document.write(`${user.name} <br>${user.phone}<br> ${user.website} <br>${user.id}<br>${user.email} <br><br>`);
//       });
//   } catch (error) {
//       console.error("Error fetching data:");
//   }
// }

// fetchData();


// ajax

// function fetchData() {
//   const xhr = new XMLHttpRequest();
//   xhr.open('GET', 'https://jsonplaceholder.typicode.com/users', true);

//   xhr.onload = function () {
//       if (xhr.status === 200) {
//           const data = JSON.parse(xhr.responseText);

//           if (Array.isArray(data)) {
//               const userInformation = data.map((user) => {
//                   return `${user.name} <br>${user.phone}<br> ${user.website} <br>${user.id}<br>${user.email} <br><br>`;
//               }).join('');

//               document.write(userInformation);
//           } else {
//               console.error('Data is not in the expected format');
//           }
//       } else {
//           console.error('Request failed with status:', xhr.status);
//       }
//   };

//   xhr.onerror = function () {
//       console.error('Request failed');
//   };

//   xhr.send();
// }

// fetchData();






//push data



// document.addEventListener('DOMContentLoaded', function () {
//   document.getElementById('myForm').addEventListener('submit', function (event) {
//       event.preventDefault();

//       const name = document.getElementById('name').value;
//       const email = document.getElementById('email').value;


//       console.log('Name:', name);
//       console.log('Email:', email);

//       fetch('https://jsonplaceholder.typicode.com/posts', {
//           method: 'POST',
//           headers: {
//               'Content-Type': 'application/json'
//           },
//           body: JSON.stringify({
//               name: name,
//               email: email
//           })
//       })
//       .then(response => response.json())
//       .then(data => {
//           document.getElementById('result').innerText = 'Data submitted successfully!';
//       })
//       .catch(error => {
//           console.error('Error:', error);
//           document.getElementById('result').innerText = 'Error submitting data.';
//       });
//   });
// });


const greet = (name = "Friends") => {
    console.table(`Good Morning, ${name}!`);
};

greet();
greet("Lakhveer Singh");
// const p = 40;
// p =70;
// console.log(p);
// const p = "mn"
// console.log (p)