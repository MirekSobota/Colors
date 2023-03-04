{
    let colors = [];

    const addNewColor = (newColorInput) => {
        colors = [
            ...colors,
            { content: newColorInput }
        ];
        render();
    }

    const render = () => {
        let htmlString = "";

        for (const color of colors){
            htmlString += `
            <li class="colorList">
            <span class="square" style="background: ${color.content};"></span>
            </li>
            `;
        };

        document.querySelector(".js-color").innerHTML = htmlString;
    };

    const onFormSubmit = (event) => {
        event.preventDefault()

        const newColorInputElement = document.querySelector(".js-colorInput");
        const newColorInput = newColorInputElement.value.trim();

        if (newColorInput !== "") {
            addNewColor(newColorInput);
        }
        newColorInputElement.focus();
        newColorInputElement.value = "";
    };

    const init = () => {
        render();
        const form = document.querySelector(".js-form");

        form.addEventListener("submit", onFormSubmit);



    };

    init();
}