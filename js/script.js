window.onscroll = function() {myFixedHeader()};
var header = document.getElementById("myHeader");
var fixed = header.offsetTop;

function myFixedHeader() {
  if (window.pageYOffset > fixed) {
    header.classList.add("fixed");
  } else {
    header.classList.remove("fixed");
  }
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
        if (n > slides.length) {slideIndex = 1}
        if (n < 1) {slideIndex = slides.length}
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
    slides[slideIndex-1].style.display = "block";
}

const objectList = [
    {
      itemName: "HARDEN VOL. 5 FUTURENATURAL",
      itemPrice: "P7,000",
      itemColor: "Cloud White / Royal Blue / Vivid Red",
      itemImage: "images/HardenVol5FutureNatural.jpg"
    },
    {
      itemName: "ULTRABOOS DNA X MARIMEKKO",
      itemColor: "Core Black / Cloud White / Core Black",
      itemPrice: "P9,500",
      itemImage: "images/UltraboostDnaXMarimekko.jpg"
    },
    {
      itemName: "ADIZERO ADIOS PRO 2.0",
      itemColor: "Cloud White / Carbon / Solar Red",
      itemPrice: "P11,000",
      itemImage: "images/AdizeroAdiosPro2.jpg"
    },
    {
      itemName: "YEEZY BOOST 350 V2",
      itemColor: "Mono Clay",
      itemPrice: "P13,000",
      itemImage: "images/YeezyBoost350V2.jpg"
    },
    {
      itemName: "DAME 7 EXTPLY: DAME D.O.L.L.A",
      itemColor: "Rose Tone / Icey Pink / Cloud White",
      itemPrice: "P6,000",
      itemImage: "images/Dame7ExtplyDameDolla.jpg"
    },
    {
      itemName: "FORUM 84 LOW",
      itemColor: "Cream White / Collegiate Green / Silver Metallic",
      itemPrice: "P5,000",
      itemImage: "images/Forum84Low.jpg"
    },
    {
      itemName: "ADVANTAGE THE SIMPSONS",
      itemColor: "Cloud White / Core Black",
      itemPrice: "P3,500",
      itemImage: "images/AdvantageTheSimpsons.jpg"
    },
    {
      itemName: "4D FUSIO",
      itemColor: "Bold Blue / Core Black / Light Flash Yellow",
      itemPrice: "P12,000",
      itemImage: "images/4dFusio.jpg"
    },
    {
      itemName: "STAN SMITH",
      itemColor: "Cloud White / Supplier Colour",
      itemPrice: "P4,800",
      itemImage: "images/StanSmith.jpg"
    },
    {
      itemName: "NMD_R1",
      itemColor: "Cloud White / Sonic Aqua",
      itemPrice: "P7,500",
      itemImage: "images/NmdR1.jpg"
    },
    {
      itemName: "SUPERSTAR",
      itemColor: "Cloud White / Gold Metallic",
      itemPrice: "P4,800",
      itemImage: "images/Superstar.jpg"
    },
    {
      itemName: "ADIZERO PRIME X",
      itemColor: "Cloud White / Carbon / Solar Red",
      itemPrice: "P16,000",
      itemImage: "images/AdizeroPrimeX.jpg"
    }
];

let productListContainer = document.getElementById("productList");

function displayProducts(objectList) {
  let out = "";
  for (let i = 0; i < objectList.length; i++) {
      out += "<div class=\"box zone\"><img src=" + objectList[i].itemImage 
              + " width=\"250\" height=\"250\"><br><p class=\"itemName\">" + objectList[i].itemName 
              + "</p><p class=\"itemDet\">" + objectList[i].itemColor + "<br>" 
              + objectList[i].itemPrice +"</p><button class=\"addItem\" id=" + i + " onclick=\"addToCart(this.id)\">Add to Cart</button></div>";
  }
  productListContainer.innerHTML = out;
}

displayProducts(objectList);

// ADDING ITEMS TO CART
let modalContainer = document.getElementById("modalContent");
let selectedItems = [];

function addToCart (item) {
  let selectedItem = "";
  // for (let i = 0; i < selectedItems.length; i++) {
  //   if (objectList[item].itemName === selectedItems[i].itemName
  //       && objectList[item].itemColor === selectedItems[i].itemColor
  //       && objectList[item].itemPrice === selectedItems[i].itemPrice
  //       && objectList[item].itemImage === selectedItems[i].itemImage) {
  //     selectedItems.itemQuantity() += 1;
  //   }
  // }
  selectedItems.push({itemName: objectList[item].itemName,
                      itemColor: objectList[item].itemColor,
                      itemPrice: objectList[item].itemPrice,
                      itemImage: objectList[item].itemImage,
                      itemQuantity: 1});
  for (let i = 0; i < selectedItems.length; i++) {
  selectedItem += "<div class=\"modalItems zone\"><img src=" + selectedItems[i].itemImage 
              + " width=\"200\" height=\"200\"><br><p class=\"itemName\">" + selectedItems[i].itemName 
              + "</p><p class=\"itemDet\">" + selectedItems[i].itemColor + "<br>" 
              + selectedItems[i].itemPrice + "<br>Quantity: " + selectedItems[i].itemQuantity +"</div>";
  }
  modalContainer.innerHTML = selectedItem;
  alert("Successfully added your item!");
}

// DISPLAYING MODAL
let modal = document.getElementById("myModal");
let btn = document.getElementById("myCart");
let span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// $(window).resize(function(){
//   If($(window).width()<500){
//    $('.myMen').removeClass('myMen');
//   }
//  });