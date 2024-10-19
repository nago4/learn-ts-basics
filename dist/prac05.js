"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var numArr = [10, 11, 12, 13];
console.log("初期状態 => " + numArr);
// 末尾に要素を追加
var addedToEnd = __spreadArray(__spreadArray([], numArr, true), [14], false); // スプレッド構文
console.log("末尾に要素を追加 => " + addedToEnd);
// 先頭に要素を追加
var addedToStart = __spreadArray([9], numArr, true); // スプレッド構文
console.log("先頭に要素を追加 => " + addedToStart);
// n番目の位置に要素 (10.5) を挿入
var n = 2;
var insertedAtN = __spreadArray(__spreadArray(__spreadArray([], numArr.slice(0, n), true), [10.5], false), numArr.slice(n), true);
console.log("".concat(n, "\u756A\u76EE\u306E\u4F4D\u7F6E\u306B\u8981\u7D20\u3092\u633F\u5165 => ") + insertedAtN);
