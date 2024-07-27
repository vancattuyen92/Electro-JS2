$(function () {
  let nav = $("nav");
  let body = $("body");
  let navWidth = $("nav").width();
  $(".bar3").click(function (e) { 
      e.preventDefault();
      e.stopPropagation();
      nav.css("transform","translateX(0)");
      body.css("padding-left",navWidth);
      body.css("filter","grayscale(100%)");
  });

  $("nav").click(function (e) { 
    e.stopPropagation();
});

  $("body").click(function (e) { 
      nav.css("transform",`translateX(-${navWidth}px)`);
      body.css("padding-left",0);
      body.css("filter","grayscale(0)");
  });
});


let dropBtn = document.querySelector('.dropbtn');
let dropContent = document.querySelector('.dropdown-content');
dropBtn.addEventListener('click',()=>{
   if(dropContent.style.display===""){
      dropContent.style.display="block";
   } else {
      dropContent.style.display="";
   }
})


$(function () {
  let select=$("select#products");
  let selectWidth=select.width();
  select.change(function (e) {
    e.preventDefault();
    // đếm số ký tự của option rồi đưa vào đó tính width cho phù hợp
    const selectedVal=select.find("option:selected").text();
    console.log(selectedVal.length);
    if (selectedVal.length*7 < selectWidth) {
      $(this).width(selectWidth);
    } else {
      $(this).width(selectedVal.length*7);
    }
  })
});
/*
$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
      items:3,
      margin:10,
      loop:true
    });
  });
  */
 
  // Owl Carousel Banner
  $(document).ready(function(){
    $('.owl-first').owlCarousel( {
      items:1,
      loop: true,
      dots: true,
      nav: false,
      autoplay: true,

    });
  });

  ///////////////

 function renderProducts(list) {
  list.forEach(function(item){
    $(`<ul class="col-md-4">
    <li class="item">
    <p>${item.type}</p>
    <h5>${item.title}</h5>
    <img src="/dist/img/electro/${item.img}"/>
    <div class="price-price flex j-between">
      <div class="price">${item.price}<span>${item.discount}</span></div>
      <button class="btn">${item.icon}</button>
    </div>
    <hr>
    <div class="wishlist flex j-between">
      <p>♡  Wishlist</p>
      <p>⇄  Compare</p>
    </div>
  </li>
  </ul>`).appendTo(".list");
  });
}

function emptyProducts(){
  $(".list").empty();
}
document.getElementById("TextBox0").style.fontWeight = "700";
document.getElementById("TextBox").style.fontWeight = "500";
document.getElementById("TextBox1").style.fontWeight = "500";
document.getElementById("TextBox0").style.borderBottom = "2px solid rgb(255, 217, 0)";
document.getElementById("TextBox").style.borderBottom = "hidden";
document.getElementById("TextBox1").style.borderBottom = "hidden";
$(function () {
  const products=[
    {id:1,
      class:"one", 
      type:"Audio Speakers",
      title:"Wireless Audio System Multiroom 360",
      img:"WirelessSound-300x300.jpg",
      price:"$2,299.00",
      discount:"",
      icon:`<i class="fas fa-long-arrow-alt-right"></i>`},
    {id:2,class:"two",type:"Laptops, Ultrabooks",title:"Tablet Red EliteBook Revolve 810 G2",img:"Ultrabooks-300x300.jpg",price:"$2,100.00",discount:"$2,299.00",icon:`<i class="fas fa-long-arrow-alt-right"></i>`},
    {id:3,class:"three",type:"Headphones",title:"White Solo 2</br>Wireless",img:"1-300x300.jpg",price:"$248.99",discount:"",icon:`<i class="fas fa-cart-arrow-down cart"></i>`},
    {id:4,class:"four",type:"Smartphones",title:"Smartphone 6S 32GB</br>LTE",img:"GoldPhone-300x300.jpg",price:"$1,100.00",discount:"$1,215.00",icon:`<i class="fas fa-cart-arrow-down cart"></i>`},
    {id:5,class:"five",type:"Cameras",title:"Purple NX Mini F1 aparat SMART NX",img:"Photocamera-300x300.jpg",price:"$559.00",discount:"",icon:`<i class="fas fa-cart-arrow-down cart"></i>`},
    {id:6,class:"six",type:"Printers",title:"Full Color Laserjet Pro</br>M452dn",img:"Printer-300x300.jpg",price:"$1,050.00",discount:"",icon:`<i class="fas fa-cart-arrow-down cart"></i>`},
    {id:7,class:"seven",type:"Game Consoles, Gaming",title:"GameConsole Destiny Special Edition",img:"GameStation-300x300.jpg",price:"$140.00",discount:"$150.00",icon:`<i class="fas fa-long-arrow-alt-right"></i>`},
    {id:8,class:"eight",type:"Cameras",title:"Camera C430W 4k</br>Waterproof",img:"hd-camera-300x300.jpg",price:"$590.00",discount:"",icon:`<i class="fas fa-cart-arrow-down cart"></i>`},
  ];
  
  renderProducts(products);
}); 

$(document).ready(function () {
  $(".featured").click(function (e) { 
    document.getElementById("TextBox0").style.fontWeight = "700";
    document.getElementById("TextBox").style.fontWeight = "500";
    document.getElementById("TextBox1").style.fontWeight = "500";
    document.getElementById("TextBox0").style.borderBottom = "2px solid rgb(255, 217, 0)";
    document.getElementById("TextBox").style.borderBottom = "hidden";
    document.getElementById("TextBox1").style.borderBottom = "hidden";
    e.preventDefault();
    emptyProducts();
    $(function () {
      const products=[
        {id:1,
          class:"one", 
          type:"Audio Speakers",
          title:"Wireless Audio System Multiroom 360",
          img:"WirelessSound-300x300.jpg",
          price:"$2,299.00",
          discount:"",
          icon:`<i class="fas fa-long-arrow-alt-right"></i>`},
        {id:2,class:"two",type:"Laptops, Ultrabooks",title:"Tablet Red EliteBook Revolve 810 G2",img:"Ultrabooks-300x300.jpg",price:"$2,100.00",discount:"$2,299.00",icon:`<i class="fas fa-long-arrow-alt-right"></i>`},
        {id:3,class:"three",type:"Headphones",title:"White Solo 2</br>Wireless",img:"1-300x300.jpg",price:"$248.99",discount:"",icon:`<i class="fas fa-long-arrow-alt-right"></i>`},
        {id:4,class:"four",type:"Smartphones",title:"Smartphone 6S 32GB</br>LTE",img:"GoldPhone-300x300.jpg",price:"$1,100.00",discount:"$1,215.00",icon:`<i class="fas fa-long-arrow-alt-right"></i>`},
        {id:5,class:"five",type:"Cameras",title:"Purple NX Mini F1 aparat SMART NX",img:"Photocamera-300x300.jpg",price:"$559.00",discount:"",icon:`<i class="fas fa-long-arrow-alt-right"></i>`},
        {id:6,class:"six",type:"Printers",title:"Full Color Laserjet Pro</br>M452dn",img:"Printer-300x300.jpg",price:"$1,050.00",discount:"",icon:`<i class="fas fa-long-arrow-alt-right"></i>`},
        {id:7,class:"seven",type:"Game Consoles, Gaming",title:"GameConsole Destiny Special Edition",img:"GameStation-300x300.jpg",price:"$140.00",discount:"$150.00",icon:`<i class="fas fa-long-arrow-alt-right"></i>`},
        {id:8,class:"eight",type:"Cameras",title:"Camera C430W 4k</br>Waterproof",img:"hd-camera-300x300.jpg",price:"$590.00",discount:"",icon:`<i class="fas fa-long-arrow-alt-right"></i>`},
      ];
      
      renderProducts(products);
    });
  });  
});

$(document).ready(function () {
  $(".sale").click(function (e) { 
    document.getElementById("TextBox").style.fontWeight = "700";
    document.getElementById("TextBox0").style.fontWeight = "500";
    document.getElementById("TextBox1").style.fontWeight = "500";
    document.getElementById("TextBox").style.borderBottom = "2px solid rgb(255, 217, 0)";
    document.getElementById("TextBox0").style.borderBottom = "hidden";
    document.getElementById("TextBox1").style.borderBottom = "hidden";
    e.preventDefault();
    emptyProducts();
    $(function () {
      const products=[
        {id:1,
          class:"one", 
          type:"Headphones",
          title:"Ultra Wireless S50 Headphones S50 with",
          img:"1-300x300.jpg",
          price:"$2,299.00",
          discount:"",
          icon:`<i class="fas fa-long-arrow-alt-right"></i>`},
        {id:2,class:"two",type:"Computer Case, Servers",title:"Aerocool EN52377 Dead Silence Gaming Cube Case",img:"DekstopPC-1-300x300.jpg",price:"$2,100.00",discount:"$2,299.00",icon:`<i class="fas fa-long-arrow-alt-right"></i>`},
        {id:3,class:"three",type:"Smartphones",title:"Smartphones 6S 32GB</br>LTE",img:"GoldPhone-300x300.jpg",price:"$248.99",discount:"",icon:`<i class="fas fa-long-arrow-alt-right"></i>`},
        {id:4,class:"four",type:"Power Banks",title:"Powerbank 1130 mAh</br>Blue",img:"MobileBank-300x300.jpg",price:"$1,100.00",discount:"$1,215.00",icon:`<i class="fas fa-long-arrow-alt-right"></i>`},
        {id:5,class:"five",type:"Smartwatches",title:"Smartwarch 2.0 LTE Wifi Waterproof",img:"Smartwatch2-300x300.jpg",price:"$559.00",discount:"",icon:`<i class="fas fa-long-arrow-alt-right"></i>`},
        {id:6,class:"six",type:"Game Consoles",title:"Game Console Controller + USB 3.0 Cable",img:"GamePad-300x300.jpg",price:"$1,050.00",discount:"",icon:`<i class="fas fa-long-arrow-alt-right"></i>`},
        {id:7,class:"seven",type:"Laptops, Ultrabooks",title:"Tablet Red EliteBook Revolve 810 G2",img:"Ultrabooks-300x300.jpg",price:"$140.00",discount:"$150.00",icon:`<i class="fas fa-long-arrow-alt-right"></i>`},
        {id:8,class:"eight",type:"Game Consoles, Gaming",title:"Game Console Destiny Special Edition",img:"GameStation-300x300.jpg",price:"$590.00",discount:"",icon:`<i class="fas fa-long-arrow-alt-right"></i>`},
      ];
      
      renderProducts(products);
    }); 
  });  
});



$(document).ready(function () {
  $(".rated").click(function (e) { 
    document.getElementById("TextBox1").style.fontWeight = "700";
    document.getElementById("TextBox").style.fontWeight = "500";
    document.getElementById("TextBox0").style.fontWeight = "500";
    document.getElementById("TextBox1").style.borderBottom = "2px solid rgb(255, 217, 0)";
    document.getElementById("TextBox0").style.borderBottom = "hidden";
    document.getElementById("TextBox").style.borderBottom = "hidden";
    e.preventDefault();
    emptyProducts();
    $(function () {
      const products=[
        {id:5,class:"five",type:"Cameras",title:"Purple NX Mini F1 aparat SMART NX",img:"Photocamera-300x300.jpg",price:"$559.00",discount:"",icon:`<i class="fas fa-long-arrow-alt-right"></i>`},
        {id:6,class:"six",type:"Printers",title:"Full Color Laserjet Pro</br>M452dn",img:"Printer-300x300.jpg",price:"$1,050.00",discount:"",icon:`<i class="fas fa-long-arrow-alt-right"></i>`},
        {id:7,class:"seven",type:"Game Consoles, Gaming",title:"GameConsole Destiny Special Edition",img:"GameStation-300x300.jpg",price:"$140.00",discount:"$150.00",icon:`<i class="fas fa-long-arrow-alt-right"></i>`},
        
        {id:1,
          class:"one", 
          type:"Audio Speakers",
          title:"Wireless Audio System Multiroom 360",
          img:"WirelessSound-300x300.jpg",
          price:"$2,299.00",
          discount:"",
          icon:`<i class="fas fa-long-arrow-alt-right"></i>`},
        {id:2,class:"two",type:"Laptops, Ultrabooks",title:"Tablet Red EliteBook Revolve 810 G2",img:"Ultrabooks-300x300.jpg",price:"$2,100.00",discount:"$2,299.00",icon:`<i class="fas fa-long-arrow-alt-right"></i>`},
        {id:3,class:"three",type:"Headphones",title:"White Solo 2</br>Wireless",img:"1-300x300.jpg",price:"$248.99",discount:"",icon:`<i class="fas fa-long-arrow-alt-right"></i>`},
        {id:4,class:"four",type:"Smartphones",title:"Smartphone 6S 32GB</br>LTE",img:"GoldPhone-300x300.jpg",price:"$1,100.00",discount:"$1,215.00",icon:`<i class="fas fa-long-arrow-alt-right"></i>`},
        {id:8,class:"eight",type:"Cameras",title:"Camera C430W 4k</br>Waterproof",img:"hd-camera-300x300.jpg",price:"$590.00",discount:"",icon:`<i class="fas fa-long-arrow-alt-right"></i>`},
      ];
      
      renderProducts(products);
    }); 
  });  
});


/////////////////////////////////////////

$(document).ready(function(){
  $('.owl-one').owlCarousel( {
    margin:80,
    items:5,
    nav:true,
    dots:false,
  });
});

/////////////////////////////////////////////////////
//Recently Added

$(function () {
  const products1=[
    {id:1,
      class:"one", 
      type:"Audio Speakers",
      title:"Wireless Audio System Multiroom 360",
      img:"WirelessSound-300x300.jpg",
      price:"$2,299.00",
      discount:"",
      icon:`<i class="fas fa-long-arrow-alt-right"></i>`},
    {id:2,class:"two",type:"Laptops, Ultrabooks",title:"Tablet Red EliteBook Revolve 810 G2",img:"Ultrabooks-300x300.jpg",price:"$2,100.00",discount:"$2,299.00",icon:`<i class="fas fa-long-arrow-alt-right"></i>`},
    {id:3,class:"three",type:"Headphones",title:"White Solo 2</br>Wireless",img:"1-300x300.jpg",price:"$248.99",discount:"",icon:`<i class="fas fa-cart-arrow-down cart"></i>`},
    {id:4,class:"four",type:"Smartphones",title:"Smartphone 6S 32GB</br>LTE",img:"GoldPhone-300x300.jpg",price:"$1,100.00",discount:"$1,215.00",icon:`<i class="fas fa-cart-arrow-down cart"></i>`},
    {id:5,class:"five",type:"Cameras",title:"Purple NX Mini F1 aparat SMART NX",img:"Photocamera-300x300.jpg",price:"$559.00",discount:"",icon:`<i class="fas fa-cart-arrow-down cart"></i>`},
    {id:6,class:"six",type:"Printers",title:"Full Color Laserjet Pro</br>M452dn",img:"Printer-300x300.jpg",price:"$1,050.00",discount:"",icon:`<i class="fas fa-cart-arrow-down cart"></i>`},
    {id:7,class:"seven",type:"Game Consoles, Gaming",title:"GameConsole Destiny Special Edition",img:"GameStation-300x300.jpg",price:"$140.00",discount:"$150.00",icon:`<i class="fas fa-long-arrow-alt-right"></i>`},
    {id:8,class:"eight",type:"Cameras",title:"Camera C430W 4k</br>Waterproof",img:"hd-camera-300x300.jpg",price:"$590.00",discount:"",icon:`<i class="fas fa-cart-arrow-down cart"></i>`},
    {id:9,class:"nine",type:"Laptops, Ultrabooks",title:"Tablet Red EliteBook Revolve 810 G2",img:"Ultrabooks-300x300.jpg",price:"$2,100.00",discount:"$2,299.00",icon:`<i class="fas fa-long-arrow-alt-right"></i>`},
    {id:10,class:"ten",type:"Headphones",title:"White Solo 2</br>Wireless",img:"1-300x300.jpg",price:"$248.99",discount:"",icon:`<i class="fas fa-cart-arrow-down cart"></i>`},
    {id:11,class:"eleven",type:"Smartphones",title:"Smartphone 6S 32GB</br>LTE",img:"GoldPhone-300x300.jpg",price:"$1,100.00",discount:"$1,215.00",icon:`<i class="fas fa-cart-arrow-down cart"></i>`},
    {id:12,class:"twelve",type:"Cameras",title:"Purple NX Mini F1 aparat SMART NX",img:"Photocamera-300x300.jpg",price:"$559.00",discount:"",icon:`<i class="fas fa-cart-arrow-down cart"></i>`},
    {id:13,class:"thirteen",type:"Printers",title:"Full Color Laserjet Pro</br>M452dn",img:"Printer-300x300.jpg",price:"$1,050.00",discount:"",icon:`<i class="fas fa-cart-arrow-down cart"></i>`},
    {id:14,class:"fourteen",type:"Game Consoles, Gaming",title:"GameConsole Destiny Special Edition",img:"GameStation-300x300.jpg",price:"$140.00",discount:"$150.00",icon:`<i class="fas fa-long-arrow-alt-right"></i>`},
    {id:15,class:"fifteen",type:"Cameras",title:"Camera C430W 4k</br>Waterproof",img:"hd-camera-300x300.jpg",price:"$590.00",discount:"",icon:`<i class="fas fa-cart-arrow-down cart"></i>`},
    {id:16,class:"sixteen",type:"Laptops, Ultrabooks",title:"Tablet Red EliteBook Revolve 810 G2",img:"Ultrabooks-300x300.jpg",price:"$2,100.00",discount:"$2,299.00",icon:`<i class="fas fa-long-arrow-alt-right"></i>`},
    {id:17,class:"seventeen",type:"Headphones",title:"White Solo 2</br>Wireless",img:"1-300x300.jpg",price:"$248.99",discount:"",icon:`<i class="fas fa-cart-arrow-down cart"></i>`},
    {id:18,class:"eighteen",type:"Smartphones",title:"Smartphone 6S 32GB</br>LTE",img:"GoldPhone-300x300.jpg",price:"$1,100.00",discount:"$1,215.00",icon:`<i class="fas fa-cart-arrow-down cart"></i>`},
    {id:19,class:"nineteen",type:"Cameras",title:"Purple NX Mini F1 aparat SMART NX",img:"Photocamera-300x300.jpg",price:"$559.00",discount:"",icon:`<i class="fas fa-cart-arrow-down cart"></i>`},
    
    
  ];
  renderProducts1(products1);
});

function renderProducts1(list1) {
  list1.forEach(function(item){
    $(`<ul class="col-md-4">
    <li class="items">
    <p>${item.type}</p>
    <h5>${item.title}</h5>
    <img src="/dist/img/electro/${item.img}"/>
    <div class="price-price flex j-between">
      <div class="price"><p>${item.price}</p><div class="discount">${item.discount}</div></div>
      <button class="btn">${item.icon}</button>
    </div>
    <hr>
    <div class="wishlist flex j-between">
      <p>♡  Wishlist</p>
      <p>⇄  Compare</p>
    </div>
  </li>
  </ul>`).appendTo(".list1");
  });
}

$(document).ready(function(){
  $('.owl-two').owlCarousel( {
    //margin:20,
    items:7,
    nav:false,
    dots:true,
  });
});

////// Content: Best Sellers 
$(function () {
  const products3=[
    {id:1,
      class:"one", 
      type:"Audio Speakers",
      title:"Wireless Audio System Multiroom 360",
      img:"WirelessSound-300x300.jpg",
      price:"$2,299.00",
      discount:"",
      icon:`<i class="fas fa-long-arrow-alt-right"></i>`},
    {id:2,class:"two",type:"Laptops, Ultrabooks",title:"Tablet Red EliteBook Revolve 810 G2",img:"Ultrabooks-300x300.jpg",price:"$2,100.00",discount:"$2,299.00",icon:`<i class="fas fa-long-arrow-alt-right"></i>`},
    {id:3,class:"three",type:"Headphones",title:"White Solo 2</br>Wireless",img:"1-300x300.jpg",price:"$248.99",discount:"",icon:`<i class="fas fa-cart-arrow-down cart"></i>`},
    {id:4,class:"four",type:"Smartphones",title:"Smartphone 6S 32GB</br>LTE",img:"GoldPhone-300x300.jpg",price:"$1,100.00",discount:"$1,215.00",icon:`<i class="fas fa-cart-arrow-down cart"></i>`},
    {id:5,class:"five",type:"Cameras",title:"Purple NX Mini F1 aparat SMART NX",img:"Photocamera-300x300.jpg",price:"$559.00",discount:"",icon:`<i class="fas fa-cart-arrow-down cart"></i>`},
    {id:6,class:"six",type:"Printers",title:"Full Color Laserjet Pro</br>M452dn",img:"Printer-300x300.jpg",price:"$1,050.00",discount:"",icon:`<i class="fas fa-cart-arrow-down cart"></i>`},
    {id:7,class:"seven",type:"Game Consoles, Gaming",title:"GameConsole Destiny Special Edition",img:"GameStation-300x300.jpg",price:"$140.00",discount:"$150.00",icon:`<i class="fas fa-long-arrow-alt-right"></i>`},
    {id:8,class:"eight",type:"Cameras",title:"Camera C430W 4k</br>Waterproof",img:"hd-camera-300x300.jpg",price:"$590.00",discount:"",icon:`<i class="fas fa-cart-arrow-down cart"></i>`},
    {id:9,class:"nine",type:"Laptops, Ultrabooks",title:"Tablet Red EliteBook Revolve 810 G2",img:"Ultrabooks-300x300.jpg",price:"$2,100.00",discount:"$2,299.00",icon:`<i class="fas fa-long-arrow-alt-right"></i>`},
    {id:10,class:"ten",type:"Headphones",title:"White Solo 2</br>Wireless",img:"1-300x300.jpg",price:"$248.99",discount:"",icon:`<i class="fas fa-cart-arrow-down cart"></i>`},
    {id:11,class:"eleven",type:"Smartphones",title:"Smartphone 6S 32GB</br>LTE",img:"GoldPhone-300x300.jpg",price:"$1,100.00",discount:"$1,215.00",icon:`<i class="fas fa-cart-arrow-down cart"></i>`},
    {id:12,class:"twelve",type:"Cameras",title:"Purple NX Mini F1 aparat SMART NX",img:"Photocamera-300x300.jpg",price:"$559.00",discount:"",icon:`<i class="fas fa-cart-arrow-down cart"></i>`},
    {id:13,class:"thirteen",type:"Printers",title:"Full Color Laserjet Pro</br>M452dn",img:"Printer-300x300.jpg",price:"$1,050.00",discount:"",icon:`<i class="fas fa-cart-arrow-down cart"></i>`},
    {id:14,class:"fourteen",type:"Game Consoles, Gaming",title:"GameConsole Destiny Special Edition",img:"GameStation-300x300.jpg",price:"$140.00",discount:"$150.00",icon:`<i class="fas fa-long-arrow-alt-right"></i>`},
    {id:15,class:"fifteen",type:"Cameras",title:"Camera C430W 4k</br>Waterproof",img:"hd-camera-300x300.jpg",price:"$590.00",discount:"",icon:`<i class="fas fa-cart-arrow-down cart"></i>`},
    {id:16,class:"sixteen",type:"Laptops, Ultrabooks",title:"Tablet Red EliteBook Revolve 810 G2",img:"Ultrabooks-300x300.jpg",price:"$2,100.00",discount:"$2,299.00",icon:`<i class="fas fa-long-arrow-alt-right"></i>`},
    {id:17,class:"seventeen",type:"Headphones",title:"White Solo 2</br>Wireless",img:"1-300x300.jpg",price:"$248.99",discount:"",icon:`<i class="fas fa-cart-arrow-down cart"></i>`},
    {id:18,class:"eighteen",type:"Smartphones",title:"Smartphone 6S 32GB</br>LTE",img:"GoldPhone-300x300.jpg",price:"$1,100.00",discount:"$1,215.00",icon:`<i class="fas fa-cart-arrow-down cart"></i>`},
    {id:19,class:"nineteen",type:"Cameras",title:"Purple NX Mini F1 aparat SMART NX",img:"Photocamera-300x300.jpg",price:"$559.00",discount:"",icon:`<i class="fas fa-cart-arrow-down cart"></i>`},
    
    
  ];
  renderProducts3(products3);
});

function renderProducts3(list3) {
  list3.forEach(function(item){
    $(`<div class="col-md-4 flex">
    <div class="item flex j-between">
    <img src="/dist/img/electro/${item.img}"/>
    <div class="right">
    <p>${item.type}</p>
    <h5>${item.title}</h5>
    <div class="price-price flex j-between">
      <div class="price">${item.price}<div class="discount">${item.discount}</div></div>
      <button class="btn">${item.icon}</button>
    </div>
    <hr>
    <div class="wishlist flex j-between">
      <p>♡  Wishlist</p>
      <p>⇄  Compare</p>
    </div>
    </div>
  </div>
  </div>`).appendTo(".list3");
  });
}

$(function() {
  $('.owl-four').owlCarousel({
    items:3,
    dots:true,
  });
});

//////////////////////////////////

function accessories3() {
  document.getElementById("accessories3").style.display = "block";
  document.getElementById("description3").style.display = "none";
  document.getElementById("specification").style.display = "none";
  document.getElementById("reviews").style.display = "none";
  document.getElementById("acc-title").style.fontWeight = "700";
  document.getElementById("des-title").style.fontWeight = "500";
  document.getElementById("spe-title").style.fontWeight = "500";
  document.getElementById("rev-title").style.fontWeight = "500";
  document.getElementById("acc-title").style.borderBottom = "2px solid rgb(255, 217, 0)";
  document.getElementById("des-title").style.borderBottom = "none";
  document.getElementById("spe-title").style.borderBottom = "none";
  document.getElementById("rev-title").style.borderBottom = "none";
}
function description3() {
  document.getElementById("description3").style.display = "block";
  document.getElementById("accessories3").style.display = "none";
  document.getElementById("specification").style.display = "none";
  document.getElementById("reviews").style.display = "none";
  document.getElementById("des-title").style.fontWeight = "700";
  document.getElementById("acc-title").style.fontWeight = "500";
  document.getElementById("spe-title").style.fontWeight = "500";
  document.getElementById("rev-title").style.fontWeight = "500";
  document.getElementById("des-title").style.borderBottom = "2px solid rgb(255, 217, 0)";
  document.getElementById("acc-title").style.borderBottom = "none";
  document.getElementById("spe-title").style.borderBottom = "none";
  document.getElementById("rev-title").style.borderBottom = "none";
}
function specification3() {
  document.getElementById("specification").style.display = "block";
  document.getElementById("description3").style.display = "none";
  document.getElementById("accessories3").style.display = "none";
  document.getElementById("reviews").style.display = "none";
  document.getElementById("spe-title").style.fontWeight = "700";
  document.getElementById("des-title").style.fontWeight = "500";
  document.getElementById("acc-title").style.fontWeight = "500";
  document.getElementById("rev-title").style.fontWeight = "500";
  document.getElementById("spe-title").style.borderBottom = "2px solid rgb(255, 217, 0)";
  document.getElementById("des-title").style.borderBottom = "none";
  document.getElementById("acc-title").style.borderBottom = "none";
  document.getElementById("rev-title").style.borderBottom = "none";
}
function reviews3() {
  document.getElementById("reviews").style.display = "block";
  document.getElementById("description3").style.display = "none";
  document.getElementById("specification").style.display = "none";
  document.getElementById("accessories3").style.display = "none";
  document.getElementById("rev-title").style.fontWeight = "700";
  document.getElementById("des-title").style.fontWeight = "500";
  document.getElementById("spe-title").style.fontWeight = "500";
  document.getElementById("acc-title").style.fontWeight = "500";
  document.getElementById("rev-title").style.borderBottom = "2px solid rgb(255, 217, 0)";
  document.getElementById("des-title").style.borderBottom = "none";
  document.getElementById("spe-title").style.borderBottom = "none";
  document.getElementById("acc-title").style.borderBottom = "none";
}

