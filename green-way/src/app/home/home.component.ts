import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { Card } from '../card/card.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  cards: Card[] = [
    new Card(
      'BIO JĘCZMIEŃ Green Ways',
      '../../assets/images/bio-jeczmien-proszek.webp',
      'jeczmien proszek'
    ),
    new Card(
      'BIO JĘCZMIEŃ Green Ways w tabletkach',
      '../../assets/images/bio-jeczmien-tabletki.webp',
      'jeczmien tabletki'
    ),
    new Card(
      'BIO CHLORELLA Green Ways',
      '../../assets/images/bio-chlorella-tabletki.webp',
      'chlorella tabletki'
    ),
    new Card(
      'BIO CHLORELLA Green Ways w proszku',
      '../../assets/images/bio-chlorella-proszek.webp',
      'chlorella proszek'
    ),
  ];
}
