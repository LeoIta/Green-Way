import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { Card } from '../card/card.model';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {
  cards: Card[] = [
    new Card(
      'BIO JĘCZMIEŃ Green Ways',
      '../../assets/images/bio-jeczmien-proszek.webp',
      'jeczmien proszek',
      50
    ),
    new Card(
      'BIO JĘCZMIEŃ Green Ways w tabletkach',
      '../../assets/images/bio-jeczmien-tabletki.webp',
      'jeczmien tabletki',
      100
    ),
    new Card(
      'BIO CHLORELLA Green Ways',
      '../../assets/images/bio-chlorella-tabletki.webp',
      'chlorella tabletki',
      200
    ),
    new Card(
      'BIO CHLORELLA Green Ways w proszku',
      '../../assets/images/bio-chlorella-proszek.webp',
      'chlorella proszek',
      200
    ),
  ];
}
