import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TestData } from '../data/TestData';
import { Category } from '../model/Category';
import { Task } from '../model/Task';

@Injectable({
	providedIn: 'root'
})
export class DataHandlerService {

	tasksSubject = new BehaviorSubject<Task[]>(TestData.tasks);
	categoriesSubject = new BehaviorSubject<Category[]>(TestData.categories);

	constructor() {
		this.fillTasks();
	}

	fillTasks() {
		this.tasksSubject.next(TestData.tasks);
	}

	fillTaskByCategory(category: Category) {
		const tasks = TestData.tasks.filter(task => task.category === category);
		console.log("@selected category tasks", tasks);
		this.tasksSubject.next(tasks);
	}
}
