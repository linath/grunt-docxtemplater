# grunt-docxtemplater

> Use [docxtemplater](https://github.com/open-xml-templating/docxtemplater) in a grunt task.

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-docxtemplater --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-docxtemplater');
```

## The "docxtemplater" task

### Overview
In your project's Gruntfile, add a section named `docxtemplater` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  docxtemplater: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
});
```

### Options

#### options.data
Type: `Object`
Default value: `{}`

An object of the templateVariables and values which will be passed to docxtemplater.

### Usage Examples

#### Default Options
With the default options the docx is only re-rendered and copied to destination path.

```js
grunt.initConfig({
  docxtemplater: {
    options: {},
    files: {
      'dest/default_options/dest.docx': 'src/testing/source.docx',
    },
  },
});
```

#### Custom Options
In this example, custom options are used to replace the `{placeholder1}` in the source.docx with the content `value1` and then render it and copy the rendered docx to the destination path.

```js
grunt.initConfig({
  docxtemplater: {
    options: {
      data: {
        placeholder1: 'value1'
      }
    },
    files: {
      'dest/default_options/dest.docx': 'src/testing/source.docx',
    },
  },
});
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
  * 2015-07-07      v.0.1.0     First version, no tests yet.
