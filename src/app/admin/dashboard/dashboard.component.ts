import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';

@Component({
  selector: 'app-dashboard',
 imports :[CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  
    chartData = [
      { label: 'Label 1', value: 80, color: '#5EB344' },
      { label: 'Label 2', value: 50, color: '#FCB72A' },
      { label: 'Label 3', value: 100, color: '#F8821A' },
      { label: 'Label 4', value: 15, color: '#E0393E' },
      { label: 'Label 5', value: 45, color: '#963D97' },
      { label: 'Label 6', value: 90, color: '#069CDB' },
    ];
  }
  


