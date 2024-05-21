import { Component } from '@angular/core';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  template: `
    <div class="card">
      <div class="card-header">
        <h2 class="card-title">Angular State Management</h2>
      </div>

      <div class="card-body">
        <ul>
          <li>Reactive Design</li>
          <li>Signals</li>
          <li>State Management</li>
          <li>Signal Store</li>
          <li>Redux</li>
        </ul>
      </div>
    </div>
  `,
  styles: [`
    code {
      color: blue;
    }
  `]
})
export class HomeComponent {
}
