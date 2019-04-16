# Scrivito Barchart
[![CMS: Scrivito](https://img.shields.io/badge/CMS-Scrivito-brightgreen.svg)](https://scrivito.com) [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

A barchart React component/Scrivito widget for the Scrivito CMS.

## Screenshot

![Screenshot](https://raw.githubusercontent.com/mdwp/scrivito-barchart/master/barchart-screenshot.png)

## Installation

Open your terminal.

`$ cd` to your Scrivito project

```shell
$ npm install scrivito-barchart
```

Import the widget in your javascript (e.g. in `index.js` or `Widgets/index.js`).

Add this line to your index.js:

```js
import "scrivito-barchart";
```

## Features

Barchart for simple, stacked or mixed barchart.

## Widget properties

In the widget properties you can set:

- Chart type
- Labels for three comparable values e.g. Foo, Bar, Baz
- Chart values
  - Name e.g. 'January', 'February' ...
  - Value (number) for 'January'
  - Value (number) for 'February'
  - ...