import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Category } from 'src/app/model/Category';
import { Priority } from 'src/app/model/Priority';
import { Task } from 'src/app/model/Task';
import { DataHandlerService } from 'src/app/service/data-handler.service';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';

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
	categories!: Category[];
	tmpCategory!: Category | null;
	priority!: Priority[];
	tmpPriority!: Priority | null;
	Date!: Date | null;
	tmpDate!: Date | null;

	ngOnInit(): void {
		this.task = this.data[0];
		this.dialogTitle = this.data[1];
		this.tmpTitle = this.task.title;

		this.tmpCategory = this.task.category || null;
		this.tmpPriority = this.task.priority || null;

		this.tmpDate = this.task.date || null;

		this.dataHandler.getAllCategories().subscribe(items => this.categories = items);
		this.dataHandler.getAllPriority().subscribe(items => this.priority = items);
	}

	onConfirm(): void {
		this.task.title = this.tmpTitle;
		// @ts-ignore
		this.task.category = this.tmpCategory;
		// @ts-ignore
		this.task.priority = this.tmpPriority;
		// @ts-ignore
		this.task.date = this.tmpDate;
		this.dialogRef.close(this.task);
	}
	onCancel(): void {
		this.dialogRef.close(null);
	}
	delete(): void {
		const dialogRef = this.dialog.open(
			ConfirmDialogComponent,
			{
				maxWidth: '500px',
				data: {
					dialogTitle: 'Подтверите действие',
					message: `Вы действительно хотите удалить задачу '${this.task.title}'?`
				},
				autoFocus: false
			}
		);
		dialogRef.afterClosed().subscribe(result => {
			if (result) {
				this.dialogRef.close('delete');
			}
		})
	}
	complete(): void {
		this.dialogRef.close('complete');
	}

	activate(): void {
		this.dialogRef.close('activate');
	}
}
