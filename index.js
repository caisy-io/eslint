module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": [
        "plugin:react/recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    "overrides": [
        {
        "files": ["*.tsx", "*.ts"],
        "extends": ["plugin:@typescript-eslint/recommended"],
        "rules": {
            "react/react-in-jsx-scope": "off",
            "@typescript-eslint/explicit-module-boundary-types": "off",
            "react/display-name": "off",
            "@typescript-eslint/ban-ts-comment": "warn",
            "no-var": "warn",
            "prefer-const": "warn",
            "@typescript-eslint/ban-types": "warn",
            "react/no-unescaped-entities": "warn",
            "react/prop-types": "off",
            "@typescript-eslint/camelcases": "off",
            "@next/next/no-img-element": "off",
            "@typescript-eslint/explicit-function-return-type": "off",
            "@typescript-eslint/no-explicit-any": "off",
            "@typescript-eslint/no-var-requires": "off",
            "@typescript-eslint/no-non-null-assertion": "off",
            "@typescript-eslint/no-empty-interface": "off",
            "@typescript-eslint/ban-ts-ignore": "off",
            "@typescript-eslint/no-empty-function": "off",
            "@typescript-eslint/naming-convention": [
            "warn",
            {
                "selector": "interface",
                "format": ["PascalCase"],
                "custom": {
                "regex": "^I[A-Z]",
                "match": true
                }
            }
            ],
        }
        }
    ],
    "globals": {
        "Atomics": "readonly",
        "React": "writable",
        "SharedArrayBuffer": "readonly"
    },
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
        "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": ["react", "@typescript-eslint", "@typescript-eslint"],
    "rules": {
        "linebreak-style": ["error", "unix"]
    },
    "settings": {
        "react": {
        "version": "17.0.2"
        }
    }
};