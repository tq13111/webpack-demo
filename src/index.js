import x from "./x.js";
import png from "./assets/1.jpg";
const div = document.getElementById("app");
div.innerHTML = `<img width="300px" src="${png}"></img>`;
const button = document.createElement("button");
button.innerText = "懒加载";
button.onclick = () => {
  const promise = import("./lazy.js");
    promise.then((module) => {
      const fn = module.default;
      fn()
    });
};
div.appendChild(button);
