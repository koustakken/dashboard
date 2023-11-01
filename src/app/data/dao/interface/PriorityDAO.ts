import { Priority } from 'src/app/model/Priority';
import { CommonDAO } from './CommonDAO';
// специфичные методы для работы с приоритетами не входящие в обычный CRUD
export interface PriorityDAO extends CommonDAO<Priority> {
	// здесь будут специфичные методы для работы с категориями
}