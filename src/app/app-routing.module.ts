import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { TasklistComponent } from './tasklist/tasklist.component';
import { TasknewComponent } from './tasknew/tasknew.component';
import { TaskmylistComponent } from './taskmylist/taskmylist.component';
import { UserdetailComponent } from './userdetail/userdetail.component';
import { UseraccountComponent } from './useraccount/useraccount.component';
import { TaskdetailComponent } from './taskdetail/taskdetail.component';
import { TaskcategoryComponent } from './taskcategory/taskcategory.component';
import { MembercategoryComponent } from './membercategory/membercategory.component';
import { MemberlistComponent } from './memberlist/memberlist.component';
import { BindcardComponent } from './bindcard/bindcard.component';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'userdetail', component: UserdetailComponent },
  { path: 'useraccount', component: UseraccountComponent },
  { path: 'tasklist/:category', component: TasklistComponent },
  { path: 'tasknew', component: TasknewComponent },
  { path: 'taskmylist', component: TaskmylistComponent },
  { path: 'taskdetail', component: TaskdetailComponent },
  { path: 'taskcategory', component: TaskcategoryComponent },
  { path: 'membercategory', component: MembercategoryComponent },
  { path: 'memberlist', component: MemberlistComponent },
  { path: 'bindcard', component: BindcardComponent },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
