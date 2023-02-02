const countDown = (start) => {
  if (start < 0) return;
  console.log(start);
  countDown(start - 1);
};

countDown(10);
