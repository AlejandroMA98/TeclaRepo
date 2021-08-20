class car{

    constructor(product_name,price_product, code_promo, descuento){
        this.product_name = { };
        this.price_product = 0;
        this.code_promo = false;
        this.descuento = 0;
    }

    message(mensaje){
        console.log(mensaje);
    }

    Add_Product(product_name){
        for (let i = 0; i < this.product_name.length; i++) {
            this.product_name[i] == product_name;
            this.message("Estos son los productos"+this.product_name[i]);
        }
      
    }

    promocion(code_promo){
        if(code_promo == "SINPROMO"){
            this.message("ES VALIDO");
            this.code_promo = true;
            this.descuento = this.price_product * 0.10;
        }else{
            this.message("El codigo no es valido");
        }
    }

    discount(){
        this.price_product = this.price_product -this.descuento;
        this.message("El descuento fue aplicado, ahora pagara: "+this.price_product);
    }

}



let P = prompt("Ingresa el producto");

let producto = new car(P);

console.log(producto.Add_Product(P));