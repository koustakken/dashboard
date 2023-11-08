import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditCategoryDialogComponent } from 'src/app/dialog/edit-category-dialog/edit-category-dialog.component';
import { Category } from 'src/app/model/Category';

@Component({
	selector: 'app-categories',
	templateUrl: './categories.component.html',
	styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
	@Input()
	categories!: Category[];

	@Output()
	selectCategory = new EventEmitter<Category | null>();

	@Input()
	selectedCategory!: Category | null;

	indexMouseMove!: number | null;

	@Output()
	deleteCategory = new EventEmitter<Category>();

	@Output()
	updateCategory = new EventEmitter<Category>();

	constructor(private dialog: MatDialog) { }

	ngOnInit(): void {
		//this.dataHandler.getAllCategories().subscribe(categories => this.categories = categories);
		console.log('@categories ', this.categories);
	}

	showTasksByCategory(category: Category | null) {
		if (category) {
			if (this.selectedCategory === category) return;
			this.selectedCategory = category;
			//this.dataHandler.fillTaskByCategory(category);
			this.selectCategory.emit(this.selectedCategory);
		} else {
			this.selectCategory.emit(null);
		}
	}

	showEditIcon(index: number | null): void {
		this.indexMouseMove = index;
	}

	openEditDialog(category: Category): void {
		const dialogRef = this.dialog.open(EditCategoryDialogComponent, {
			data: [category.title, 'Редактирование категории'],
			width: '400px'
		});

		dialogRef.afterClosed().subscribe(result => {
			if (result == 'delete') {
				this.deleteCategory.emit(category);
			}
			if (typeof (result) === 'string') {
				category.title = result as string;
				this.updateCategory.emit(category);
				return
			}
		})
	}

}
