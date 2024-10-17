"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dayjs_1 = __importDefault(require("dayjs"));
var weekday_1 = __importDefault(require("dayjs/plugin/weekday"));
require("dayjs/locale/ja");
// プラグインを登録
dayjs_1.default.extend(weekday_1.default);
// ロケールを日本語に設定
dayjs_1.default.locale('ja');
var dtFmt = "YYYY/MM/DD(ddd) HH:mm"; // ddd で曜日を表示
var deadline = new Date(2024, 10, 2, 11, 45);
var cratedAt = new Date(); // 引数なしで現在日時を取得
var str = "\u671F\u9650 ".concat((0, dayjs_1.default)(deadline).format(dtFmt)) +
    "(\u767B\u9332\u65E5 ".concat((0, dayjs_1.default)(cratedAt).format(dtFmt), ")");
console.log(str);
