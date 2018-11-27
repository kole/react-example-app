# React Code Sample

## Purpose

This is a small quiz application, built in react, that consumes questions from an external API, tests its users and displays the results. It should be noted that this app, although small, is built with the idea that it should be scalable. Considerations for optimizing the app based on the existence of real-world requirements are discussed below.

## Setup

### Installation

`npm install`

### Run the app locally

-   `npm start`
-   App will run at `http://localhost:8080`

### Run test suite

`npm test`

## Structure / Architecture

### Components

All components for this app are located at the root level of the `/components` directory. I have worked on projects where it made sense to deviate from this practice (e.g. `/components/views`, `/components/common`, etc.), but this makes the most sense considering the simplicity and size of this app.

### Constants

The `/constants` directory stores the API URL.

### Stores

All 3 Mobx stores (answers, questions, results) are located in `/stores`. The `RootStore` file imports, instantiates and then exports all stores as a best practice to ensure the store is a singleton throughout the app.

### Tests

All tests are located in the same directory as the file being tested. I prefer this pattern over storing all tests in a `__tests__` folder since it makes locating and associating failing tests with their accompanying files easier.

## A Note on Coding Practices

### Standardized Methods

There are some intentional inconsistencies in this codebase. For example, one might notice that looping over arrays takes place in some cases with ES5 (`for (let i=0; i < arr.length; i++)`) and in other cases with a more modern (`arr.forEach`) approach. The decision was made to do this simply to showcase a knowledge of different methods. For a production app, and certainly an app with more than one developer, it would be expected to standardize those methods.

### Self Documenting Code

An effort was made to write clear, yet concise, variable, function/method and class names. I added comments to areas where I felt additional explanation could be helpful.

## Mobx Instead of Redux

It is my personal preference to operate under the OOP paradigm. Mobx embraces OOP whereas Redux forces engineers into using FP. Sometimes that can be a good thing (perhaps on very large projects with many developers where 100% test coverage is a requirement and speed of development is not a priority), but it is my experience that the benefits of using Redux do not outweigh the extra time and effort spent in writing copious amounts of boilerplate code for simple transactions.

## Production Considerations

If this app were an actual production app, the following changes would be considered:

-   Error handling - There is currently no error handling in the app. This would be a required change for a production release.
-   How necessary is a state manager like Mobx/Redux? It could be argued that simply using react state (in conjunction with `context` as of React 16.3) would be sufficient considering the simplicity and size of this app.
-   Extensive browser/OS/device testing would be necessary.
-   There are some improvements that could be made to make the app more scalable. For example, right now, although the questions store accepts a `type` argument for fetching questions from the API, the UI only supports boolean answers to each question.
-   A more comprehensive eslint rule-set and agreed-upon coding practices (e.g. use `arr.forEach` instead of an ES5 `for` loop, when to return an array instead of mutate an array, etc.).
-   100% test coverage - or at least approaching 100% - should be a target.

## Vague Dependency Explanations

A list of some of the non-obvious dependencies and why they were used

-   `transform-class-properties` and `transform-decorators-legacy` are for using Mobx decorators
-   `root-import` to avoid long relative paths and guard against project structure changes breaking the app (e.g. `../../../`)

## Tested Browsers

-   Chrome 67 (macOS 10.13.4)
