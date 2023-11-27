const pizzaToppings = [
  "pepperoni",
  "cheese",
  "sausage",
  "bacon",
  "veggies",
  "peppers"
];

const greetCustomer = () => {
  console.log(
    `Welcome to Pizza Palace, we currently have: ,  ${listToppings(
      pizzaToppings
    )} today!`
  );
};

const listToppings = toppings => {
  if (toppings.length === 1) {
    return toppings[0];
  } else {
    const lastTopping = toppings.pop();
    return `${toppings.join(", ")} and ${lastTopping}`;
  }
};

const getPizzaOrder = (size, crust, ...toppings) => {
  if (toppings.length === 0) {
    console.log(`One ${size} ${crust} crust pizza coming right up!`);
  } else {
    console.log(`One ${size} ${crust} crust pizza with
    ${listToppings(toppings)} coming up!`);
  }
  return [size, crust, toppings];
};

const preparePizza = order => {
  console.log("...your pizza is cooking...");
  return {
    size: order[0],
    crust: order[1],
    toppings: order[2]
  };
};

const servePizza = pizza => {
  console.log(`Order up! Here's your ${pizza.size} ${pizza.crust}
  crust pizza with ${listToppings(pizza.toppings)}. Enjoy!`);
  return pizza;
};

greetCustomer();

const order = getPizzaOrder("large", "thick", "sausage", "bacon", "peppers");
const pizza = preparePizza(order);
servePizza(pizza);
