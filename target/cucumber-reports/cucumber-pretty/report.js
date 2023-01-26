$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("search.feature");
formatter.feature({
  "line": 1,
  "name": "Duck Duck Go Search",
  "description": "",
  "id": "duck-duck-go-search",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "I want to search on duck-duck-go site",
  "description": "",
  "id": "duck-duck-go-search;i-want-to-search-on-duck-duck-go-site",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I am on the website duck-duck-go",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I enter the \"\u003ckeyword\u003e\" to search",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "I navigate to videos search",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I should get minimum 2 search results",
  "keyword": "Then "
});
formatter.examples({
  "line": 9,
  "name": "",
  "description": "",
  "id": "duck-duck-go-search;i-want-to-search-on-duck-duck-go-site;",
  "rows": [
    {
      "cells": [
        "keyword"
      ],
      "line": 10,
      "id": "duck-duck-go-search;i-want-to-search-on-duck-duck-go-site;;1"
    },
    {
      "cells": [
        "java"
      ],
      "line": 11,
      "id": "duck-duck-go-search;i-want-to-search-on-duck-duck-go-site;;2"
    },
    {
      "cells": [
        "webdriver"
      ],
      "line": 12,
      "id": "duck-duck-go-search;i-want-to-search-on-duck-duck-go-site;;3"
    },
    {
      "cells": [
        "docker"
      ],
      "line": 13,
      "id": "duck-duck-go-search;i-want-to-search-on-duck-duck-go-site;;4"
    },
    {
      "cells": [
        "kubernetes"
      ],
      "line": 14,
      "id": "duck-duck-go-search;i-want-to-search-on-duck-duck-go-site;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1138986708,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "I want to search on duck-duck-go site",
  "description": "",
  "id": "duck-duck-go-search;i-want-to-search-on-duck-duck-go-site;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I am on the website duck-duck-go",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I enter the \"java\" to search",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "I navigate to videos search",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I should get minimum 2 search results",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchSteps.launchSite()"
});
formatter.result({
  "duration": 3652328625,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "java",
      "offset": 13
    }
  ],
  "location": "SearchSteps.enterKeyword(String)"
});
formatter.result({
  "duration": 7838220209,
  "status": "passed"
});
formatter.match({
  "location": "SearchSteps.navigateTovideos()"
});
formatter.result({
  "duration": 176320084,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 21
    }
  ],
  "location": "SearchSteps.verifySearchResults(int)"
});
formatter.result({
  "duration": 693216166,
  "status": "passed"
});
formatter.after({
  "duration": 171143125,
  "status": "passed"
});
formatter.before({
  "duration": 479439792,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "I want to search on duck-duck-go site",
  "description": "",
  "id": "duck-duck-go-search;i-want-to-search-on-duck-duck-go-site;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I am on the website duck-duck-go",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I enter the \"webdriver\" to search",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "I navigate to videos search",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I should get minimum 2 search results",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchSteps.launchSite()"
});
formatter.result({
  "duration": 1948134958,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "webdriver",
      "offset": 13
    }
  ],
  "location": "SearchSteps.enterKeyword(String)"
});
formatter.result({
  "duration": 2349047209,
  "status": "passed"
});
formatter.match({
  "location": "SearchSteps.navigateTovideos()"
});
formatter.result({
  "duration": 111942250,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 21
    }
  ],
  "location": "SearchSteps.verifySearchResults(int)"
});
formatter.result({
  "duration": 581689666,
  "status": "passed"
});
formatter.after({
  "duration": 78589625,
  "status": "passed"
});
formatter.before({
  "duration": 389379042,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "I want to search on duck-duck-go site",
  "description": "",
  "id": "duck-duck-go-search;i-want-to-search-on-duck-duck-go-site;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I am on the website duck-duck-go",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I enter the \"docker\" to search",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "I navigate to videos search",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I should get minimum 2 search results",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchSteps.launchSite()"
});
formatter.result({
  "duration": 3196129250,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "docker",
      "offset": 13
    }
  ],
  "location": "SearchSteps.enterKeyword(String)"
});
formatter.result({
  "duration": 3888096583,
  "status": "passed"
});
formatter.match({
  "location": "SearchSteps.navigateTovideos()"
});
formatter.result({
  "duration": 101467083,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 21
    }
  ],
  "location": "SearchSteps.verifySearchResults(int)"
});
formatter.result({
  "duration": 574744167,
  "status": "passed"
});
formatter.after({
  "duration": 78875792,
  "status": "passed"
});
formatter.before({
  "duration": 343947916,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "I want to search on duck-duck-go site",
  "description": "",
  "id": "duck-duck-go-search;i-want-to-search-on-duck-duck-go-site;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I am on the website duck-duck-go",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I enter the \"kubernetes\" to search",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "I navigate to videos search",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I should get minimum 2 search results",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchSteps.launchSite()"
});
formatter.result({
  "duration": 2166522041,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "kubernetes",
      "offset": 13
    }
  ],
  "location": "SearchSteps.enterKeyword(String)"
});
formatter.result({
  "duration": 3790074542,
  "status": "passed"
});
formatter.match({
  "location": "SearchSteps.navigateTovideos()"
});
formatter.result({
  "duration": 103811375,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 21
    }
  ],
  "location": "SearchSteps.verifySearchResults(int)"
});
formatter.result({
  "duration": 576898125,
  "status": "passed"
});
formatter.after({
  "duration": 89764750,
  "status": "passed"
});
});