# jest-babel-preprocessor

#### install

```
npm i --D jest-cli jest-babel-preprocessor
```

#### use

On postinstall `jest-babel-preprocessor` will update the dependent 
package's `package.json` to add `jest.scriptPreprocessor` & 
`jest.unmockedModulePathPatterns` fields if they do not exist.

i.e.:

in your `package.json` set the `jest.scriptPreprocessor` field:

```javascript
{
  "jest": {
    "scriptPreprocessor": "<rootDir>/node_modules/jest-babel-preprocessor/preprocessor.js"
    "unmockedModulePathPatterns": [
      "<rootDir>/node_modules/react"
    ]
  }
}
```
