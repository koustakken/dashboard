import { Observable } from 'rxjs';
import { Category } from 'src/app/model/Category';
import { Priority } from 'src/app/model/Priority';
import { Task } from 'src/app/model/Task';
import { CommonDAO } from './CommonDAO';
// специфичные методы для работы с задачами
export interface TaskDAO extends CommonDAO<Task> {
	// поиск задач по параметрам
	// если какой-то параметр равен null - он не будет учитываться при поиске
	search(
		category: Category,
		searchText: string,
		status: boolean,
		priority: Priority
	): Observable<Task[]>;
	// кол-во завершенных задач в заданной категории (если category null, то для все категорий)
	getCompletedCountInCategory(category: Category): Observable<number>;
	// кол-во незавершенных задач в заданной категории (если category null, то для все категорий)
	getUncompletedCountInCategory(category: Category): Observable<number>;
	// кол-во всех задач в заданной категории (если category null, то для все категорий)
	getTotalCountInCategory(category: Category): Observable<number>;
	// кол-во всех задач в общем
	getTotalCount(): Observable<number>;
}