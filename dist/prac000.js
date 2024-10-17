"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 文字列型 (string type) の変数 name の宣言と初期化
var name = "TypeScriptの勉強";
// 数値型 (number type) の変数 priority の宣言と初期化
var priority = 3;
var deadline = new Date(2024, 10, 2, 11, 45);
// Dateオブジェクトを指定した形式にフォーマットする関数
function formatDate(date) {
    var year = date.getFullYear();
    var month = String(date.getMonth() + 1).padStart(2, '0'); // 月は0から始まるため1を足す
    var day = String(date.getDate()).padStart(2, '0');
    var hours = String(date.getHours()).padStart(2, '0');
    var minutes = String(date.getMinutes()).padStart(2, '0');
    return "".concat(year, "/").concat(month, "/").concat(day, " ").concat(hours, ":").concat(minutes);
}
console.log(name, priority, formatDate(deadline));
