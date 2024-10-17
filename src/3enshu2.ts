export {};

const priorities = [3, 1, 2, 1]; // 1〜3の値が格納された配列

// ここの処理を完成させる
 const formattedPriorities = priorities.map((priorities) => "★".repeat(4-priorities));
 console.log(priorities);

console.log(formattedPriorities);