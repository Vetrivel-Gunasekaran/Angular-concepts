import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SampleComponent } from './sample/sample.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { DirectiveComponent } from './directive/directive.component';
import { TestComponent } from './test/test.component';
import { NumberOnlyDirective } from './number-only.directive';
import { EmojiDirective } from './emoji.directive';
import { PipesComponent } from './pipes/pipes.component';
import { MaskPipe } from './mask.pipe';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { LifeCycleComponent } from './life-cycle/life-cycle.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { TestPipe } from './test.pipe';
import { NgbModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ErrorModalComponent } from './error-modal/error-modal.component';
import { InfoComponent } from './info/info.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SampleComponent,
    LoginComponent,
    ProfileComponent,
    HomeComponent,
    PageNotFoundComponent,
    DataBindingComponent,
    DirectiveComponent,
    TestComponent,
    NumberOnlyDirective,
    EmojiDirective,
    PipesComponent,
    MaskPipe,
    ParentComponent,
    ChildComponent,
    LifeCycleComponent,
    TemplateDrivenFormComponent,
    TestPipe,
    ErrorModalComponent,
    InfoComponent,
    ReactiveFormsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [NgbActiveModal],
  bootstrap: [AppComponent],
  entryComponents: [ErrorModalComponent]
})
export class AppModule { }
