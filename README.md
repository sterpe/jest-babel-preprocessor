# jest-babel-preprocessor

#### install

```
npm i --D jest-cli jest-babel-preprocessor
```

#### use

in your `package.json` set the `jest.scriptPreprocessor` field:

```javascript
{
  "jest": {
    "scriptPreprocessor": "<rootDir>/node_modules/jest-babel-preprocessor/index.js"
  }
}
```
