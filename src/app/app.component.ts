import { Component } from '@angular/core';

import { CartaoComponent } from './cartao/cartao.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CartaoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent { }
