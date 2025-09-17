import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  standalone: false,
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})
export class MainComponent {
  activeCard: 'debit' | 'credit' = 'debit';

  toggleCard(card: 'debit' | 'credit') {
    this.activeCard = card;
  }
}
