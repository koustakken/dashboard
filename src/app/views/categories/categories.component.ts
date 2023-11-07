import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
	selectCategory = new EventEmitter<Category>();

	@Input()
	selectedCategory!: Category | null;

	constructor() { }

	ngOnInit(): void {
		//this.dataHandler.getAllCategories().subscribe(categories => this.categories = categories);
		console.log('@categories ', this.categories);
	}

	showTasksByCategory(category: Category) {
		if (this.selectedCategory === category) return;
		this.selectedCategory = category;
		//this.dataHandler.fillTaskByCategory(category);
		this.selectCategory.emit(this.selectedCategory);
	}
}
