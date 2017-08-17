# Sample Gulpfile

*This is a sample `gulpfile.js` and `package.json` for Drupal 8 theming*

Before getting started, make sure you have downloaded [Node.js][1]. 
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
+ If you do not already have a `package.json` file, typing `npm init` will create one for you. You will be asked a series of questions. Enter a value or hit Enter to accept defaults.

==note: If you are using Git Bash, you will not be able to confirm the== `Is this ok? (yes)` ==question at the end. This problem seems to only occur in Git Bash. It is recommended that, for this step, you use another command line tool to run the== `npm init` ==command.==

### 4. Install Gulp Locally
+ Type `npm install gulp --save-dev`
+ This installs Gulp as a development dependency and it updates the `devDependencies` section of `package.json`

### 5.Create a Gulp Configuration File
+ In this case, just use the provided `gulpfile.js` file,which you should place inside your theme folder

 



