import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Task } from 'src/app/model/Task';
import { DataHandlerService } from 'src/app/service/data-handler.service';

@Component({
	selector: 'app-tasks',
	templateUrl: './tasks.component.html',
	styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit, AfterViewInit {
	public displayedColumns: string[] = ['color', 'id', 'title', 'date', 'priority', 'category'];
	public dataSource!: MatTableDataSource<Task>;

	//ссылки на компоненты таблицы
	@ViewChild(MatPaginator, { static: false }) paginator!: MatPaginator;
	@ViewChild(MatSort, { static: false }) sort!: MatSort;

	tasks!: Task[];

	constructor(private dataHandler: DataHandlerService) { }

	ngOnInit(): void {
		this.dataHandler.tasksSubject.subscribe(tasks => this.tasks = tasks);
		this.dataSource = new MatTableDataSource();
		this.refreshTable();
	}

	ngAfterViewInit(): void {
		this.addTableObjects();
	}

	toggleTaskCompleted(task: Task) {
		task.completed = !task.completed;
	}

	public getPriorityColor(task: Task) {
		if (task.priority && task.priority.color) {
			return task.priority.color;
		} return '#fff'
	}

	private refreshTable() {
		this.dataSource.data = this.tasks;
		this.addTableObjects();
		//@ts-ignore
		this.dataSource.sortingDataAccessor = (task, colName) => {
			switch (colName) {
				case 'priority': {
					return task.priority ? task.priority.id : null
				}
				case 'category': {
					return task.category ? task.category.title : null
				}
				case 'date': {
					return task.date ? task.date : null
				}
				case 'title': {
					return task.title
				}
			}
		}
	}

	private addTableObjects() {
		this.dataSource.sort = this.sort;
		this.dataSource.paginator = this.paginator;
	}
}
