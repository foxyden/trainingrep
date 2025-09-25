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
  searchTerm: string = "";
  constructor() {
    this.shared.message$.subscribe(msg => {
      this.username = msg;
    });
  }

  activeCard: 'debit' | 'credit' = 'debit';

  debitTransactions = [
    { category: 'Groceries', description: 'Grocery Store', amount: -45.20, user: 'Alice', date: '2025-09-14' },
    { category: 'Salary', description: 'Monthly Salary', amount: 1500.00, user: 'Company Ltd', date: '2025-09-01' },
    { category: 'Fuel', description: 'Gas Station', amount: -60.00, user: 'Shell', date: '2025-09-10' },
  ];

  creditTransactions = [
    { category: 'Shopping', description: 'Amazon Purchase', amount: -120.50, user: 'Amazon', date: '2025-09-12' },
    { category: 'Entertainment', description: 'Netflix Subscription', amount: -15.99, user: 'Netflix', date: '2025-09-12' },
    { category: 'Travel', description: 'Flight Ticket', amount: -320.00, user: 'Delta Airlines', date: '2025-09-12' },
  ];
  get currentTransactions() {
    return this.activeCard === 'debit'
      ? this.debitTransactions
      : this.creditTransactions;
  }

  toggleCard(card: 'debit' | 'credit') {
    this.activeCard = card;
  }

  filteredTransactions() {
    const transactions =
      this.activeCard === 'debit'
        ? this.debitTransactions
        : this.creditTransactions;

    if (!this.searchTerm.trim()) return transactions;

    const term = this.searchTerm.toLowerCase();
    return transactions.filter(
      t =>
        t.category.toLowerCase().includes(term) ||
        t.description.toLowerCase().includes(term) ||
        t.user.toLowerCase().includes(term)
    );
    }
}
