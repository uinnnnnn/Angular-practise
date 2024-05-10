import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Card } from '../card';

@Component({
  selector: 'app-poker',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './poker.component.html',
  styleUrl: './poker.component.css'
})
export class PokerComponent implements OnInit {
  suits: string[] = ['黑桃', '愛心', '菱形', '梅花'];
  ranks: string[] = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
  decks: Card[][] = [];

  //初始值
  ngOnInit(): void {
    this.initializeDecks();
  }

  initializeDecks(): void {
    for (let i = 0; i < 4; i++) {
      const deck: Card[] = [];
      this.decks.push(deck);
    }
  }

  dealCards(): void {
    this.decks = [];
    const cards: Card[] = [];
    for (let i = 0; i < 4; i++) {
      const deck: Card[] = [];
      while (deck.length < 5) {
        const suit = this.suits[Math.floor(Math.random() * this.suits.length)];
        const rank = this.ranks[Math.floor(Math.random() * this.ranks.length)];
        const card = new Card(suit, rank);
        if (!cards.some(c => c.suit === suit && c.rank === rank)) {
          deck.push(card);
          cards.push(card);
        }
      }
      this.decks.push(deck);
    }
  }
}