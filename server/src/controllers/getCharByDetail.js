
const uno = new Promise((resolve, reject)=>setTimeout(() => {
    resolve(1)
}, 1000));
const dos = new Promise((resolve, reject) => resolve(2));


const promesa = Promise.all([uno, dos]).then((values) => {
  values.forEach((value) => {
    console.log(value);
  });
});

console.log(promesa)
