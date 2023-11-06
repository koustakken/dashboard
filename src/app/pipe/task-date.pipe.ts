import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'taskDate'
})
export class TaskDatePipe extends DatePipe implements PipeTransform {
	// @ts-ignore
	transform(date: Date | string, format: string = 'mediumDate'): string | null {

		if (date == null) {
			return 'Без даты';
		}

		date = new Date(date);
		const currentDay = new Date().getDate();

		if (date.getDate() === currentDay) {
			return 'Сегодня';
		}

		if (date.getDate() === currentDay - 1) {
			return 'Вчера';
		}

		if (date.getDate() === currentDay + 1) {
			return 'Завтра';
		}

		return new DatePipe('ru-RU').transform(date, format);
	}

}
