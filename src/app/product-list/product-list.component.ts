import { Component, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products = products;
  userName = "jbond";

  constructor(private el: ElementRef,private router: Router) { 
    this.el.nativeElement.style.backgroundColor = 'red';
  }
   name = "Sample Project";
   itemImageUrl = "../assets/mobile1.webp"
   imageHeight:number=100;  
  imageWidth:number=100;  
  imagePath:string="../assets/mobile1.webp"; 
 
  ngOnInit(): void {
  }

  onSave(){
    alert("alert message")
  }

  form(){
    this.router.navigate(['form'])
  }
}
