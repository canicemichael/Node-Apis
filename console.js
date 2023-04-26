// const out = getStreamSomehow();
// const err = getStreamSomehow();
// const myConsole = new console.Console(out, err);

// myConsole.log("hello world");
// // Prints: hello world, to out
// myConsole.log("hello %s", "world");
// // Prints: hello world, to out
// myConsole.error(new Error("Whoops, something bad happened"));
// // Prints: [Error: Whoops, something bad happened], to err

// const namee = "Will Robinson";
// myConsole.warn(`Danger ${namee}! Danger!`);
// // Prints: Danger Will Robinson! Danger!, to err

console.clear(); //executing this file will clear everything on the console

// These can't be parsed as tabular data
console.table(Symbol());
// Symbol()

console.table(undefined);
// undefined

console.table([{ a: 1, b: 'Y' }, { a: 'Z', b: 2 }]);
// ┌─────────┬─────┬─────┐
// │ (index) │  a  │  b  │
// ├─────────┼─────┼─────┤
// │    0    │  1  │ 'Y' │
// │    1    │ 'Z' │  2  │
// └─────────┴─────┴─────┘

console.table([{ a: 1, b: 'Y' }, { a: 'Z', b: 2 }], ['a']);
// ┌─────────┬─────┐
// │ (index) │  a  │
// ├─────────┼─────┤
// │    0    │  1  │
// │    1    │ 'Z' │
// └─────────┴─────┘