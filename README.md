# About
This communicates to an API endpoint on the [Node.js server](https://github.com/canaxess/immersive-reader) and returns JSON containing JavaScript and CSS framework values. Those values are rendered to the screen with a reusable [React aria-live component](https://github.com/canaxess/aria-live-component).

```javascript
{"JSframework":"REACT","CSSframework":"BOOTSTRAP","CANAXESS":"http://www.canaxess.com.au"}
```

## How it works
If the CSS framework is `Bootstrap` or `Foundation`, three boxes use the alert colours from the respective CSS libraries. Conditional rendering is applied to reference the CSS in the returned JSON, with a timestamp added to prevent caching. JS framework values are for reference and provide no functionality.

```javascript
if (cssframework === "BOOTSTRAP") {
    return (
        <div className="grid">
        <link rel="stylesheet" type="text/css" 
        href={"https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css?" 
        + milliseconds} />
```

Basic telemetry is provided in the catch of the `fetch()` method. If for whatever reason communication is lost, the error is caught and output into the first box.

```javascript
fetch("https://canaxess-immersive-reader.herokuapp.com/getframework/")
    .then((response) => response.json())
    .then((data) => {
    this.setState({
        sJSframework: data.JSframework,
        sCSSframework: data.CSSframework
        });
    })
    .catch((error) => this.setState({ APIerror: error.toString()}))
```

## Layout
Presentation uses CSS grid beginning at grid-column 3 with a minimum size of `200px` and a flex factor of `1fr`.

```css
.grid > div:first-of-type {
    grid-column-start: 3;
}

.grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-gap: 1rem;
}
```

## CI/CD Integration
`git push` triggers an automatic deployment to [Heroku](https://react-aria-live-component.herokuapp.com/)

## API endpoints
To set environment variables for the Node process.
* [/setframework?FRAMEWORK=bootstrap](https://canaxess-immersive-reader.herokuapp.com/setframework?FRAMEWORK=bootstrap)
* [/setframework?FRAMEWORK=foundation](https://canaxess-immersive-reader.herokuapp.com/setframework?FRAMEWORK=foundation)
* [/setframework?FRAMEWORK=react](https://canaxess-immersive-reader.herokuapp.com/setframework?FRAMEWORK=react)
* [/setframework?FRAMEWORK=angular](https://canaxess-immersive-reader.herokuapp.com/setframework?FRAMEWORK=angular)

## Prerequisites
* Ensure CORS policy is updated to deployed URL on Node.js server
* Ensure [create-react-app buildpack](https://github.com/mars/create-react-app-buildpack.git) is used for Heroku and not Node.js

## Development Environment
* `yarn start` Runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
* `yarn build` Builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance. The build is minified and the filenames include the hashes.
