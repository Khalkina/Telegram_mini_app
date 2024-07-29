import { Component, OnDestroy, OnInit } from '@angular/core';
import { IProduct, ProductsService } from '../../services/products.service';
import { TelegramService } from '../../services/telegram.service';
import { ActivatedRoute, Router } from '@angular/router';
//зададим базовый шаблон
@Component({
  selector: 'app-product',
  standalone: true,
  template: `
    <div class="centered">
      <h2 class="mb">{{ product.title }}</h2>
      <br />
      <p>{{ product.text }}</p>
      <p>{{ product.time }}</p>
      <a [href]="product.link" target="_blank">Посмотреть курс</a>
    </div>
  `,
})

//имплементируемся от двух интерфейсов OnInit, OnDestroy
export class ProductComponent implements OnInit, OnDestroy {
  product: IProduct;

  //добавляем сервисы
  constructor(
    private products: ProductsService,
    private telegram: TelegramService,
    //получим то, что прописано в id
    private route: ActivatedRoute,
    //получим навигацию
    private router: Router
  ) {
    // получаем id из адресной строки
    const id = this.route.snapshot.paramMap.get('id');
    // получаем конкретный продукт из сервиса
    this.product = this.products.getById(id);
    this.goBack = this.goBack.bind(this);
  }

  goBack() {
    this.router.navigate([""]);
  }

  ngOnInit(): void {
    this.telegram.BackButton.show();
    // добавляем функционал для перехода назад в телеграм
    this.telegram.BackButton.onClick(this.goBack);
  }

  ngOnDestroy(): void {
    this.telegram.BackButton.offClick(this.goBack);
  }
}

