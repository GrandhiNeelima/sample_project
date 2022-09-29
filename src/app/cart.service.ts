import { Injectable } from "@angular/core";
import { products } from "./products";

@Injectable({
    providedIn: 'root'
})

export class CartService{
    //items :products[] = []
    items: any = [];
    constructor(){}


    addToCart(product:any ){
      this.items.push(product)
    }

    getItems(){
        return this.items;
    }
}