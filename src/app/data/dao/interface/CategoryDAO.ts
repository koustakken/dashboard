import { Observable } from 'rxjs';
import { Category } from 'src/app/model/Category';
import { CommonDAO } from './CommonDAO';
// новый интефейс дополняющий основной
export interface CategoryDAO extends CommonDAO<Category> {
	// добавлять стоит специфичные методы
	// метод поиска категории 
	search(title: string): Observable<Category[]>;
}