"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.date2str = void 0;
var date2str = function (dt) {
    var year = dt.getFullYear();
    var month = String(dt.getMonth() + 1).padStart(2, "0");
    var day = String(dt.getDate()).padStart(2, "0");
    var hours = String(dt.getHours()).padStart(2, "0");
    var minutes = String(dt.getMinutes()).padStart(2, "0");
    return "".concat(year, "/").concat(month, "/").concat(day, " ").concat(hours, ":").concat(minutes);
};
exports.date2str = date2str;
