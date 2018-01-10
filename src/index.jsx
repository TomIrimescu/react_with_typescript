"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ReactDom = require("react-dom");
var Home_1 = require("./components/Home");
ReactDom.render(<Home_1.Home name='Max' age={27}/>, document.getElementById('app'));
