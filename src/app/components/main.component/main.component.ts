import {Component, inject} from '@angular/core';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-main',
  standalone: false,
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})
export class MainComponent {
  message: string | null = null;
  dataService = inject(DataService);
  activeCard: 'debit' | 'credit' = 'debit';

  toggleCard(card: 'debit' | 'credit') {
    this.activeCard = card;
  }
}
