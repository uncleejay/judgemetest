# Judge.me Cypress Test Suite

This repository contains automated end-to-end (E2E) tests for the Judge.me platform using [Cypress](https://www.cypress.io/). The repository also includes test cases written in both Gherkin syntax and a PDF sheet for easy readability and collaboration.

---

## Table of Contents

- [Setup](#setup)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Test Case Documentation](#test-case-documentation)
  - [PDF Test Cases](#pdf-test-cases)
  - [Gherkin Test Cases](#gherkin-test-cases)
- [Running Tests Locally](#running-tests-locally)
  - [Custom Scripts](#custom-scripts)
- [Running Tests in CI/CD](#running-tests-in-cicd)
  - [GitHub Actions Integration](#github-actions-integration)
- [Important Note](#important-note)

---

## Setup

### Prerequisites

Before running the Cypress tests, ensure that your environment meets the following requirements:

1. **Node.js** (version 14 or above)
2. **npm** or **yarn**
3. A supported browser (e.g., Chrome, Edge)

---

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/uncleejay/judgemetest.git
   cd judgemetest

2. Installation
   ```bash 
   npm install

## Test Case Documentation

### PDF Test Cases

All test cases are available in a PDF document located in the docs/ folder. This document provides a detailed breakdown of each test scenario.

### Gherkin Test Cases

Test cases written in Gherkin syntax are located in the docs/ folder. These scenarios are written in Cucumber for non-techies.

## Running Test Locally

### Custom Scripts

Custom npm scripts are defined in the package.json file for running specific types of tests. Use the following commands:

1. Run all test

   ```bash
   npm run judgme

2. Run all test in headed mode
   ```bash 
   npm run judgeme-headed

N/B: This test has accessibility test and lighthouse performance audit integrated in the test. Meaning it will run automatically with other test cases.

## Running Tests in CI/CD

### Github Actions Integration

The project is integrated with GitHub Actions for Continuous Integration (CI). The test suite automatically runs on every pull request and merge to the main branch. To trigger a test manually:

1. Push your changes to the branch.
2. Open a pull request to the main branch.
3. GitHub Actions will automatically execute the test suite.

## Note

The majority of the tests will pass and some may fail because of accessibility issues and lighthouse performance audits. You can comment the test cases for accessibility and performance issue out to see all test pass in CI. But this is there to show how it works.

