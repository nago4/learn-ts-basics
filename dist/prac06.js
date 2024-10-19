"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var grades = [1, 2, 3, 4, 5];
var gradeListItems = grades.map(function (grade) { return "<li>".concat(grade, "\u5E74</li>"); });
console.log(grades);
console.log(gradeListItems);
