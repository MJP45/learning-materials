# Cucumber Testing Starter

A repo with a quick cucumber build that outputs to a json report. 

## Installation

Clone down and:

`yarn install`

## Running the tests

To just run the Cucumber BDD tests: 

`yarn test`

To run the tests and output to a json report (found in the `test/report` directory): 

`yarn test-json`

## File structure

Cucumber feature files and step definitions can be found in the test directory, as well as a report directory for the json output. 

Uses `cucumber-tsflow` to give neat annotations allowing cucumber to be written as neatly as possible in Typescript, and so the tech can be easily shown to current students.
