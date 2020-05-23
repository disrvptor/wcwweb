import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ClientsComponent } from './clients/clients.component';

@NgModule({
	declarations: [
		AppComponent,
		ClientsComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		HttpClientModule,
		MatToolbarModule,
		MatMenuModule,
		MatIconModule,
		MatTableModule,
		MatProgressSpinnerModule,
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
