import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-transaction-card',
  standalone: true,
  templateUrl: './transaction-card.component.html',
  styleUrls: ['./transaction-card.component.css']
})
export class TransactionCardComponent {
  @Input() category!: string;
  @Input() title!: string;
  @Input() amount!: number;
  @Input() date!: string;
  @Input() username!: string;

  get isPositive(): boolean {
    return this.amount > 0;
  }

  get displayAmount(): string {
    return `${this.amount > 0 ? '+' : ''}${this.amount.toFixed(2)}`;
  }

  get transactionType(): string {
    return this.isPositive ? 'income' : 'expenses';
  }
}
