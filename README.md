# modern-react-generator

## Description

This Yeoman generator is designed to help you scaffold modern React applications, supporting both JavaScript and TypeScript. The main goal is to provide a clean and helpful structure.

## Features

- Generate components: `yo modern-react:component component-name`
- Generate hooks: `yo modern-react:hook hook-name`
- Generate context: `yo modern-react:context context-name`

## Installation

To install the Yeoman generator, use the following command:

```bash
npm install -g yo
npm install -g generator-modern-react
```

## Docs

### Generate components

Generate a component named MyComponent with TypeScript and EmotionJS:

**Usage example**: 

```bash
yo modern-react:component MyComponent --ts --emotion
```
**Options**: 

| Param       | Values    | Default  |Efect |
| ----------- | ----------| -------- | - |
| ts          | `Boolean` | false    | Uses typescript |
| emotion     | `Boolean` | false    | Uses [EmotionJS](https://emotion.sh)|
| nostyle     | `Boolean` | false    | Skip the style creation |
| notest      | `Boolean` | false    | Skip the test creation |


### Generate hooks

Generate a hook named useHook with TypeScript:

**Usage example**: 

```bash
yo modern-react:hook useHook --ts
```

**Options**: 

| Param       | Values    | Default  |Efect |
| ----------- | ----------| -------- | - |
| ts          | `Boolean` | false    | Uses typescript |

### Generate context

Generate a context and provider named AuthContext and AuthProvider with TypeScript:

**Usage example**: 

```bash
yo modern-react:context auth --ts
```

**Options**: 

| Param       | Values    | Default  |Efect |
| ----------- | ----------| -------- | - |
| ts          | `Boolean` | false    | Uses typescript |