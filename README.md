# modern-react-generator

## Description

This Yeoman generator is designed to help you scaffold modern React applications, supporting both JavaScript and TypeScript. The main goal is to provide a clean and helpful structure.

## Features

- Generate components: `yo modern-react:component component-name`
- Generate hooks: `yo modern-react:hook hook-name` (to be developed)
- Generate context: `yo modern-react:context context-name` (to be developed)

## Installation

To install the Yeoman generator, use the following command:

```bash
npm install -g yo
npm install -g generator-modern-react
```

## Docs

### Generate components

| Param       | Values    | Default  |Efect |
| ----------- | ----------| -------- | - |
| ts          | `Boolean` | false    | Uses typescript |
| emotion     | `Boolean` | false    | Uses [EmotionJS](https://emotion.sh)|
| nostyle     | `Boolean` | false    | Skip the style creation |

*Usage example*: 

Generate a component named MyComponent with TypeScript and EmotionJS:

```bash
yo modern-react:component MyComponent --ts --emotion
```