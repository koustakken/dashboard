import { Observable, of } from 'rxjs';
import { Category } from 'src/app/model/Category';
import { TestData } from '../../TestData';
import { CategoryDAO } from '../interface/CategoryDAO';

export class CategoryDAOArray implements CategoryDAO {
	search(title: string): Observable<Category[]> {
		throw new Error('Method not implemented.');
	}
	getAll(): Observable<Category[]> {
		return of(TestData.categories);
	}
	get(id: number): Observable<Category> {
		throw new Error('Method not implemented.');
	}
	update(category: Category): Observable<Category> {
		const tmpCategory = TestData.categories.find(t => t.id === category.id);
		//@ts-ignore
		TestData.categories.splice(TestData.categories.indexOf(tmpCategory), 1, category);
		//@ts-ignore
		return of(tmpCategory);
	}
	delete(id: number): Observable<Category> {
		TestData.tasks.forEach(task => {
			if (task.category && task.category.id === id) {
				//@ts-ignore
				task.category = null;
			}
		});

		const tmpCategory = TestData.categories.find(t => t.id === id);
		//@ts-ignore
		TestData.categories.splice(TestData.categories.indexOf(tmpCategory), 1);
		//@ts-ignore
		return of(tmpCategory);
	}
	add(obj: Category): Observable<Category> {
		throw new Error('Method not implemented.');
	}

} 