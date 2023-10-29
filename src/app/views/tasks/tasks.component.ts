import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Task } from 'src/app/model/Task';
import { DataHandlerService } from 'src/app/service/data-handler.service';

@Component({
	selector: 'app-tasks',
	templateUrl: './tasks.component.html',
	styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
	public displayedColumns: string[] = ['color', 'id', 'title', 'date', 'priority', 'category'];
	public dataSource!: MatTableDataSource<Task>;

	tasks!: Task[];

	constructor(private dataHandler: DataHandlerService) { }

	ngOnInit(): void {
		this.dataHandler.tasksSubject.subscribe(tasks => this.tasks = tasks);
		this.dataSource = new MatTableDataSource();
		this.refreshTable();
	}

	toggleTaskCompleted(task: Task) {
		task.completed = !task.completed;
	}

	public getPriorityColor(task: Task) {
		if (task.priority && task.priority.color) {
			return task.priority.color;
		} return '#fff'
	}

	public refreshTable() {
		this.dataSource.data = this.tasks;
	}
}
