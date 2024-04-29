import { Component, Input, OnInit } from '@angular/core';
import {IonCardHeader, IonCard, IonCardSubtitle, IonCardTitle, IonCardContent} from '@ionic/angular/standalone';
import { CryptoApiService } from 'src/app/services/crypto-api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'xereca',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  standalone: true,
  imports: [IonCardHeader, IonCard, IonCardSubtitle, IonCardTitle, IonCardContent, CommonModule],
})




export class CardComponent  implements OnInit {

  coinData: any;

  constructor(private cryptoApiService: CryptoApiService) {
  }

  ngOnInit() {
    this.loadCoinData('bitcoin')
  }

  async loadCoinData(coinId: string){
    try {
      this.coinData = await this.cryptoApiService.getCoinData(coinId);
      console.log('Coin data:', this.coinData)
    } catch (error) {
      console.error('Error loading coin data:', error)
    }
  }

}
