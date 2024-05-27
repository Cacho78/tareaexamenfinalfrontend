import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RowComponent, ColComponent, TextColorDirective, CardComponent, CardHeaderComponent, CardBodyComponent, FormDirective, FormLabelDirective, FormControlDirective, ButtonDirective } from '@coreui/angular';
import { DocsExampleComponent } from '@docs-components/public-api';

@Component({
  selector: 'app-placas',
  standalone: true,
  imports: [RowComponent, ColComponent, ButtonDirective, TextColorDirective, CardComponent, CardHeaderComponent, CardBodyComponent, DocsExampleComponent, ReactiveFormsModule, FormsModule, FormDirective, FormLabelDirective, FormControlDirective, ButtonDirective, NgStyle],

  templateUrl: './placas.component.html',
  styleUrl: './placas.component.scss'
})
export class PlacasComponent {

}
