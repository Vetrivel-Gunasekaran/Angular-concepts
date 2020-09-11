import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { RestrictUserGuard } from './restrict-user.guard';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { DirectiveComponent } from './directive/directive.component';
import { TestComponent } from './test/test.component';
import { PipesComponent } from './pipes/pipes.component';
import { ParentComponent } from './parent/parent.component';
import { LifeCycleComponent } from './life-cycle/life-cycle.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';


const routes: Routes = [
  { path: '' , pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent},
  { path: 'login', component: LoginComponent},
  { path: 'profile', component: ProfileComponent,
   canActivate: [RestrictUserGuard]},
  { path: 'data', component: DataBindingComponent},
  { path: 'directive', component: DirectiveComponent},
  { path: 'test', component: TestComponent},
  { path: 'pipes', component: PipesComponent},
  { path: 'parent', component: ParentComponent},
  { path: 'lifecycle', component: LifeCycleComponent},
  { path: 'templatedrivenform', component: TemplateDrivenFormComponent},
  { path: 'reactiveform', component: ReactiveFormsComponent},
  { path: '**', component: PageNotFoundComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
