const button = document.createElement("button");
button.innerText = "Picture";

button.onclick = () => {
    System.import('./image_viewer').then(module => {
        module.default();
        console.log("world");
    });
}

document.body.appendChild(button);
