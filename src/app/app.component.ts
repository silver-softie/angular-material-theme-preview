import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { FormsModule } from '@angular/forms';
import { MatGridList, MatGridTile } from '@angular/material/grid-list';

@Component({
  selector: 'app-root',
  imports: [CommonModule, MatButtonToggleModule, MatGridList, MatGridTile, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-material-theme';
  theme = 'light';


}
