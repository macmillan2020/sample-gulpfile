# Sample Gulpfile

*This is a sample `gulpfile.js` and `package.json` for Drupal 8 theming on Windows.*

*Before getting started, make sure you have downloaded and installed [Node.js](https://nodejs.org "Node JS").*

---

## Installing & Configuring Gulp for your local Drupal 8 project

### 1. Install Gulp globally 
+ This allows the `gulp` command to be run from any project 
+ In your command line program, type `npm install gulp-cli -g`
+ Test your installation by typing `gulp -v` in your command line program

### 2. Navigate to the current theme directory
+ Use the command prompt to navigate to the theme you will be using by typing `cd themes/*THEMENAME*` (e.g `cd themes/lao`)
+ The remaining commands will be executed in this directory

### 3. Initialize npm using the command prompt 
+ In this case, you can use the provided `package.json` file, which you should place inside your theme folder
+ In the command prompt, type `npm init`
+ If you do not already have a `package.json` file, typing `npm init` will create one for you. You will be propted with a series of questions. Submit a value or hit Enter to accept defaults.

**note:** If you are using Git Bash, you will not be able to confirm the `Is this ok? (yes)` question at the end of the series of prompts. This problem seems to only occur in Git Bash. It is recommended that, for this step, you use another command line tool to run the `npm init` command.

### 4. Install Gulp Locally
+ Type `npm install gulp --save-dev`
+ This installs Gulp as a development dependency and it updates the `devDependencies` section of `package.json`

### 5.Create a Gulp Configuration File
+ In this case, just use the provided `gulpfile.js` file,which you should place inside your theme folder

---

## Using this Gulpfile

### 1. Configure your directory structure
+ For these tasks to work, your project's directory structure should match the one in the `gulpfile.js`
+ Ensure that you have three folders titled `scss`, `css` and `js` in your theme directory.

### 2. In `gulpfile.js`, change the `browser-sync` path to match your local site
+ Locate this code:
````
gulp.task('browser-sync', () => {
  browserSync.init({
    proxy: 'http://get-started-gulp.dd:8083/'
  })
});
````
+ Change the line `proxy: 'http://get-started-gulp.dd:8083/'`  to reflect your own local site address

### 3. To run Gulp, type `gulp` in the command prompt
+ Gulp will run and "watch" your files for any changes.
+ Gulp will automatically compile the scss files into one file (style.css) in the css folder.

### 4. Exit Gulp by pressing `Ctrl` and `c` at the same time.

