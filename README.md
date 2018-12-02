# React Example App (with Redux + Reselect)

NOTE: For a mobx version of this app, switch to the [`master`](https://github.com/kole/react-example-app/tree/master) branch.

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

### State

There are 2 primary pieces of state: questions and answers. State is managed with Redux and functionality is split between actions and reducers. Additionally, derived state (via reselect), leveraging memoized selectors, is used to calculate the results of the quiz once the user reaches the end.

### Tests

All tests are located in the same directory as the file being tested. I prefer this pattern over storing all tests in a `__tests__` folder since it makes locating and associating failing tests with their accompanying files easier.

## A Note on Coding Practices

### Standardized Methods

There are some intentional inconsistencies in this codebase. For example, one might notice that looping over arrays takes place in some cases with ES5 (`for (let i=0; i < arr.length; i++)`) and in other cases with a more modern (`arr.forEach`) approach. The decision was made to do this simply to showcase a knowledge of different methods. For a production app, and certainly an app with more than one developer, it would be expected to standardize those methods.

### Self Documenting Code

An effort was made to write clear, yet concise, variable, function/method and class names. I added comments to areas where I felt additional explanation could be helpful.

## Redux for State Management

An application this size does not need a 3rd party state manager. Desired results can be achieved much more elegantly using react state, the context API, or even by simply passing props down to child components. However, since this app is designed to showcase best practices for larger applications, I chose Redux since it scales well. Additionally, I decided to use a memoized selector to demonstrate best practice for performance by caching expensive processes like loops and comparisons.

## Production Considerations

If this app were an actual production app, the following changes would be considered:

-   Error handling - There is currently no error handling in the app. This would be a required change for a production release.
-   How necessary is a state manager like Mobx/Redux? It could be argued that simply using react state (in conjunction with `context` as of React 16.3) would be sufficient considering the simplicity and size of this app.
-   Extensive browser/OS/device testing would be necessary.
-   There are some improvements that could be made to make the app more scalable. For example, right now, although the `fetchQuestions` action function accepts a `type` argument for fetching questions from the API, the UI only supports boolean answers to each question.
-   A more comprehensive eslint rule-set and agreed-upon coding practices (e.g. use `arr.forEach` instead of an ES5 `for` loop, when to return an array instead of mutate an array, etc.).
-   100% test coverage - or at least approaching 100% - should be a target.

## Vague Dependency Explanations

A list of some of the non-obvious dependencies and why they were used

-   `root-import` to avoid long relative paths and guard against project structure changes breaking the app (e.g. `../../../`)

## Tested Browsers & OS

-   Chrome 70 (macOS 10.14.1)
