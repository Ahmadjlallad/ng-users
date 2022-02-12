import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { UsersComponent } from './component/users/users.component';
import { HeaderComponent } from './component/header/header.component';
import { UserComponent } from './component/users/user/user.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserWidgetComponent } from './component/users/user/user-widget/user-widget.component';

@NgModule({
  declarations: [AppComponent, UsersComponent, HeaderComponent, UserComponent, UserWidgetComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
