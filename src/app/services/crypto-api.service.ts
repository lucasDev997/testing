import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class CryptoApiService {

  constructor() { }

  async getCoinData(coinId: string){
    try {
      const response = await axios.get(`https://api.coingecko.com/api/v3/coins/${coinId}`)
      return response
    } catch (error) {
      console.error('Error fetching coin data:', error)
      throw error;
    }
  }
}
