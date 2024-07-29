import { Component, inject } from '@angular/core';
import { TelegramService } from '../../services/telegram.service';
import { ProductsService } from '../../services/products.service';
import { ProductListComponent } from '../../components/product-list/product-list.component';
//в imports прописываем регистрацию проекта
@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [ProductListComponent], // регистрация компонента
  //прописываем компонент
  template: `
    <app-product-list
      title="Разработчик"
      subtitle="Изучите курс разработчика, чтобы стать востребованным специалистом."
      [products]="products.byGroup['developer']"
    />
    <app-product-list
      title="Аналитик"
      subtitle="Хотите стать успешным аналитиком? Тогда кликай скорее!"
      [products]="products.byGroup['analist']"
    />
    <app-product-list
      title="Тестировщик"
      subtitle="Нравится искать баги в программах? Не теряйся, и успей занять своё место на обучении!"
      [products]="products.byGroup['tester']"
    />

  `,
})

//добавляем сервис
export class ShopComponent {
  telegram = inject(TelegramService);
  products = inject(ProductsService);

  // прячем кнопку назад внутри телеграм
  constructor() {
    this.telegram.BackButton.show();
  }
}
