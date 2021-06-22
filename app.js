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

let likeCounter = 0;
let leftImage = null;
let centerImage = null;
let rightImage = null;

Product.allProducts = [];

//Event Listeners ---------------------------------------------------------
imageSelectorElem.addEventListener('click', handleClick);

//Constructor Function ---------------------------------------------------------

function Product(name, image) {
  this.name = name;
  this.image = image;
  this.timesShown = 0;
  this.likes = 0;
  Product.allProducts.push(this);
}

//Prototype Methods ---------------------------------------------------------
Product.prototype.renderSingleProduct = function (imgPosition, h3Position) {
  imgPosition.src = this.image;
  h3Position.textContent = this.name;
  this.timesShown++;
}

//Global Functions ---------------------------------------------------------

function getRandomIndex() {
  return Math.floor(Math.random() * Math.floor(Product.allProducts.length));
}

function chooseThreeProducts() {
  let lastProducts = [currentLeftProduct, currentCenterProduct, currentRightProduct];

  while (lastProducts.includes(currentLeftProduct)) {
    let randomIndex = getRandomIndex();
    currentLeftProduct = Product.allProducts[randomIndex];
  }
  lastProducts.push(currentLeftProduct);

  while (lastProducts.includes(currentCenterProduct)) {
    let randomIndex = getRandomIndex();
    currentCenterProduct = Product.allProducts[randomIndex];
  }
  lastProducts.push(currentCenterProduct);

  while (lastProducts.includes(currentRightProduct)) {
    let randomIndex = getRandomIndex();
    currentRightProduct = Product.allProducts[randomIndex];
  }
  lastProducts.push(currentRightProduct);
}

currentLeftProduct.renderSingleProduct(leftImgElem);
currentCenterProduct.renderSingleProduct(centerImgElem);
currentRightProduct.renderSingleProduct(rightImgElem);


// function renderResults() {
//   productLikesElem.innerHTML = '';

//   for (let i = 0; i < Product.allProducts.length; i++) {
//     let product = Product.allProducts[i];
//     let liElem = document.createElement('li');
//     liElem.textContent = `${product.name}: ${product.likes}`;
//     productLikesElem.appendChild(liElem);
//   }
// }

function handleClick(event) {
  //alert(event.target.id); play with and see if this does anything

  let id = event.target.id
  if (id === 'image_left_picture' || id === 'image_center_picture' || id === 'image_right_picture') {
    likeCounter++;
    if (id === 'image_left_picture') {
      leftImage.likes++;
    } else if (id === 'image_center_picture') {
      centerImage.like++;
    } else {
      rightImage++;
    }
  }
  if (likeCounter === 4) {
    renderResults();
    imageSelectorElem.removeEventListener('click', handleClick);
  }
}


//Call Functions ---------------------------------------------------------
new Product('R2 D2 Tote', './images/bag.jpg');
new Product('Banana Slicer', './images/banana.jpg');
new Product('iPad Holder', './images/bathroom.jpg');
new Product('Boot Sandals', './images/boots.jpg');
new Product('Breakfast Kit', './images/breakfast.jpg');
new Product('Bubble Gum Meatballs', './images/bubblegum.jpg');
new Product('Chair', './images/chair.jpg');
new Product('Cthulhu Action Figure', './images/cthulhu.jpg');
new Product('Duck Lips', './images/dog-duck.jpg');
new Product('Dragon Meat', './images/dragon.jpg');
new Product('Pen Utensils', './images/pen.jpg');
new Product('Pet Sweeper', './images/pet-sweep.jpg');
new Product('Pizza Scissors', './images/scissors.jpg');
new Product('Shark Sleeping Bag', './images/shark.jpg');
new Product('Baby Sweeper', './images/sweep.png');
new Product('Taun Taun Sleeping Bag', './images/tauntaun.jpg');
new Product('Unicorn Meat', './images/unicorn.jpg');
new Product('Watering Can', './images/water-can.jpg');
new Product('Wine Glass', './images/wine-glass.jpg');

pickThreeImages();
