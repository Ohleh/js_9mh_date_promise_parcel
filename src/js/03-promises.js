const formRef = document.querySelector('form');

formRef.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();
  const form = e.target;
  const delay = form.elements.delay.value;
  const step = form.elements.step.value;
  const amount = form.elements.amount.value;
  const summ = delay + step;
  // const sumNum = Number(summ);

  const promise = new Promise((res, rej) => {
    setTimeout(() => {
      console.log(delay);
      res({ delay, step });
    }, delay);
  });
  promise
    // .then((data) => {

    // })
    .then(({ delay, step }) => {
      const newDel = Number(delay) + Number(step);
      for (let i = 1, j = newDel; i <= amount; i += 1, j += Number(step)) {
        setTimeout(() => {
          console.log(j, i);
        }, j);
        // newDel += Number(step);
      }
    })
    .catch(error => console.log(error));
}

// function createPromise(position, delay) {
//   const shouldResolve = Math.random() > 0.3;
//   if (shouldResolve) {
//     // Fulfill
//   } else {
//     // Reject
//     //
//   }
// }

// pending

const greating = userName => {
  return new Promise((resolve, reject) => {
    console.log(`hi ${userName}`);
    const coffe = true;
    setTimeout(() => {
      if (coffe) {
        resolve(` ${userName} likes Coffe :)`);
      } else {
        reject(` ${userName} dont like coffe :(`);
      }
    }, 1000);
  });
};

greating('Mango')
  .then(resolve => {
    console.log(`works resolve:', ${resolve}`);
    return `works resolve:', ${resolve}`;
  })
  .then(resolve => {
    console.log(addCackes(resolve));
    // return addCackes(resolve);
  })
  .catch(reject => console.log('works reject:', reject));

function addCackes(res) {
  console.log('adition function in then():');
  return `${res} and Cackes )`;
}
