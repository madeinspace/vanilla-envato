# Envato Front End Coding Test

Make sure you read **all** of this document carefully, and follow the guidelines in it. Pay particular attention to the "What We Care About" section.

## The task

Build a static page (`index.html`) that fetches last week's popular items from the [Envato Market API](http://marketplace.envato.com/api/documentation) and displays them according to `mockup.png`.

Your data source is `http://marketplace.envato.com/api/edge/popular:themeforest.json`. CORS is enabled on this API.

- List items in order of rating, from highest to lowest.

- Show each item's thumbnail image, name and rating. The name and image should link to the item's URL.

- 5-star items should have a yellow background, as shown in the mockup.

- The page should be responsive.

- Clicking an item's `remove` link should remove it from the list (purely client side, this doesn't need to be communicated to the server or maintained across page reloads).

## Getting started

We've supplied a `index.html` to get you started. You will need to expand on this as well as create two supporting files (`style.css` and `script.js`) for your styles and JavaScript code respectively.

Logo image assets that you may wish to use or edit are located in `_assets`.

### Tooling

You're probably used to using build tools, task runners, module bundlers, preprocessors & postprocessors. We love & use those things too, but for the purposes of this test we want to see how you approach the problem with the basics - 3 handcoded files (HTML, CSS and JavaScript) that browsers can run natively.

We encourage you to add comments explaining how your solution might differ if more tooling was available.

When reviewing your submission, we'll start a [static server](https://www.npmjs.com/package/http-server) in the `app` directory.

### Third party libraries

As with tooling above, you might be used to working with libraries & frameworks. For this test, avoid using any third party libraries. We want to see *your* code and *your* approach to the problem, rather than seeing how well you know a particular library or framework.

We encourage you to add comments explaining how your solution might differ if your solution used libraries or frameworks.

### Tests

We've also provided a `tests.html` that includes the simple [expect](https://github.com/mjackson/expect) testing library. Where appropriate, write unit tests for your JavaScript in that file.

## What We Care About

We're interested in your method and how you approach the problem just as much as we're interested in the end result. We'll go through your code with you afterwards, and you can talk to us about how you tackled it, why you chose the approach you did, etc.

Here's what you should aim for:

- Clean, readable code that you'd expect to see in a real project. Would we want to work with your code as part of a bigger codebase?

- Good use of current front end performance best practices.

- Good cross-browser compatibility in the latest versions of popular browsers (Chrome, Firefox, Edge, Safari, any others that you consider important). We encourage you to add comments explaining your approach to this.

- Solid testing approach.

- Extensible code; when you come back in person we might ask you to add features.

- **Use git!** This is already a git repo. Commit small changes to it often so we can see your approach, and progress. Include the .git directory in the packaged .tar.gz file you send to us.

We haven't hidden any nasty tricks in the test. Don't overthink it. Just write nice, solid code.

## Submitting The Test

Ensure the Git repository is clean—all code is committed and any unwanted files are removed. Then, in your project directory, run:

```
tar -czvf firstname_lastname.tar.gz .
```

Then email the generated tar.gz file back to the person that sent you the test.
