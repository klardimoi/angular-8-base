import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ListCoursesComponent } from './list-courses/list-courses.component';
import { NavComponent } from './nav/nav.component';
import { SideComponent } from './side/side.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { TableComponent } from './table/table.component';
import { LayoutComponent } from './layout/layout.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    ListCoursesComponent,
    NavComponent,
    SideComponent,
    JumbotronComponent,
    TableComponent,
    LayoutComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
