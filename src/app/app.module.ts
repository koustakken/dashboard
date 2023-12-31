import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CategoriesComponent } from './views/categories/categories.component';
import { TasksComponent } from './views/tasks/tasks.component';
import { EditTaskDialogComponent } from './dialog/edit-task-dialog/edit-task-dialog.component';
import { EditCategoryDialogComponent } from './dialog/edit-category-dialog/edit-category-dialog.component';
import { ConfirmDialogComponent } from './dialog/confirm-dialog/confirm-dialog.component';

import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';

import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatNativeDateModule, MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { TaskDatePipe } from './pipe/task-date.pipe';
import { MatCheckboxModule } from '@angular/material/checkbox';

// local
import { registerLocaleData } from '@angular/common';
import localeRu from '@angular/common/locales/ru';
registerLocaleData(localeRu);

@NgModule({
	declarations: [
		AppComponent,
		CategoriesComponent,
		TasksComponent,
		EditTaskDialogComponent,
		ConfirmDialogComponent,
		TaskDatePipe,
		EditCategoryDialogComponent
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
		MatIconModule,
		MatOptionModule,
		MatSelectModule,
		MatDatepickerModule,
		MatNativeDateModule,
		MatCheckboxModule
	],
	providers: [],
	entryComponents: [
		EditTaskDialogComponent,
		ConfirmDialogComponent,
		EditCategoryDialogComponent
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
