# Sample Gulpfile

This is a sample `gulpfile.js` and `package.json` for Drupal 8 theming.

---

## Installing & Configuring Gulp for your local Drupal 8 project

### 1. Install Gulp globally 
+ This allows the `gulp` command to be run from any project 
+ In your command line program, type `npm install gulp-cli -g`
+ Test your installation by typing `gulp -v` in your command line program

### 2. Navigate to the current theme directory
+ Use the command prompt to navigate to the theme you will be using by typing `cd themes/==THEMENAME==` (e.g `cd themes/lao`)
+ The remaining commands will be executed in this directory

### 3. Initialize npm using the command prompt
+ in the command prompt, type "npm init"
+ You will be asked a series of questions. Enter a value or hit Enter to accept defaults.

### 4. Install Gulp Locally
+ type `npm install gulp --save-dev`
+ This installs Gulp as a development dependency and it updates the `devDependencies` section of `package.json`

### 5.Create a Gulp Configuration File
+ in this case, just use the `gulpfile.js` file provided
+ `gulpfile.js` should be placed inside your theme folder



