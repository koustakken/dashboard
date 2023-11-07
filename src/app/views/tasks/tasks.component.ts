import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ConfirmDialogComponent } from 'src/app/dialog/confirm-dialog/confirm-dialog.component';
import { EditTaskDialogComponent } from 'src/app/dialog/edit-task-dialog/edit-task-dialog.component';
import { Category } from 'src/app/model/Category';
import { Task } from 'src/app/model/Task';

@Component({
	selector: 'app-tasks',
	templateUrl: './tasks.component.html',
	styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit, AfterViewInit {
	public displayedColumns: string[] = ['color', 'id', 'title', 'date', 'priority', 'category', 'operations', 'select'];
	public dataSource!: MatTableDataSource<Task>;

	//ссылки на компоненты таблицы
	@ViewChild(MatPaginator, { static: false }) paginator!: MatPaginator;
	@ViewChild(MatSort, { static: false }) sort!: MatSort;



	@Input('tasks')
	public set setTasks(tasks: Task[]) {
		this.tasks = tasks;
		this.refreshTable();
	};
	@Output()
	deleteTask = new EventEmitter<Task>();

	@Output()
	selectTask = new EventEmitter<Task>();
	public tasks!: Task[];

	@Output()
	selectCategory = new EventEmitter<Category>();

	constructor(private dialog: MatDialog) { }

	ngOnInit(): void {
		//this.dataHandler.getAllTasks().subscribe(tasks => this.tasks = tasks);
		this.dataSource = new MatTableDataSource();
		this.refreshTable();
	}

	ngAfterViewInit(): void {
		this.addTableObjects();
	}

	toggleTaskCompleted(task: Task): void {
		task.completed = !task.completed;
	}

	openEditTaskDialog(task: Task): void {
		const dialogRef = this.dialog.open(
			EditTaskDialogComponent,
			{
				data: [task, 'Редактирование задачи'],
				autoFocus: false
			}
		);
		dialogRef.afterClosed().subscribe(result => {
			if (result === 'complete') {
				task.completed = true;
				this.selectTask.emit(task);
			}
			if (result === 'activate') {
				task.completed = false;
				this.selectTask.emit(task);
				return;
			}
			if (result === 'delete') {
				this.deleteTask.emit(task)
				return;
			}
			if (result as Task) {
				this.selectTask.emit(task);
				return;
			}
		});
	}

	openDeleteTaskDialog(task: Task) {
		const dialogRef = this.dialog.open(
			ConfirmDialogComponent,
			{
				maxWidth: '500px',
				data: { dialogTitle: 'Подтвердите действие', message: 'Вы действительно хотите удалить задачу?' },
				autoFocus: false
			}
		);

		dialogRef.afterClosed().subscribe(result => {
			if (result) this.deleteTask.emit(task);
		})
	}

	onSelectCategory(category: Category) {
		this.selectCategory.emit(category);
	}

	public getPriorityColor(task: Task): string {
		if (task.priority && task.priority.color) {
			return task.priority.color;
		} return '#fff'
	}

	private refreshTable() {
		if (!this.dataSource) return;

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
