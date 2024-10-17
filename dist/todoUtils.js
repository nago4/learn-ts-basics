"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTodoStatus = void 0;
var getTodoStatus = function (todo) {
    var now = new Date();
    var dueTime = todo.dueDate.getTime();
    var currentTime = now.getTime();
    var remainingHours = Math.floor((dueTime - currentTime) / (1000 * 60 * 60));
    if (todo.completed) {
        return "\u3010\u6E08\u3011".concat(todo.title);
    }
    else if (remainingHours > 0) {
        return "\u3010\u672A\u3011".concat(todo.title, " (\u671F\u9650\u307E\u3067\u6B8B\u308A").concat(remainingHours, "\u6642\u9593)");
    }
    else {
        return "\u3010\u672A\u3011".concat(todo.title, " (\u671F\u9650\u3092").concat(Math.abs(remainingHours), "\u6642\u9593\u8D85\u904E)");
    }
};
exports.getTodoStatus = getTodoStatus;
