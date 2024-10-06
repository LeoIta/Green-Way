import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  constructor(private router: Router) {}

  redirectMail(el: any) {
    (el as HTMLAnchorElement).href =
      'mailto:ania.lutomierska@gmail.com?subject=Zielonki z Doradztwem';
  }
  redirectFacebook(el: any) {
    (el as HTMLAnchorElement).href =
      'https://www.facebook.com/groups/1716949495382076';
  }
  redirectPhone(el: any) {
    (el as HTMLAnchorElement).href = 'tel:+48660366416';
  }
  resetHref(el: any) {
    (el as HTMLAnchorElement).removeAttribute('href');
  }
  redirectToContact() {
    this.router.navigate(['contact']);
  }
}
