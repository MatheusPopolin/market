const products = [
  {
    title: "Uva Crimson",
    price: 8.99,
    category: "Frutas",
    image: undefined,
    imageDescription: "",
  },
  {
    title: "Banana",
    price: 5.69,
    category: "Frutas",
    image: "./img/products/product_2.svg",
    imageDescription: "",
  },
  {
    title: "Mamão",
    price: 4.99,
    category: "Frutas",
    image: "./img/products/product_3.svg",
    imageDescription: "",
  },
  {
    title: "Maçã",
    price: 9.20,
    category: "Frutas",
    image: "./img/products/product_4.svg",
    imageDescription: "",
  },
  {
    title: "Refrigerante",
    price: 8.99,
    category: "Bebidas",
    image: undefined,
    imageDescription: "",
  },
  {
    title: "Vinho",
    price: 8.99,
    category: "Bebidas",
    image: "./img/products/product_6.svg",
    imageDescription: "",
  },
  {
    title: "Água Tônica",
    price: 8.99,
    category: "Bebidas",
    image: undefined,
    imageDescription: "",
  },
  {
    title: "Água de coco",
    price: 8.99,
    category: "Bebidas",
    image: "./img/products/product_8.svg",
    imageDescription: "",
  },

  {
    title: "Sabonete",
    price: 8.99,
    category: "Higiene",
    image: "./img/products/product_9.svg",
    imageDescription: "",
  },

  {
    title: "Detergente",
    price: 8.99,
    category: "Higiene",
    image: "./img/products/product_10.svg",
    imageDescription: "",
  },

  {
    title: "Limpa superfícies",
    price: 8.99,
    category: "Higiene",
    image: "./img/products/product_11.svg",
    imageDescription: "",
  },

  {
    title: "Lustra Móveis",
    price: 8.99,
    category: "Higiene",
    image: undefined,
    imageDescription: "",
  },
];

let listFrutas  = [];
let listBebidas = [];
let listHigiene = [];

function separateItens(lista){
    for(let i=0; i<lista.length; i++){
        if(lista[i].category=="Frutas"){
            listFrutas.push(lista[i]);
        } else if(lista[i].category=="Bebidas"){
            listBebidas.push(lista[i]);
        } else if(lista[i].category=="Higiene"){
            listHigiene.push(lista[i]);
        }
    }
}

separateItens(products);

function listaItens(lista){
  let tagSection = document.createElement("section");
  tagSection.classList.add("products-section");
  tagSection.innerHTML = `<h1>${lista[0].category}</h1>`;
  
  let tagDiv  = document.createElement("div");
  tagDiv.classList.add("products-content")

  let tagUl   = document.createElement("ul");

  for(let i=0; i<lista.length; i++){
    let tagLi = document.createElement("li");
    tagLi.classList.add("product");
    tagLi.innerHTML = 
      `<img src="./img/products/no-img.svg"
        alt="Imagem de ${lista[i].title}"
        class="product-img"
      />
      <div class="product-div">
        <h1 class="product-title">${lista[i].title}</h1>
        <h5 class="product-category">${lista[i].category}</h5>
        <strong class="product-price">R$ ${lista[i].price}</strong>
      </div>`;
    if(lista[i].image){
      tagLi.querySelector("img").src = lista[i].image
    }
    tagUl.appendChild(tagLi);   
  }
  tagDiv.appendChild(tagUl);
  tagSection.appendChild(tagDiv);

  tagMain = document.querySelector("main")
  tagMain.appendChild(tagSection);
}

listaItens(listFrutas);
listaItens(listBebidas);
listaItens(listHigiene);

