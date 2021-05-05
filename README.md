# Webpack from scratch

[@johannesstricker](https://github.com/johannesstricker)

Source: https://javascript.plainenglish.io/getting-started-with-loaders-and-plugins-in-webpack

Learn more: https://survivejs.com/webpack/foreword/

---

Understanding how webpack works by configuring it step by step.

## Initial setup

```shell
mkdir webpack-from-scratch
cd webpack-from-scratch
mkdir src
echo "console.log('It works')" > src/index.js
yarn add -D webpack webpack-cli
```

### Bundling manually

```shell
yarn webpack bundle
```

By convention, the default webpack config will look for `src/index.js` as the **entrypoint** and **output** it to `dist/main.js`.

## Loading stylesheets

If we add a `src/styles.css` and import it into `src/index.js`, running `yarn webpack bundle` will give the following error:

```
You may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders
```

## Loaders

When webpack sees an import statement, it loads its file content into a UTF-8 string.
A loader is just a function that takes this string as an argument, applies transformations to it and returns a result.

```js
module.exports = (source) => {
  return source.replace("a", "b");
};
```

By default, webpack only knows how to import Javascript files, but it can be configured with different loaders for other types. Loaders can even be chained.
They can transform the input in however they want, but the output must be a **valid Javascript module**.

## Plugins

A plugin is a Javascript class with an `apply` method.
It receives a compiler instance as an argument, which exposes hooks that we can tap into to add extra work into its steps.
