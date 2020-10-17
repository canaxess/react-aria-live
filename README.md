# About
This communicates to an API endpoint on the Node.js server and returns JSON containing JavaScript and CSS framework values. Those values are rendered to the screen with a reusable React aria-live component.

```javascript
{"JSframework":"REACT","CSSframework":"BOOTSTRAP","CANAXESS":"http://www.canaxess.com.au"}
```

## How it works

If the CSS framework is `Bootstrap`, three boxes use the alert colours from Bootstrap CSS. If the CSS framework is `Foundation` no colouring is applied. JS framework values are for reference and provide no functionality.

Basic telemetry is provided in the catch of the fetch() method. If for whatever reason the communication is lost, the error is output into the first box.

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

## Prerequisites
* ensure CORS policy is updated to deployed URL on node.js server
* ensure create-react-app buildpack is used and not node.js [https://github.com/mars/create-react-app-buildpack.git](https://github.com/mars/create-react-app-buildpack.git)

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
