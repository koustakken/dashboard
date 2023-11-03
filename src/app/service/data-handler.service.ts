import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoryDAOArray } from '../data/dao/impl/CategoryDAOArray';
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

	constructor() {

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

	// getTask(id: number): Observable<Task> {
	// 	return this.taskDaoArray.get(task);
	// }
}
