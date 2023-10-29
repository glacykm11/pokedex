import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackgroundColorPipe } from './background-color/background-color.pipe';

@NgModule({
  imports: [CommonModule],
  declarations: [BackgroundColorPipe],
})
export class PipesModule {}
