import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products } from '../products';
import { CartService } from '../cart.service';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product:any;
  constructor(private route:ActivatedRoute,private cartService:CartService) { }

  ngOnInit(): void {
    // this.route.paramMap.subscribe(params=>{
    //   this.product = products[+params.get('productId')]
    // })
    const routeParams = this.route.snapshot.paramMap;
  const productIdFromRoute = Number(routeParams.get('productId'));

  // Find the product that correspond with the id provided in route.
  this.product = products.find(product => product.id === productIdFromRoute);
  }

  addtocart(product:any){
    this.cartService.addToCart(product);
    }

}
