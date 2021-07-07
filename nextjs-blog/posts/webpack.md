---
title: 'Brown Bag: Webpack'
date: '2021-05-07'
---

Brown bag presentation:
https://docs.google.com/presentation/d/1_7aPzrBvYmm95WsMScnpkMrGwcJaEp_0hizlbNVJZHY/edit?usp=sharing

What is webpack:

Webpack is a javascript module bundler (if you can remember from design patterns, modules in javascript are self-contained sections, allowing them to be shuffled, removed, or added as necessary, making it easier to maintain and reusable). Webpack takes in all these modules and files and generates it into one single file that runs your app, or depending on configuration like Chuffeds, it can produce a number of different files.

Out of the box webpack also watches for changes and reruns the build, and any other tasks that we configure. It also runs a development server, meaning we can run “webpack” and it produces a development build of the files and serves it on localhost.

From webpack 4, webpack has allowed us to distinguish the builds between development and production. The differences between these are mostly that one compiles and minifies the code to make it faster to serve in the browser, and in development the minification step is skipped so we can easily debug in the browser.

Aside from what webpack offers out of the box (the processing of json and js files), webpack includes loaders. Loaders are additional node modules that help ‘load’ or ‘import’ other file types into browser acceptable formats like CSS, SVGs and so on.

Webpack also contains plugins, which are separate to loaders. Plugins are additional node modules that usually work on the bundled file/files/directory. Popular plugins include babel transpile, this plugin turns the latest features of javascript (es6) in our code into es5 code that older browsers can read, so worrying about browser support, although not a thing of the past, is much more reliable now. Other plugins can run post build cleanup, or uglifyJSPlugin takes the bundle.js and minimizes the contents to decrease the file size.

So in comparison, loaders work at the individual file level during or before the bundle is generated. Whereas plugins work at bundle or chunk level and usually work at the end of the bundling process. And some Plugins like commonsChunksPlugins go even further and modify how the bundles themselves are created.

Basic usage:
How do you use it? So webpack in its simplest form looks for an input file, in most instances this is just index.js file on the root, and it will build whatever is in that file and or imported in there into an dist/output file. This can be configured to look for entry points with a different name, or sub-folders, but as of webpack 5, if you want webpack in its simplest form it requires no configuration.

Below is an example of what an input and output looks like in the configuration file. The output object has two keys, one is path, and the other is publicPath, path is what directory the bundled files live in. PublicPath is used by several Webpack’s plugins to update the URLs inside CSS, HTML files when generating production builds. 
For example, in your CSS, you may have a url to load ‘./test.png’ on your localhost. But in production, the ‘test.png’ might actually be located at a CDN. So that means, you’ll have to manually update the URLs in all the files to point to the CDN when running in Production.
Instead, you can use Webpack’s publicPath and different plugins that are publicPath-aware to automatically update URLs when generating production builds.

Configuration can be easily manipulated and we can change where the bundling process begins from a user defined entry point or points in a webpack.config.js file. That output path value could be a string, array or an object. Passing an object as an entry point will produce multiple entry modules, and generate multiple files.This is how we create multiple js files in our configuration. Entry points themselves are modules, and as mentioned above these entry modules can point to other modules through imports.

An example of this would be in our react page component which is considered our entry, the import of the other components such as Input, TextHeader are considered other modules which have now been imported.

So what exactly happens?
Behind the scenes when you bundle a project, webpack constructs a dependency graph of the project that contains all the necessary modules needed in the application and then packs them together in either one or a few small bundles to be loaded into the browser.

How does webpack do this?
Webpack manages the build process using what’s called “chunks” and “chunks” are smaller pieces of code that are included in the bundles seen in the output.

So that brings me onto some basic and popular configuration of loaders and plugins that the majority of projects would be using.

Firstly, here is an example of configuring styles using loaders. In this example you can see there are multiple loaders for each rule, style-loader and css-loader being the two different ones.
CSS-loader interprets the import tags in the JS files, e.g. import ‘./style.css’ and style-loader is then responsible for injecting the CSS into the DOM using the <style> tags in the html file.

In webpack, the order of the loaders matters and if it’s reversed, it will execute the loaders in the wrong order, and as an example with these two style loaders, if it were to be reversed we would be inserting an empty style file into the DOM.

Other popular loaders for styles would include sass-loader, which as explained by the name interprets the sass styles and compiles it into css to make it readable for the DOM.

This next example makes Babel peprocess all of our react/jsx files. In webpack you use regex to find suitable files that you want to access to either build/create an entry point for.

As mentioned earlier, babel is used for transpiling our code for backwards compatibility to support older browsers.
Babel also creates a source map, a source map takes the transformed code and maps you back to the original code, enabling the browser to reconstruct the original source and present the reconstructed original in the debugger.

Plugins as mentioned before are tools that are run after the bundling process has completed, such as extra optimizations or asset management, in this example the HTML webpack plugin is another popular plugin that has the job of automatically creating a HTML file, and adding the output JS bundle path, so javascript is ready to be served.

Using webpack in development, as mentioned earlier, webpack introduced the differentiation of the environment of building code, this is known as “modes” and was introduced in webpack 4. We can manually set the environment in the command we use, or it will automatically default to production build.

The benefits of having these two modes is because development build will
Build quickly
Less optimized than production (e.g. the minification)
Does not remove comments
Provides more detailed error messages and suggestions (for example encountering error messages such as “p” is not defined, can be seen in production console errors, but in development this would have far more information, what exactly is undefined and the stack trace.
Overall with those past two reasons, it allows for a better debugging experience.

Production build:
Production mode is slower to build since it generates a more optimized bundle, the resulting javascript file is smaller in size as it removes many things that are not needed in production. It performs tree shaking (as mentioned before) anything that isn’t imported will get removed in this optimized build.

Next I’m going to do a small dive into the differences of webpack vs gulp.
Between these two there are lots of similarities in what packages like gulp and Webpack can do, but the main difference is that those are known as task runners, while webpack was born as a module bundler.

Why gulp is popular:

Gulp has been popular and widely used so is very stable. With its popularity came a big library of plugins, such as browserify for hot reloading.
It can be argued that gulp and browserify are much easier to learn and use.

These are all the things necessary for a dev environment, and webpack has them all together and as of version 4, webpack no longer requires a configuration file. So the last point of gulp being easier to learn may now be redundant.
Using gulp, you would have to have multiple other packages in order to achieve the same level of development productivity.
And so that now leads me to why webpack has become more popular.

This is because its a more focused tool, you specify an entry point to your app (it could even be an HTML file with script tags) and webpack analyzes the files and bundles all you need to run the app in a single JavaScript output file (or in more files if you use code splitting)
Detects code that is unused and excludes it during build, mentioned earlier as tree shaking
Serializes the code and only loads it when necessary
Monitor file alterations (reloading during development, not only does it monitor for changes but it also can differentiate between reloading everything, or only reloading the component that has been changed on the page, aka hot module reloading)
Can transpile code
Starts a web server
Makes it easy to import different types of files, images/css etc
A lot of functionality comes out of the box (so basic configuration has already been done for you)

Next, we get to how we can improve our current configuration of webpack.
There are number of ways we can improve our build, plugins such as url-loader can turn our small png files into data uris, turning the images into data uris [benefits of data uri]
A little tidbit from Ben is also that we could look at changing up some of the plugins we do use, babel being one of them. Babel as mentioned transpiles the code, but new plugins have become available such as SWC which also transpiles the code but quicker.

Aside from improvements to plugins we can use, upgrading from our current version of webpack 3 to webpack 5 has vast improvements.

Why we should upgrade:
Improve build performance with persistent caching (instead of building app over and over, only changed parts will be built, whilst reusing the unchanged ones from the cache) and long term caching
Improve bundle size with better tree shaking and code generation
Improve compatibility with the web platform
Prepare for future features by introducing breaking changes now (future proofing our webpack configuration)

Finally here are some of the blockers to upgrade our plugins and webpack.
Currently we are on webpack v3, which requires node v6 or higher, using webpack 4 requires an additional package called webpack-cli, we may need to also update other plugin packages.
Previously we had a blocker of node version in upgrading our webpack from v3 to v5, however this has since been updated by Ben.

At the moment we have a few blockers with plugins, so we will need to upgrade or find alternative plugins, as webpack 5 removes all deprecated features, including plugins that have been removed, some of them that we use are
UglifyJSPlugin
CommonsChunkPlugin
NamedModulesPlugin
NoEmitOnErrorsPlugin

Some of these are because it comes built into webpack now, so they are to be moved from the plugin array to the optimization object.


