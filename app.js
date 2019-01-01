// async function myFunc() {
//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve('Hello'), 1000);
//   });

//   const error = false;

//   if (!error) {
//     const resolve = await promise; // Wait until promise is resolved
//     return resolve;
//   } else {
//     await Promise.reject(new Error('Something went wrong'));
//   }


// }

// myFunc().then(resolve => console.log(resolve)).catch(error => console.log(error));

async function getUsers() {
  // await response of the fetch call
  const response = await fetch('https://jsonplaceholder.typicode.com/users');

  // Only proceed once its resolved
  const data = await response.json();

  // Only proceed once second promise is resolved
  return data;

}

getUsers().then(users => console.log(users));