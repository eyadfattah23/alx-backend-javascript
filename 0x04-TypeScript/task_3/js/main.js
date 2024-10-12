"use strict";
/// <reference path="crud.d.ts" />
Object.defineProperty(exports, "__esModule", { value: true });
var CRUD = require("../js/crud.js");
var row = {
    firstName: 'Guillaume',
    lastName: 'Salva',
};
var newRowID = CRUD.insertRow(row);
var updatedRow = { firstName: 'Guillaume', lastName: 'Salva', age: 23 };
CRUD.updateRow(newRowID, updatedRow);
