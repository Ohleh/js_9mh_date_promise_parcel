const formRef = document.querySelector('form');
const ulRef = document.createElement('ul');

// formRef.insertAdjacentHTML('afterend', '<h2>Popular technologies_2</h2>');

formRef.addEventListener('submit', onSubmit);

function onSubmit(e) {
  ulRef.textContent = '';
  e.preventDefault();

  const form = e.target.elements;
  const delay = Number(form.delay.value);
  const step = Number(form.step.value);
  const amount = Number(form.amount.value);

  for (
    let position = 1, jD = delay;
    position <= amount;
    position++, jD += step
  ) {
    createPromise(position, jD)
      .then(({ position, delay, shouldResolve }) => {
        console.log(
          `✅ Fulfilled promise ${position} in ${delay}ms. ${shouldResolve}.`
        );
        ulRef.innerHTML += `<li>✅ Fulfilled promise ${position} in ${delay}ms. ${shouldResolve}.</li>`;
      })
      .catch(({ position, delay, shouldResolve }) => {
        console.log(
          `❌ Rejected promise ${position} in ${delay}ms. ${shouldResolve}.`
        );
        ulRef.innerHTML += `<li>✅ Fulfilled promise ${position} in ${delay}ms. ${shouldResolve}.</li>`;
      });
  }
  formRef.after(ulRef);
}

function createPromise(position, delay) {
  console.log(delay);
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        console.log('delay', delay);

        resolve({ position, delay, shouldResolve });
      } else {
        reject({ position, delay, shouldResolve });
      }
    }, delay);
  });
  return promise;
  // .then(resolve => console.log(resolve))
  // .then(({ position, delay, shouldResolve }) => {
  //   console.log(`resolve №${position}. delay-${delay}. ${shouldResolve}.`);
  //   const markup = `<li> resolve №${position}. delay-${delay}. ${shouldResolve}. </li>`;
  //   ulRef.insertAdjacentElement('afterend', formRef);
  //   ulRef.insertAdjacentHTML('beforeend', markup);
  // })
}
