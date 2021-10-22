## eslint

## Install:
```bash
yarn add @caisy/eslint-config-caisy -D
```

## Usage:
Add this to your .eslintrc:
```json
{
    "extends": "@caisy/eslint-config-caisy"
}
```
## Ignoring Code:
1. Use this, if you do not want to extend the .eslintignore:
```bash
yarn run eslint . --ignore-path node_modules/@caisy/eslint-config-caisy/.eslintignore
```
2. Use this, if you want to extend the .eslintignore:
```bash
cp "./node_modules/@caisy/eslint-config-caisy/.eslintignore" ".eslintignore"
```