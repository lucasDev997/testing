import { Component, Input, OnInit } from '@angular/core';
import {IonCardHeader, IonCard, IonCardSubtitle, IonCardTitle, IonCardContent} from '@ionic/angular/standalone';

@Component({
  selector: 'xereca',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  standalone: true,
  imports: [IonCardHeader, IonCard, IonCardSubtitle, IonCardTitle, IonCardContent],
})
export class CardComponent  implements OnInit {
  @Input() name: string;
  @Input() symbol: string;
  @Input() price: string;

  constructor() {
    this.name = '';
    this.symbol = '';
    this.price = ''

  }

  ngOnInit() {}

}
