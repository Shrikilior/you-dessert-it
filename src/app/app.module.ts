import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

// Routing
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router'

// App components
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { DessertListComponent } from './dessert-list/dessert-list.component';
import { DessertChartComponent } from './dessert-chart/dessert-chart.component';
import { AddDessertDialogComponent } from './add-dessert-dialog/add-dessert-dialog.component';
import { ListItemComponent } from './list-item/list-item.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { DessertButtonComponent } from './dessert-button/dessert-button.component';
import { AddDessertBarComponent } from './add-dessert-bar/add-dessert-bar.component';

// Animations
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Material
import { MatIconModule } from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent,
    DessertListComponent,
    DessertChartComponent,
    MainComponent,
    ListItemComponent,
    ToolbarComponent,
    AddDessertDialogComponent,
    DessertButtonComponent,
    AddDessertBarComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatToolbarModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    RouterModule.forRoot([
      {
        path: '',
        component: MainComponent
      },
      {
        path: '**', // "wildcard" catches any url in the browser
        component: MainComponent
      },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
