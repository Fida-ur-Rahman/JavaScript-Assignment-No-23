function stepOne() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Step 1");
    }, 1000);
  });
}

function stepTwo() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Step 2");
    }, 1000);
  });
}

function stepThree() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Step 3");
    }, 1000);
  });
}

stepOne()
  .then((result) => {
    console.log(result);
    return stepTwo();
  })
  .then((result) => {
    console.log(result);
    return stepThree();
  })
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log("Error:", error);
  });
