import { Component } from '@angular/core';
import { CustomLayoutBoxComponent } from './adstudio/components/custom-layout-box/custom-layout-box.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CustomLayoutBoxComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  title = 'criativo-teste';
}
