"use strict";

if (getLastPart() == "index.html") {
  const thisWeek = [
    {
      productName: "Lemon Burst Cupcake",
      price: 3.99,
      imageName: "lemon_burst_cupcake.jpg",
    },
    {
      productName: "Red Velvet Indulgence Cake",
      price: 34.99,
      imageName: "red_velvet_indulgence_cake.jpg",
    },
    {
      productName: "Peanut Butter Paradise Cupcake",
      price: 4.99,
      imageName: "peanut_butter_paradise_cupcake.jpg",
    },
  ];

  let thisWeeksItems = document.getElementsByClassName("ChosenGrid")[0];
  clearDiv("ChosenGrid");

  thisWeek.forEach((cake) => {
    thisWeeksItems.innerHTML += generateCakeCard(cake);
  });
}
if (getLastPart() == "products.html") {
  const cupcakes = [
    {
      productName: "Chocolate Dream Cupcake",
      price: 3.99,
      imageName: "chocolate_dream_cupcake.jpg",
    },
    {
      productName: "Vanilla Bliss Cupcake",
      price: 3.49,
      imageName: "vanilla_bliss_cupcake.jpg",
    },
    {
      productName: "Red Velvet Delight Cupcake",
      price: 4.25,
      imageName: "red_velvet_delight_cupcake.jpg",
    },
    {
      productName: "Strawberry Fields Cupcake",
      price: 3.75,
      imageName: "strawberry_fields_cupcake.jpg",
    },
    {
      productName: "Lemon Burst Cupcake",
      price: 3.99,
      imageName: "lemon_burst_cupcake.jpg",
    },
    {
      productName: "Caramel Crunch Cupcake",
      price: 4.49,
      imageName: "caramel_crunch_cupcake.jpg",
    },
    {
      productName: "Blueberry Blast Cupcake",
      price: 3.99,
      imageName: "blueberry_blast_cupcake.jpg",
    },
    {
      productName: "Peanut Butter Paradise Cupcake",
      price: 4.99,
      imageName: "peanut_butter_paradise_cupcake.jpg",
    },
  ];
  const cakes = [
    {
      productName: "Classic Chocolate Cake",
      price: 29.99,
      imageName: "classic_chocolate_cake.jpg",
    },
    {
      productName: "Vanilla Celebration Cake",
      price: 24.99,
      imageName: "vanilla_celebration_cake.jpg",
    },
    {
      productName: "Red Velvet Indulgence Cake",
      price: 34.99,
      imageName: "red_velvet_indulgence_cake.jpg",
    },
    {
      productName: "Lemon Drizzle Delight Cake",
      price: 27.99,
      imageName: "lemon_drizzle_delight_cake.jpg",
    },
    {
      productName: "Carrot Crush Cake",
      price: 32.99,
      imageName: "carrot_crush_cake.jpg",
    },
    {
      productName: "Strawberry Fantasy Cake",
      price: 26.99,
      imageName: "strawberry_fantasy_cake.jpg",
    },
    {
      productName: "Blueberry Bliss Cake",
      price: 29.99,
      imageName: "blueberry_bliss_cake.jpg",
    },
    {
      productName: "Caramel Sensation Cake",
      price: 31.99,
      imageName: "caramel_sensation_cake.jpg",
    },
    {
      productName: "Pineapple Paradise Cake",
      price: 28.99,
      imageName: "pineapple_paradise_cake.jpg",
    },
  ];

  //   console.table(cupcakes);
  //   console.table(cakes);

  let CupCakeGrid = document.getElementsByClassName("cupcakeGrid")[0];
  let cakeGrid = document.getElementsByClassName("cakeGrid")[0];

  clearDiv("cakeGrid");
  clearDiv("cupcakeGrid");

  cupcakes.forEach((cake) => {
    CupCakeGrid.innerHTML += generateCakeCard(cake);
  });

  cakes.forEach((cake) => {
    cakeGrid.innerHTML += generateCakeCard(cake);
  });
}

function generateCakeCard(cake) {
  return `
      <div class="cakeCard">
          <div class="imageContainter">
              <div class="image" style="background-image: url('../resources/images/${cake.imageName}')"></div>
          </div>
          <div class="cakeInfo">
              <p class="productName">${cake.productName}</p>
              <p class="price">${cake.price}</p>
              <div class="button">Buy now</div>
          </div>
      </div>
      `;
}

function getLastPart() {
  let url = window.location.href;

  let parts = url.split("/");
  return url.lastIndexOf("/") !== url.length - 1
    ? parts[parts.length - 1]
    : parts[parts.length - 2];
}

function clearDiv(className) {
  let elements = document.getElementsByClassName(className);
  for (let i = 0; i < elements.length; i++) {
    elements[i].innerHTML = ""; // Clearing the content of each element
  }
}
