import { Injectable } from '@angular/core';

const domain = 'https://gb.ru';
// создаем типы
export enum ProductType {
  Developer = 'developer',
  Analist = 'analist',
  Tester = 'tester',
}
//создаем интрефейс IProduct
export interface IProduct {
  id: string;
  text: string;
  title: string;
  link: string;
  time: string;
  type: ProductType;
}

function addDomainToLinkAndImage(product: IProduct) {
  return {
    ...product,
    link: domain + product.link,
  };
}

//создаем массивы с продуктами
export const products: IProduct[] = [
  {
    id: '1',
    title: 'Разработчик',
    link: '/geek_university/developer-gb',
    text: 'Наш главный курс, чтобы получить профессию и начать карьеру разработчика',
    time: 'Срок обучения: 12 месяцев',
    type: ProductType.Developer,
  },
  {
    id: '2',
    title: 'Python-разработчик',
    link: '/geek_university/developer/programmer/python-gb',
    text: 'Изучите язык программирования Python и актувльные фреймыорки. Сможете разрабатывать сайты, приложения, чат-боты и даже нейросети',
    time: 'Срок обучения: 10 месяцев',
    type: ProductType.Developer,
  },
  {
    id: '3',
    title: 'Аналитик',
    link: '/geek_university/developer/analyst-freestart',
    text: 'Наш главный курс, чтобы получить профессию и начать карьеру аналитика',
    time: 'Срок обучения: 12 месяцев',
    type: ProductType.Analist,
  },
  {
    id: '4',
    title: 'Тестировщик',
    link: '/geek_university/developer/qa-engineer-gb',
    text: 'Наш главный курс, чтобы получить профессию и начать карьеру тестировщика',
    time: 'Срок обучения: 12 месяцев',
    type: ProductType.Tester,
  },
  {
    id: '5',
    title: 'Data Scientist',
    link: '/geek_university/developer/analyst/data-science-gb',
    text: 'Научитесь работать с данными и автоматизировать процессы с помощью нейросетей. Начните строить карьеру в data science без знаний кода и математики',
    time: 'Срок обучения: 9 месяцев',
    type: ProductType.Analist,
  },
  {
    id: '6',
    title: 'Frontend-разработчик',
    link: '/geek_university/developer/programmer/frontend-gb',
    text: 'Научитесь верстать сайты: работать с HTML/CSS, JavaScript. Изучите один из фреймворков: React.js или Vue.js, научитесь писать тесты и оптимизировать страницы.',
    time: 'Срок обучения: 9 месяцев',
    type: ProductType.Developer,
  },
];

@Injectable({
  providedIn: 'root',
})
//прописываем конструктор для сервиса
export class ProductsService {
  readonly products: IProduct[] = products.map(addDomainToLinkAndImage);

  // получаем нужный товар по id
  getById(id: string) {
    return this.products.find((p) => p.id === id);
  }

  // создадим метод для классификации продуктов
  get byGroup() {
    return this.products.reduce((group, prod) => {
      // будем группировать по типу
      if (!group[prod.type]) {
        //на выходе получится объект с ключами из типа, а содержимое будет массив
        group[prod.type] = [];
      }
      group[prod.type].push(prod);
      return group;
    }, {});
  }
}

