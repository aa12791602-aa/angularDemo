import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { UserComponent } from "./component/user/user.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ValidFormComponent } from "./component/valid-form/valid-form.component";
import { PipesDemoComponent } from "./component/pipes-demo/pipes-demo.component";
import { SexPipe } from "./pipe/SexPipe";
import { DecimalLinkPipe } from "./pipe/DecimalLinkPipe";
import { PureDataTransform } from "./pipe/PurePipeTransform";
import { DirectiveDemoComponent } from "./component/directive-demo/directive-demo.component";
import { ColorDirective } from "./directive/ColorDirective";

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    ValidFormComponent,
    PipesDemoComponent,
    SexPipe,
    DecimalLinkPipe,
    PureDataTransform,
    DirectiveDemoComponent,
    ColorDirective
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
