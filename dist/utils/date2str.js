"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.date2str = void 0;
const date2str = (dt) => {
    const year = dt.getFullYear();
    const month = String(dt.getMonth() + 1).padStart(2, "0");
    const day = String(dt.getDate()).padStart(2, "0");
    const hours = String(dt.getHours()).padStart(2, "0");
    const minutes = String(dt.getMinutes()).padStart(2, "0");
    return `${year}/${month}/${day} ${hours}:${minutes}`;
};
exports.date2str = date2str;
