import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-gcf',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './gcf.component.html',
  styleUrl: './gcf.component.css'
})
export class GcfComponent {
  num1: number = 0;
  num2: number = 0;
  result: number = 0;

  calculateGCF(): void {
    let a = Math.abs(this.num1);
    let b = Math.abs(this.num2);
    while (b) {
      let temp = b;
      b = a % b;
      a = temp;
    }
    this.result = a;
  }
}
