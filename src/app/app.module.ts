import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { TasklistComponent } from './tasklist/tasklist.component';
import { UserdetailComponent } from './userdetail/userdetail.component';
import { UseraccountComponent } from './useraccount/useraccount.component';
import { TasknewComponent } from './tasknew/tasknew.component';
import { TaskmylistComponent } from './taskmylist/taskmylist.component';
import { TaskdetailComponent } from './taskdetail/taskdetail.component';
import { TaskcategoryComponent } from './taskcategory/taskcategory.component';
import { MembercategoryComponent } from './membercategory/membercategory.component';
import { MemberlistComponent } from './memberlist/memberlist.component';
import { BindcardComponent } from './bindcard/bindcard.component';

@NgModule({
  declarations: [AppComponent, SigninComponent, SignupComponent, TasklistComponent, UserdetailComponent, UseraccountComponent, TasknewComponent, TaskmylistComponent, TaskdetailComponent, TaskcategoryComponent, MembercategoryComponent, MemberlistComponent, BindcardComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, FormsModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
