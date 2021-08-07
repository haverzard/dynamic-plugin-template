# Dynamic React Plugin

![](https://raw.githubusercontent.com/storybookjs/brand/059f152ecfa4e9895380cb0e4a1f48cf80311a69/badge/badge-storybook.svg)

## Description
Proof of Concept for Runtime import on React using Module Bundler. The idea is that you can import a plugin by using the link.

Both rollup and webpack configurations for the dynamic plugin are available in this template.

## Requirements
- NodeJS `v14` or above
- Yarn `1.22` or above

## Installation
`yarn ci`

## Build
- For rollup, use `yarn build-rollup`.
- For webpack, use `yarn build-webpack`.

## Development
You can develop your plugin without the need for React apps using storybook: `yarn storybook`

![](./.github/storybook.png)