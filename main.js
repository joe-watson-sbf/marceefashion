let APIurl="http://localhost:8888/marcee/api/product";



let nameElt = document.getElementById("productName");
let priceElt = document.getElementById("productPrice");
let descElt = document.getElementById("productDescription");
let imgElt=document.getElementById("img");


let Product = {
    id:0,
    name:String,
    brand:String,
    price:Number,
    quantity:Number,
    status:Boolean,
    description:String,
}



ajaxGet(APIurl+"/all", function (reponse) {

    var products = JSON.parse(reponse);
    products.forEach(function (product) {
        
        imgElt.src=product.urlImage;
        nameElt.textContent=product.name;
        priceElt.textContent = "$"+product.price;
        descElt.textContent=product.description;
        

        console.log(product)


    });
});


