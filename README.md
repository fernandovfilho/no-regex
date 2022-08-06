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
NoRegex.isUsername({
  value: "user_test", // required
  minLength: 3, // optional, default: 3
  maxLength: 16, // optional, default: 16
  underline: true, // optional, default: true
  dash: true, // optional, default: true
});
```

### Manipulations

> onlyNumbers

```javascript
NoRegex.onlyNumbers("test123test"); // 123
```

## Author

Fernando Vargas Filho

## License

This project is licensed under
[MIT License](http://en.wikipedia.org/wiki/MIT_License)
