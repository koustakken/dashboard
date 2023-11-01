import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CategoryDAOArray } from '../data/dao/impl/CategoryDAOArray';
import { TaskDAOArray } from '../data/dao/impl/TaskDAOArray';
import { TestData } from '../data/TestData';
import { Category } from '../model/Category';
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
}
