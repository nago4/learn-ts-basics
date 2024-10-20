"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deepEqual = void 0;
var deepEqual = function (todo1, todo2) {
    if (todo1 === todo2) {
        return true;
    }
    if (todo1.name === todo2.name &&
        todo1.priority === todo2.priority &&
        todo1.isDone === todo2.isDone &&
        todo1.deadline.getTime() === todo2.deadline.getTime()) {
        return true;
    }
    return false;
};
exports.deepEqual = deepEqual;
