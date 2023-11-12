import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
	selector: 'app-edit-category-dialog',
	templateUrl: './edit-category-dialog.component.html',
	styleUrls: ['./edit-category-dialog.component.css']
})
export class EditCategoryDialogComponent implements OnInit {

	constructor(
		private dialogRef: MatDialogRef<EditCategoryDialogComponent>,
		@Inject(MAT_DIALOG_DATA) private data: [string, string],
	) { }

	dialogTitle!: string;
	categoryTitle!: string;

	ngOnInit(): void {
		this.categoryTitle = this.data[0];
		this.dialogTitle = this.data[1];
	}

	onConfirm(): void {
		this.dialogRef.close(this.categoryTitle);
	}
	onCancel(): void {
		this.dialogRef.close(false);
	}
	delete(): void {
		this.dialogRef.close('delete');
	}
}
