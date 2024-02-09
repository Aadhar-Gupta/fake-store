let homeApi = "https://fakestoreapi.com/products";
var categoryKey = "https://fakestoreapi.com/products/category/"

async function getapi(key) {
  debugger

  try {
    const ApiData = await fetch(`${key}`);
    var response = await ApiData.json();
    // throw response;
  } catch (error) {
    alert(error)

  }

  const productstemp = document.getElementById("products-template").innerHTML;
  const productscompile = Handlebars.compile(productstemp);
  const compileddata = productscompile({ data: response });
  const container = document.getElementById("container");
  load()
  container.innerHTML = compileddata;

  $(".product-category").on("click", function () {
    debugger
    getapi(categoryKey + this.innerText);
  });

  $(".product-title").on("click", function () {
    debugger
    let productid = this.parentElement.parentElement.id;
    location.href = `product.html?id=${productid}`
  })
  $(".product-img").on("click", function () {
    debugger
    let productid = this.parentElement.id;
    location.href = `product.html?id=${productid}`
  })
}


window.onload = function () {

  load();


  const urlParams = new URLSearchParams(window.location.search);
  const objectID = urlParams.get('category');
  if (objectID === "home" || objectID === null) {
    getapi(homeApi);
  } else {
    getapi(categoryKey + objectID);
  }
  $(".logo").on("click", function () {
    location.href = `index.html`
  })


  $(".category").on("click", function () {
    console.log("calll =")
    getapi(categoryKey + this.value);
    debugger
    let status = document.getElementById("status");
    status.innerText = this.value
  });

  $("#home").on("click", function () {
    getapi(homeApi);
    let status = document.getElementById("status");
    status.innerText = this.value
  });




}



function  load () {
  debugger
      const container = document.getElementById('container');
      if (container.childElementCount === 0) {
        debugger
        const create = document.createElement("div");
        create.setAttribute("class", "loader");
        create.setAttribute("id", "loading-animation");
        create.innerHTML = `
      <div class="bar1"></div>
      <div class="bar2"></div>
      <div class="bar3"></div>
      <div class="bar4"></div>
      <div class="bar5"></div>
      <div class="bar6"></div>
      <div class="bar7"></div>
      <div class="bar8"></div>
      <div class="bar9"></div>
      <div class="bar10"></div>
      <div class="bar11"></div>
      `
        container.appendChild(create);
      } else {
        console.log("handlebars working")
      }
    }





    