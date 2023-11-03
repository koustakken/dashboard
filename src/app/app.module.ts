import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CategoriesComponent } from './views/categories/categories.component';
import { TasksComponent } from './views/tasks/tasks.component';
import { EditTaskDialogComponent } from './dialog/edit-task-dialog/edit-task-dialog.component';

import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';

import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
	declarations: [
		AppComponent,
		CategoriesComponent,
		TasksComponent,
		EditTaskDialogComponent
	],
	imports: [
		BrowserModule,
		MatTableModule,
		MatSortModule,
		MatPaginatorModule,
		BrowserAnimationsModule,
		MatDialogModule,
		MatFormFieldModule,
		FormsModule,
		MatInputModule,
		MatButtonModule,
		MatIconModule
	],
	providers: [],
	entryComponents: [
		EditTaskDialogComponent
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
