# Standalone Module Example

This repo is an example of the architecture outlined in the blog
post [here]().

## Running the examples
1. Make sure you have [Lineman.js]() installed: `npm install -g lineman`
1. Install the npm modules for the hostApp
```
cd hostApp
npm install
```
1. Install webdriver for [Protractor]()
```
./node_modules/protractor/bin/webdriver-manager update
```
1. Run the host app server: `lineman run`

## Running the tests
1. Run the host app in one window: `cd hostApp && lineman run`
1. Run the app serving the directives in another window: `cd guestModule && lineman run`
1. Run the host unit test in another window: `cd hostApp && lineman spec`
1. Run the host end to end tests in another window: `cd hostApp && lineman spec-e2e`
