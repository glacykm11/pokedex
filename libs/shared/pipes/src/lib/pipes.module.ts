import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackgroundColorPipe } from './background-color/background-color.pipe';
import { HexToRgbPipe } from './hex-to-rgb/hex-to-rgb.pipe';

@NgModule({
  imports: [CommonModule],
  declarations: [BackgroundColorPipe, HexToRgbPipe],
  exports: [BackgroundColorPipe, HexToRgbPipe],
})
export class PipesModule {}
