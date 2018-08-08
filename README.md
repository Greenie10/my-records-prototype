<h1 align="center">OrganiseMyRecords - a prototype</h1>

## Introduction

This is a prototype that uses a [react-semantic-boilerplate](https://github.com/pretzelhands/react-semantic-boilerplate) to quickly mock up our Front End Guild project.

## What's included

:heavy_check_mark: Direct module imports to reduce bundle size  
:heavy_check_mark: Hot module reloading  
:heavy_check_mark: The beautiful Inter UI font  
:heavy_check_mark: Semantic UI React (duh!)  
:heavy_check_mark: Tachyons for easy layouting

## How to use

### Installation

First clone the repository to your computer by running  
`git clone https://github.com/Greenie10/my-records-prototype.git`

Then you need to install the required dependencies with  
`yarn install` (**npm:** `npm install`)

And after that you are ready to go!

### Basic usage

You can now use the same commands as with any other Create React App! They are as follows:

`yarn start` (**npm:** `npm run start`)  
`yarn build` (**npm:** `npm run build`)

They function exactly the same way as you're used to, but include Semantic UI compilation on-the-fly and hot module reloading.

### Customizing Semantic UI

To customize Semantic UI you can find the appropriate files in `src/styling/theme`. To understand the file structure provided in that folder, please read the [Customization Guide](http://learnsemantic.com/developing/customizing.html) provided by Semantic UI.

The theme files are pre-filled with all available variables so you can just set them and forget them. As you save those files Webpack will automatically rec-compile your files.
