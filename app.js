'use strict'

//Global Variables ---------------------------------------------------------
const imageSelectorElem = document.getElementById('all_images');
const leftImgElem = document.getElementById('image_left_picture');
const centerImgElem = document.getElementById('image_center_picture');
const rightImgElem = document.getElementById('image_right_picture');
const leftH3Elem = document.getElementById('image_left_h3');
const centerH3Elem = document.getElementById('image_center_h3');
const rightH3Elem = document.getElementById('image_right_h3');
const productLikesElem = document.getElementById('product_likes');
Product.allProducts = [];
let likeCounter = 0;

let leftImage = null;
let centerImage = null;
let rightImage = null;

//Chart Script ----------------Currently Broken---------------------------------
// const ctx = document.getElementById('myChart').getContext('2d');

// const data = [1, 2, 3, 4, 5];
// const labelColors = ['red', 'blue', 'green', 'pink', 'yellow'];

// const  myChart = new Chart(ctx, {
//     type: 'bar',
//     data: {
//         labels: labelColors,
//         datasets: [{
//             label: '# of Votes',
//             data: data,
//             backgroundColor: labelColors
//         }]
//             [
//                 'rgba(255, 99, 132, 0.2)',
//                 'rgba(54, 162, 235, 0.2)',
//                 'rgba(255, 206, 86, 0.2)',
//                 'rgba(75, 192, 192, 0.2)',
//                 'rgba(153, 102, 255, 0.2)',
//                 'rgba(255, 159, 64, 0.2)'
//             ],
//             borderColor: [
//                 'rgba(255, 99, 132, 1)',
//                 'rgba(54, 162, 235, 1)',
//                 'rgba(255, 206, 86, 1)',
//                 'rgba(75, 192, 192, 1)',
//                 'rgba(153, 102, 255, 1)',
//                 'rgba(255, 159, 64, 1)'
//             // ],
//             borderWidth: 1
//         }]
//     },
//     options: {
//         scales: {
//             y: {
//                 beginAtZero: true
//             }
//         }
//     }
// });

//Constructor Function ---------------------------------------------------------
function Product(name, image) {
  this.name = name;
  this.image = image;
  this.timesShown = 0;
  this.likes = 0;
  Product.allProducts.push(this);
}

//Prototype Methods ---------------------------------------------------------
Product.prototype.renderSingleProduct = function (imgPosition) {
  imgPosition.src = this.image;
  // h3Position.textContent = this.name;
  this.timesShown++;
}

//Global Functions ---------------------------------------------------------
function getRandomIndex() {
  return Math.floor(Math.random() * Math.floor(Product.allProducts.length));
}

function chooseThreeProducts() {
  let lastProducts = [leftImage, centerImage, rightImage];

  while (lastProducts.includes(leftImage)) {
    let randomIndex = getRandomIndex();
    leftImage = Product.allProducts[randomIndex];
  }
  lastProducts.push(leftImage);

  while (lastProducts.includes(centerImage)) {
    let randomIndex = getRandomIndex();
    centerImage = Product.allProducts[randomIndex];
  }
  lastProducts.push(centerImage);

  while (lastProducts.includes(rightImage)) {
    let randomIndex = getRandomIndex();
    rightImage = Product.allProducts[randomIndex];
  }
  lastProducts.push(rightImage);

  leftImage.renderSingleProduct(leftImgElem);
  centerImage.renderSingleProduct(centerImgElem);
  rightImage.renderSingleProduct(rightImgElem);
}

function createProducts() {
  new Product('R2 D2 Tote', './img/bag.jpg');
  new Product('Banana Slicer', './img/banana.jpg');
  new Product('iPad Holder', './img/bathroom.jpg');
  new Product('Boot Sandals', './img/boots.jpg');
  new Product('Breakfast Kit', './img/breakfast.jpg');
  new Product('Bubble Gum Meatballs', './img/bubblegum.jpg');
  new Product('Chair', './img/chair.jpg');
  new Product('Cthulhu Action Figure', './img/cthulhu.jpg');
  new Product('Duck Lips', './img/dog-duck.jpg');
  new Product('Dragon Meat', './img/dragon.jpg');
  new Product('Pen Utensils', './img/pen.jpg');
  new Product('Pet Sweeper', './img/pet-sweep.jpg');
  new Product('Pizza Scissors', './img/scissors.jpg');
  new Product('Shark Sleeping Bag', './img/shark.jpg');
  new Product('Baby Sweeper', './img/sweep.png');
  new Product('Taun Taun Sleeping Bag', './img/tauntaun.jpg');
  new Product('Unicorn Meat', './img/unicorn.jpg');
  new Product('Watering Can', './img/water-can.jpg');
  new Product('Wine Glass', './img/wine-glass.jpg');
  }

function handleClick(event) {

  let id = (event.target.id);
  let select = null;

  if (id === 'image_left_picture') {
    select = leftImage;
  } else if (id === 'image_center_picture') {
    select = centerImage;
  } else if (id === 'image_right_picture') {
    select = rightImage;
  }

  if (select) {
    select.likes++;
    likeCounter++;
    chooseThreeProducts();
  }
  if (likeCounter === 25){
    productLikesElem.innerHTML = '';

    for (let i = 0; i < Product.allProducts.length; i++) {
      let product = Product.allProducts[i];
      let liElem = document.createElement('li');
      liElem.textContent = `${product.name}: ${product.likes}`;
      productLikesElem.appendChild(liElem);
    }
    imageSelectorElem.removeEventListener('click', handleClick);
}
}

//Event Listeners ---------------------------------------------------------
imageSelectorElem.addEventListener('click', handleClick);

//Call Functions ---------------------------------------------------------
createProducts();
chooseThreeProducts();

