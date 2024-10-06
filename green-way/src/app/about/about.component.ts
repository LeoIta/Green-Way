import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent implements OnInit {
  imgSrc = '../../assets/images/bio-chlorella-proszek.webp';
  i = 1;
  images: string[] = [
    'bio-chlorella-proszek.webp',
    'bio-chlorella-tabletki.webp',
    'bio-jeczmien-proszek.webp',
    'bio-jeczmien-tabletki.webp',
  ];
  ngOnInit(): void {
    setInterval(() => {
      this.imgSrc = '../../assets/images/' + this.images[this.i];
      this.i++;
      if (this.i >= this.images.length) {
        this.i = 0;
      }
    }, 3000);
  }
}
