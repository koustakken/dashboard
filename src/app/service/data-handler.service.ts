import { Injectable } from '@angular/core';
import { TestData } from '../data/TestData';
import { Category } from '../model/Category';
import { Task } from '../model/Task';

@Injectable({
	providedIn: 'root'
})
export class DataHandlerService {

	constructor() { }

	getCategories(): Category[] {
		return TestData.categories;
	}

	getTasks(): Task[] {
		return TestData.tasks;
	}

	getTaskByCategory(category: Category): Task[] {
		const tasks = TestData.tasks.filter(task => task.category === category);
		console.log("@selected category tasks", tasks);
		return tasks;
	}
}
