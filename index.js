const counters = document.querySelectorAll(".number");

counters.forEach((counter) => {
  counter.innerText = "0";

  const startCounting = () => {
    const target = +counter.getAttribute("target");

    const count = +counter.innerText;

    if (count < target) {
      counter.innerText = count + 8;
      setTimeout(startCounting, 1);
    } else {
      counter.innerText = target;
    }
  };

  startCounting();
});
