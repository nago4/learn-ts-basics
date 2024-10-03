export {};
// 文字列型 (string type) の変数 name の宣言と初期化
let name: string = "TypeScriptの勉強";
// 数値型 (number type) の変数 priority の宣言と初期化
let priority: number = 3;
let deadline: Date = new Date(2024, 10, 2, 11, 45);
// Dateオブジェクトを指定した形式にフォーマットする関数
function formatDate(date: Date): string {
    const year: number = date.getFullYear();
    const month: string = String(date.getMonth() + 1).padStart(2, '0'); // 月は0から始まるため1を足す
    const day: string = String(date.getDate()).padStart(2, '0');
    const hours: string = String(date.getHours()).padStart(2, '0');
    const minutes: string = String(date.getMinutes()).padStart(2, '0');

    return `${year}/${month}/${day} ${hours}:${minutes}`;
}
console.log(name, priority, formatDate(deadline));