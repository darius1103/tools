import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PrimaryComponent } from './components/primary/primary.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    PrimaryComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'tools';
}
