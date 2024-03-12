import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  products: any;
  public totalItem: number = 0;

  constructor(private service: CartService) { }

  ngOnInit(): void {
    this.getAllProducts();
    this.service.getCartProducts()
      .subscribe(res => {
        this.totalItem = res.length;
      })
  }

  getAllProducts() {
    this.service.getAllProducts().subscribe(data => {
      this.products = data;
    })
  }

  addtocart(item: any) {
    this.service.addtoCart(item);
  }
}
