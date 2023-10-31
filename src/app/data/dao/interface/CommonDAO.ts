// CRUD
import { Observable } from 'rxjs';
// все методы возвращают Observable - для асинхронности и работы в реактивном стиле
export interface CommonDAO<T> { // <T> дженерик для обобщеных типов
	// получить все значения
	getAll(): Observable<T[]>;
	// получить одно значение по id
	get(id: number): Observable<T>;
	// обновить значение
	update(obj: T): Observable<T>;
	// удалить значение
	delete(id: number): Observable<T>;
	// добавить значение
	add(obj: T): Observable<T>;
}
