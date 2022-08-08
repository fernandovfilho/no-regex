# NO Regex Utils

> Some regex functions so you don't have to worry about it

## Install

`npm install no-regex-utils`

## How to use

```javascript
import NoRegex from "no-regex-utils";
```

## Methods

### Validations

> isEmail

```javascript
NoRegex.isEmail("fernando@email.com"); // true
```

> isIPv4

```javascript
NoRegex.isIPv4("192.168.0.1"); // true
```

> isUsername

```javascript
NoRegex.isUsername(
  "user_test"
  {
  minLength: int,       // optional, default: 3
  maxLength: int,       // optional, default: 16
  underline: boolean,   // optional, default: true
  dash: boolean,        // optional, default: true
}) // true;
```

### Manipulations

> onlyNumbers

```javascript
NoRegex.onlyNumbers("test123test"); // 123
```

> onlyLetters

```javascript
NoRegex.onlyLetters(
  "lE123tterS123"
  {
  lowercase: boolean, // optional, default: true
  uppercase: boolean, // optional, default: true
}) // 'lEtterS';
```

## Author

Fernando Vargas Filho

## License

This project is licensed under
[MIT License](http://en.wikipedia.org/wiki/MIT_License)
