import { Component, ViewChild } from '@angular/core';
import { DrawingService } from './services/drawing.service';

@Component({
  selector: 'app-primary',
  standalone: true,
  imports: [],
  templateUrl: './primary.component.html',
  styleUrl: './primary.component.scss'
})
export class PrimaryComponent {
  @ViewChild('canvas') canvas: any = null;
  ctx: CanvasRenderingContext2D;
  SIZE = 512;

  constructor(private drawing: DrawingService) {
  }

  ngAfterViewInit() {
    if (!this.canvas) {
      console.log('ERROR');
      return;
    }
    this.ctx = this.canvas.nativeElement.getContext("2d");
    this.canvas.nativeElement.width = this.SIZE;
    this.canvas.nativeElement.height = this.SIZE;
    window.requestAnimationFrame(() => this.draw());
  }

  private draw() {
    this.drawing.draw(this.ctx, this.SIZE);
    window.requestAnimationFrame(() => this.draw());
  }
}
