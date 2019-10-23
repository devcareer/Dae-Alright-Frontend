# Dae-Alright-Frontend
Building a food service web app with React, using SASS as a CSS pre-processor, Bootstrap as CSS framework.

This Project was structured with the create-react-app 

- [Checkout the CRA readme](https://github.com/facebook/create-react-app/blob/master/README.md#creating-an-app) – How to create a new app.
- [User Guide](https://facebook.github.io/create-react-app/) – How to develop apps bootstrapped with Create React App.

# How to Setup the Project Locally

- Open Git bash
- Clone project reprository from [dae-Alright repo](https://github.com/devcareer/Dae-Alright-Frontend.git)


```sh
git clone https://github.com/devcareer/Dae-Alright-Frontend.git
run npm install 
```
- Project Structure should be Similar to this:

```
dae-alright
├── node_modules
├── public
│    ├── favicon.ico
│    ├── index.html
│    └── manifest.json
├── SCSS
|    ├── abstracts
|    ├── base
|    ├── components
|    ├── layouts
|    ├── pages
|    └── main.scss
├── src
|    ├── assests
|    ├── components
|    ├── container
|        ├── App.css
|        ├── App.js
|        ├── App.test.js
|    ├── index.css
|    ├── index.js
|    ├── logo.svg
|    └── serviceWorker.js
├── .gitignore
├── package-lock.json
├── package.json
└── README.md
```
Once cloning is complete, you can open your project folder:

``` sh
cd dae-alright
```
- depending on the package manager you decide to use run npm install or yarn install on your terminal
``` sh
npm install
yarn install
```
 Note : The asssests and components file in the src folder are for images and Compnents respectively

 # Styleguides

A coding styleguide (note, not a visual styleguide) is a valuable tool for teams who:

* Build and maintain products for a reasonable length of time;
* Have developers of differing abilities and specialties;
* Have a number of different developers working on a product at any given time;
* On-board new staff regularly;
* Have a number of codebases that developers dip in and out of.

# Syntax and formatting

1. Two (2) space indents, no tabs.
2. 80 character wide columns.
            Reason
 * The ability to have multiple files open side by side.
 * Viewing CSS on sites like GitHub, or in terminal windows.
 * Providing a comfortable line length for comments.
3. Multi-line CSS.
4. Meaningful use of whitespace.
5. Dont use !important in your coding.

# STRINGS

* Unless applied as CSS identifiers, Strings should be quoted using single quotes. URLs should also be quoted. 

# NUMBERS

* Sass makes no distinction between numbers, integers, floats so trailing zeros (0) should be omitted. However, leading zeros (0) help readability and should be added. 
* A zero (0) length should not have a unit. 
* Units manipulation should be thought as arithmetic operations, not string operations. 
* In order to improve readability, top-level calculations should be wrapped in parentheses. Also, complex math operations might be splitted into smaller chunks. 
* Magic numbers dramatically hurt code maintainability and should be avoided at all time. When in doubt, extensively explain the questionable value. 

# COLORS

* Colors should be expressed in HSL when possible, then RGB, then hexadecimal (in a lowercase and shortened form). Color keywords should be avoided. 
* Prefer mix(..) instead of darken(..) and lighten(..) when lightening or darkening a color. 

# LISTS
* Unless used as a direct mapping to space-separated CSS values, lists should be separated with commas. 
* Wrapping parentheses should also be considered to improve readability. 
* Inlined lists should not have a trailing comma, multi-line lists should have it. 

# MAPS

* Maps containing more than a single pair are written on several lines. 
* To help maintainability, the last pair of a map should have a trailing comma. 
* Map keys that happen to be strings should be quoted as any other string. 

# DECLARATION SORTING

*The system used for declaration sorting (alphabetical, by type, etc.) doesn’t matter as long as it is consistent. ↩

# SELECTOR NESTING

* Avoid selector nesting when it is not needed (which represents most of the cases). 
* Use selector nesting for pseudo-classes and pseudo-elements. 
* Media queries can also be nested inside their relevant selector. 

# BEM Naming Conventions

Naming conventions in CSS are hugely useful in making your code more strict, more transparent, and more informative.

This project is making use of BEM-like naming convention.

BEM, meaning Block, Element, Modifier, is a front-end methodology coined by developers working at Yandex. Whilst BEM is a complete methodology, here we are only concerned with its naming convention. Further, the naming convention here only is BEM-like; the principles are exactly the same, but the actual syntax differs slightly.

BEM splits components classes into three groups:

* Block: The sole root of the component.
* Element: A component part of the Block.
* Modifier: A variant or extension of the Block.

- Read more on [BEM](http://getbem.com/) 

