import React from "react";
import ReactDOMClient from "react-dom/client";
import { Image } from "./screens/Image";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<Image />);
