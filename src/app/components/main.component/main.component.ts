import {Component, inject} from '@angular/core';
import {dataService} from '../../services/data.service';

@Component({
  selector: 'app-main',
  standalone: false,
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})
export class mainComponent {
  message: string | null = null;
  dataService = inject(dataService);
  activeCard: 'debit' | 'credit' = 'debit';

  toggleCard(card: 'debit' | 'credit') {
    this.activeCard = card;
  }
}
