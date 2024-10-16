"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dayjs_1 = __importDefault(require("dayjs"));
const weekday_1 = __importDefault(require("dayjs/plugin/weekday"));
require("dayjs/locale/ja");
// プラグインを登録
dayjs_1.default.extend(weekday_1.default);
// ロケールを日本語に設定
dayjs_1.default.locale('ja');
const dtFmt = "YYYY/MM/DD(ddd) HH:mm"; // ddd で曜日を表示
const deadline = new Date(2024, 10, 2, 11, 45);
const cratedAt = new Date(); // 引数なしで現在日時を取得
const str = `期限 ${(0, dayjs_1.default)(deadline).format(dtFmt)}` +
    `(登録日 ${(0, dayjs_1.default)(cratedAt).format(dtFmt)})`;
console.log(str);
