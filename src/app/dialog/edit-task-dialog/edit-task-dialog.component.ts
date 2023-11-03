import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Task } from 'src/app/model/Task';
import { DataHandlerService } from 'src/app/service/data-handler.service';

@Component({
	selector: 'app-edit-task-dialog',
	templateUrl: './edit-task-dialog.component.html',
	styleUrls: ['./edit-task-dialog.component.css']
})
export class EditTaskDialogComponent implements OnInit {

	constructor(
		private dialogRef: MatDialogRef<EditTaskDialogComponent>,
		private dataHandler: DataHandlerService,
		private dialog: MatDialog,
		@Inject(MAT_DIALOG_DATA) private data: [Task, string]
	) { }

	dialogTitle!: string;
	task!: Task;
	tmpTitle!: string;

	ngOnInit(): void {
		this.task = this.data[0];
		this.dialogTitle = this.data[1];
		this.tmpTitle = this.task.title;
	}

	onConfirm(): void {
		this.task.title = this.tmpTitle;
		this.dialogRef.close(this.task);
	}
	onCancel(): void {
		this.dialogRef.close(null);
	}
}