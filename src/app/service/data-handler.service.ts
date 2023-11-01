import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { TaskDAOArray } from '../data/dao/impl/TaskDAOArray';
import { TestData } from '../data/TestData';
import { Category } from '../model/Category';
import { Task } from '../model/Task';

@Injectable({
	providedIn: 'root'
})
export class DataHandlerService {

	private taskDaoArray = new TaskDAOArray();

	constructor() {

	}

	getAllTasks(): Observable<Task[]> {
		return this.taskDaoArray.getAll();
	}
}
