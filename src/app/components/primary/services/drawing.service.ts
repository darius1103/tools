import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DrawingService {
  private SPRITE_SIZE = 32;

  constructor() { }

  public draw(ctx: CanvasRenderingContext2D, canvasSize: number) {
    let pixelSize = canvasSize / this.SPRITE_SIZE;
    for (let i = 0; i < 100; i++) {
      ctx.beginPath();
      ctx.moveTo(0, i * pixelSize);
      ctx.lineTo(canvasSize, i * pixelSize);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(i * pixelSize, 0);
      ctx.lineTo(i * pixelSize, canvasSize);
      ctx.stroke();
    }
  }
}
