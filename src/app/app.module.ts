import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolButtonComponent } from './tool-button/tool-button.component';

@NgModule({
	declarations: [
		AppComponent,
		ToolButtonComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		NgbModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
}
