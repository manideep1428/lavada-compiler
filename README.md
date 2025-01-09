# Lovda Compiler

A CLI package that converts `.lovda` files to JavaScript.
If you come from telugu community you not need to much explanation about this project else

Google it about the words

## Installation

```bash
npm install lovda-compiler
```

or using Yarn:

```bash
yarn add lovda-compiler
```

## Usage

1. Create a `lovda` folder in your project
2. Add `.lovda` files inside the folder
3. The compiler will generate JavaScript files in `dist/[filename].js`

Example `.lovda` file:

```
puka PI = 3.14;        // puka is const
lanja radius = 10;     // lanja is let
loop (lanja i = 0; i < 5; i++) {
    bayata.dengu("Iteration:", i);
}
bayata.dengu("Area:", PI * radius * radius);
```

Generated JavaScript output:

```javascript
const PI = 3.14;
let radius = 10;
for (let i = 0; i < 5; i++) {
  console.log("Iteration:", i);
}
console.log("Area:", PI * radius * radius);
```

## Key Mappings

- `puka` → `const`
- `lanja` → `let`
- `loop` → `for`
- `bayata.dengu()` → `console.log()`

## Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## License

MIT License - see [LICENSE](LICENSE)

## Contact

GitHub: [manideep1428](https://github.com/manideep1428)

_Note: This project uses Telugu slang expressions._
