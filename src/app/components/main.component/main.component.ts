import {Component, inject} from '@angular/core';
import {dataService} from '../../services/data.service';
import { DataShareService } from '../../services/data-share.service';

@Component({
  selector: 'app-main',
  standalone: false,
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})
export class mainComponent {
  shared = inject(DataShareService);
  username : string = "";
  constructor() {
    this.shared.message$.subscribe(msg => {
      this.username = msg;
    });
  }

  activeCard: 'debit' | 'credit' = 'debit';
  toggleCard(card: 'debit' | 'credit') {
    this.activeCard = card;
  }
}
