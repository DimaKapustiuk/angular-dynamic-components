import { Component } from '@angular/core';

@Component({
  selector: 'app-dynamic',
  template: `
   <div><img src='https://images.pexels.com/photos/7294069/pexels-photo-7294069.jpeg?auto=compress&cs=tinysrgb&h=750&w=350' alt='image'></div>
  `,
  styles: [
    `
  :host {
    text-align: center;
  }
`,
  ],
})
export class DynamicComponent {
}
