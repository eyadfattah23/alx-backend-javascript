import { RowID, RowElement } from './interface.ts';

export function insertRow(row: RowElement): number;
export function deleteRow(rowId: RowElement): void;
export function updateRow(rowId: RowID, row: RowElement): RowID;
