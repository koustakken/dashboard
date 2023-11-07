import { Observable, of } from 'rxjs';
import { Category } from 'src/app/model/Category';
import { Priority } from 'src/app/model/Priority';
import { Task } from 'src/app/model/Task';
import { TestData } from '../../TestData';
import { TaskDAO } from '../interface/TaskDAO';

export class TaskDAOArray implements TaskDAO {
	search(
		category: Category,
		searchText: string,
		status: boolean,
		priority: Priority
	): Observable<Task[]> {
		return of(this.searchTasks(category, searchText, status, priority))
	}

	searchTasks(category: Category, searchText: string, status: boolean, priority: Priority) {
		let allTasks = TestData.tasks;
		if (category != null) {
			allTasks = allTasks.filter(task => task.category === category);
		}
		return allTasks;
	}
	getCompletedCountInCategory(category: Category): Observable<number> {
		throw new Error('Method not implemented.');
	}
	getUncompletedCountInCategory(category: Category): Observable<number> {
		throw new Error('Method not implemented.');
	}
	getTotalCountInCategory(category: Category): Observable<number> {
		throw new Error('Method not implemented.');
	}
	getTotalCount(): Observable<number> {
		throw new Error('Method not implemented.');
	}
	getAll(): Observable<Task[]> {
		return of(TestData.tasks);
	}
	get(id: number): Observable<Task | undefined> {
		return of(TestData.tasks.find(task => task.id === id));
	}
	update(task: Task): Observable<Task> {
		const taskTmp = TestData.tasks.find(t => t.id === task.id);
		if (taskTmp) TestData.tasks.splice(TestData.tasks.indexOf(taskTmp), 1, task);
		return of(task);
	}
	delete(id: number): Observable<Task> {
		const taskTmp = TestData.tasks.find(t => t.id === id);
		if (taskTmp) TestData.tasks.splice(TestData.tasks.indexOf(taskTmp), 1);
		// @ts-ignore
		return of(taskTmp);
	}
	add(obj: Task): Observable<Task> {
		throw new Error('Method not implemented.');
	}

}