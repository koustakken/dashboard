import { Component, OnInit } from '@angular/core';
import { Category } from './model/Category';
import { Task } from './model/Task';
import { DataHandlerService } from './service/data-handler.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	title = 'dashboard';
	tasks!: Task[];
	categories!: Category[];

	selectedCategory: Category | null = null;
	selectedTask: Task | null = null;

	constructor(private dataHandler: DataHandlerService) { }

	ngOnInit(): void {
		this.dataHandler.getAllTasks().subscribe(tasks => this.tasks = tasks);
		this.dataHandler.getAllCategories().subscribe(categories => this.categories = categories);
		this.onSelectCategory(null);
	}

	onSelectCategory(category: Category | null) {
		this.selectedCategory = category;
		this.dataHandler.searchTasks(
			// @ts-ignore
			this.selectedCategory,
			null,
			null,
			null
		).subscribe((tasks) => {
			this.tasks = tasks;
		})
	}

	onSelectTask(task: Task) {
		console.log(task);
	}
}
