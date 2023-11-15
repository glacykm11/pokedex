import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackgroundColorPipe } from './background-color/background-color.pipe';
import { HexToRgbPipe } from './hex-to-rgb/hex-to-rgb.pipe';
import { ConvertStatsToUpperCasePipe } from './convert-stats-to-upper-case/convert-stats-to-upper-case.pipe';
import { PadStartPipe } from './pad-start/pad-start.pipe';

@NgModule({
  imports: [CommonModule],
  declarations: [
    BackgroundColorPipe,
    HexToRgbPipe,
    ConvertStatsToUpperCasePipe,
    PadStartPipe,
  ],
  exports: [
    BackgroundColorPipe,
    HexToRgbPipe,
    ConvertStatsToUpperCasePipe,
    PadStartPipe,
  ],
})
export class PipesModule {}
