import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoryDAOArray } from '../data/dao/impl/CategoryDAOArray';
import { PriorityDAOArray } from '../data/dao/impl/PriorityDAOArray';
import { TaskDAOArray } from '../data/dao/impl/TaskDAOArray';
import { Category } from '../model/Category';
import { Priority } from '../model/Priority';
import { Task } from '../model/Task';

@Injectable({
	providedIn: 'root'
})
export class DataHandlerService {

	private taskDaoArray = new TaskDAOArray();
	private categoryDaoArray = new CategoryDAOArray();
	private priorityDaoArray = new PriorityDAOArray();

	constructor() {

	}
	// все приоритеты
	getAllPriority(): Observable<Priority[]> {
		return this.priorityDaoArray.getAll();
	}
	// все категории
	getAllCategories(): Observable<Category[]> {
		return this.categoryDaoArray.getAll();
	}
	// все таски
	getAllTasks(): Observable<Task[]> {
		return this.taskDaoArray.getAll();
	}

	// выбранная категория
	searchTasks(category: Category, searchText: string, status: boolean, priority: Priority): Observable<Task[]> {
		return this.taskDaoArray.search(category, searchText, status, priority);
	}

	updateTask(task: Task): Observable<Task> {
		return this.taskDaoArray.update(task);
	}

	deleteTask(id: number): Observable<Task> {
		return this.taskDaoArray.delete(id);
	}

	// getTask(id: number): Observable<Task> {
	// 	return this.taskDaoArray.get(task);
	// }
}
