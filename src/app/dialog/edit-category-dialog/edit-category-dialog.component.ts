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
		private dialog: MatDialog
	) { }

	dialogTitle!: string;
	categoryTitle!: string;
	canDelete = true;

	ngOnInit(): void {
		this.categoryTitle = this.data[0];
		this.dialogTitle = this.data[1];
		if (!this.categoryTitle) this.canDelete = false;
	}

	onConfirm(): void { }
	onCancel(): void { }
	delete(): void { }
}
