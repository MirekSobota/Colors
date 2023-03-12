{
  let colors = [];

  const cssColorsList = [
    { name: "AliceBlue", hex: "#F0F8FF", isInList: true },
    { name: "AntiqueWhite", hex: "#FAEBD7", isInList: true },
    { name: "Aqua", hex: "#00FFFF", isInList: true },
    { name: "Aquamarine", hex: "#7FFFD4", isInList: true },
    { name: "Azure", hex: "#F0FFFF", isInList: true },
    { name: "Beige", hex: "#F5F5DC", isInList: true },
    { name: "Bisque", hex: "#FFE4C4", isInList: true },
    { name: "Black", hex: "#000000", isInList: true },
    { name: "BlanchedAlmond", hex: "#FFEBCD", isInList: true },
    { name: "Blue", hex: "#0000FF", isInList: true },
    { name: "BlueViolet", hex: "#8A2BE2", isInList: true },
    { name: "Brown", hex: "#A52A2A", isInList: true },
    { name: "BurlyWood", hex: "#DEB887", isInList: true },
    { name: "CadetBlue", hex: "#5F9EA0", isInList: true },
    { name: "Chartreuse", hex: "#7FFF00", isInList: true },
    { name: "Chocolate", hex: "#D2691E", isInList: true },
    { name: "Coral", hex: "#FF7F50", isInList: true },
    { name: "CornflowerBlue", hex: "#6495ED", isInList: true },
    { name: "Cornsilk", hex: "#FFF8DC", isInList: true },
    { name: "Crimson", hex: "#DC143C", isInList: true },
    { name: "Cyan", hex: "#00FFFF", isInList: true },
    { name: "DarkBlue", hex: "#00008B", isInList: true },
    { name: "DarkCyan", hex: "#008B8B", isInList: true },
    { name: "DarkGoldenRod", hex: "#B8860B", isInList: true },
    { name: "DarkGray", hex: "#A9A9A9", isInList: true },
    { name: "DarkGrey", hex: "#A9A9A9", isInList: true },
    { name: "DarkGreen", hex: "#006400", isInList: true },
    { name: "DarkKhaki", hex: "#BDB76B", isInList: true },
    { name: "DarkMagenta", hex: "#8B008B", isInList: true },
    { name: "DarkOliveGreen", hex: "#556B2F", isInList: true },
    { name: "DarkOrange", hex: "#FF8C00", isInList: true },
    { name: "DarkOrchid", hex: "#9932CC", isInList: true },
    { name: "DarkRed", hex: "#8B0000", isInList: true },
    { name: "DarkSalmon", hex: "#E9967A", isInList: true },
    { name: "DarkSeaGreen", hex: "#8FBC8F", isInList: true },
    { name: "DarkSlateBlue", hex: "#483D8B", isInList: true },
    { name: "DarkSlateGray", hex: "#2F4F4F", isInList: true },
    { name: "DarkSlateGrey", hex: "#2F4F4F", isInList: true },
    { name: "DarkTurquoise", hex: "#00CED1", isInList: true },
    { name: "DarkViolet", hex: "#9400D3", isInList: true },
    { name: "DeepPink", hex: "#FF1493", isInList: true },
    { name: "DeepSkyBlue", hex: "#00BFFF", isInList: true },
    { name: "DimGray", hex: "#696969", isInList: true },
    { name: "DodgerBlue", hex: "#1E90FF", isInList: true },
    { name: "FireBrick", hex: "#B22222", isInList: true },
    { name: "FloralWhite", hex: "#FFFAF0", isInList: true },
    { name: "ForestGreen", hex: "#228B22", isInList: true },
    { name: "Fuchsia", hex: "#FF00FF", isInList: true },
    { name: "Gainsboro", hex: "#DCDCDC", isInList: true },
    { name: "GhostWhite", hex: "#F8F8FF", isInList: true },
    { name: "Gold", hex: "#FFD700", isInList: true },
    { name: "GoldenRod", hex: "#DAA520", isInList: true },
    { name: "Gray", hex: "#808080", isInList: true },
    { name: "Grey", hex: "#808080", isInList: true },
    { name: "Green", hex: "#008000", isInList: true },
    { name: "GreenYellow", hex: "#ADFF2F", isInList: true },
    { name: "HoneyDew", hex: "#F0FFF0", isInList: true },
    { name: "HotPink", hex: "#FF69B4", isInList: true },
    { name: "IndianRed", hex: "#CD5C5C", isInList: true },
    { name: "Indigo", hex: "#4B0082", isInList: true },
    { name: "Ivory", hex: "#FFFFF0", isInList: true },
    { name: "Khaki", hex: "#F0E68C", isInList: true },
    { name: "Lavender", hex: "#E6E6FA", isInList: true },
    { name: "LavenderBlush", hex: "#FFF0F5", isInList: true },
    { name: "LawnGreen", hex: "#7CFC00", isInList: true },
    { name: "LemonChiffon", hex: "#FFFACD", isInList: true },
    { name: "LightBlue", hex: "#ADD8E6", isInList: true },
    { name: "LightCoral", hex: "#F08080", isInList: true },
    { name: "LightCyan", hex: "#E0FFFF", isInList: true },
    { name: "LightGoldenRodYellow", hex: "#FAFAD2", isInList: true },
    { name: "LightGray", hex: "#D3D3D3", isInList: true },
    { name: "LightGrey", hex: "#D3D3D3", isInList: true },
    { name: "LightGreen", hex: "#90EE90", isInList: true },
    { name: "LightPink", hex: "#FFB6C1", isInList: true },
    { name: "LightSalmon", hex: "#FFA07A", isInList: true },
    { name: "LightSeaGreen", hex: "#20B2AA", isInList: true },
    { name: "LightSkyBlue", hex: "#87CEFA", isInList: true },
    { name: "LightSlateGray", hex: "#778899", isInList: true },
    { name: "LightSlateGrey", hex: "#778899", isInList: true },
    { name: "LightSteelBlue", hex: "#B0C4DE", isInList: true },
    { name: "LightYellow", hex: "#FFFFE0", isInList: true },
    { name: "Lime", hex: "#00FF00", isInList: true },
    { name: "LimeGreen", hex: "#32CD32", isInList: true },
    { name: "Linen", hex: "#FAF0E6", isInList: true },
    { name: "Magenta", hex: "#FF00FF", isInList: true },
    { name: "Maroon", hex: "#800000", isInList: true },
    { name: "MediumAquaMarine", hex: "#66CDAA", isInList: true },
    { name: "MediumBlue", hex: "#0000CD", isInList: true },
    { name: "MediumOrchid", hex: "#BA55D3", isInList: true },
    { name: "MediumPurple", hex: "#9370DB", isInList: true },
    { name: "MediumSeaGreen", hex: "#3CB371", isInList: true },
    { name: "MediumSlateBlue", hex: "#7B68EE", isInList: true },
    { name: "MediumSpringGreen", hex: "#00FA9A", isInList: true },
    { name: "MediumTurquoise", hex: "#48D1CC", isInList: true },
    { name: "MediumVioletRed", hex: "#C71585", isInList: true },
    { name: "MidnightBlue", hex: "#191970", isInList: true },
    { name: "MintCream", hex: "#F5FFFA", isInList: true },
    { name: "MistyRose", hex: "#FFE4E1", isInList: true },
    { name: "Moccasin", hex: "#FFE4B5", isInList: true },
    { name: "NavajoWhite", hex: "#FFDEAD", isInList: true },
    { name: "Navy", hex: "#000080", isInList: true },
    { name: "OldLace", hex: "#FDF5E6", isInList: true },
    { name: "Olive", hex: "#808000", isInList: true },
    { name: "OliveDrab", hex: "#6B8E23", isInList: true },
    { name: "Orange", hex: "#FFA500", isInList: true },
    { name: "OrangeRed", hex: "#FF4500", isInList: true },
    { name: "Orchid", hex: "#DA70D6", isInList: true },
    { name: "PaleGoldenRod", hex: "#EEE8AA", isInList: true },
    { name: "PaleGreen", hex: "#98FB98", isInList: true },
    { name: "PaleTurquoise", hex: "#AFEEEE", isInList: true },
    { name: "PaleVioletRed", hex: "#DB7093", isInList: true },
    { name: "PapayaWhip", hex: "#FFEFD5", isInList: true },
    { name: "PeachPuff", hex: "#FFDAB9", isInList: true },
    { name: "Peru", hex: "#CD853F", isInList: true },
    { name: "Pink", hex: "#FFC0CB", isInList: true },
    { name: "Plum", hex: "#DDA0DD", isInList: true },
    { name: "PowderBlue", hex: "#B0E0E6", isInList: true },
    { name: "Purple", hex: "#800080", isInList: true },
    { name: "RebeccaPurple", hex: "#663399", isInList: true },
    { name: "Red", hex: "#FF0000", isInList: true },
    { name: "RosyBrown", hex: "#BC8F8F", isInList: true },
    { name: "RoyalBlue", hex: "#4169E1", isInList: true },
    { name: "SaddleBrown", hex: "#8B4513", isInList: true },
    { name: "Salmon", hex: "#FA8072", isInList: true },
    { name: "SandyBrown", hex: "#F4A460", isInList: true },
    { name: "SeaGreen", hex: "#2E8B57", isInList: true },
    { name: "SeaShell", hex: "#FFF5EE", isInList: true },
    { name: "Sienna", hex: "#A0522D", isInList: true },
    { name: "Silver", hex: "#C0C0C0", isInList: true },
    { name: "SkyBlue", hex: "#87CEEB", isInList: true },
    { name: "SlateBlue", hex: "#6A5ACD", isInList: true },
    { name: "SlateGray", hex: "#708090", isInList: true },
    { name: "SlateGrey", hex: "#708090", isInList: true },
    { name: "Snow", hex: "#FFFAFA", isInList: true },
    { name: "SpringGreen", hex: "#00FF7F", isInList: true },
    { name: "SteelBlue", hex: "#4682B4", isInList: true },
    { name: "Tan", hex: "#D2B48C", isInList: true },
    { name: "Teal", hex: "#008080", isInList: true },
    { name: "Thistle", hex: "#D8BFD8", isInList: true },
    { name: "Tomato", hex: "#FF6347", isInList: true },
    { name: "Turquoise", hex: "#40E0D0", isInList: true },
    { name: "Violet", hex: "#EE82EE", isInList: true },
    { name: "Wheat", hex: "#F5DEB3", isInList: true },
    { name: "White", hex: "#FFFFFF", isInList: true },
    { name: "WhiteSmoke", hex: "#F5F5F5", isInList: true },
    { name: "Yellow", hex: "#FFFF00", isInList: true },
    { name: "YellowGreen", hex: "#9ACD32", isInList: true },
  ];

  const addNewColor = (newColorInput) => {
    const isColorValid = cssColorsList.some(({name}) => name.toLocaleLowerCase() === newColorInput.toLocaleLowerCase());
    if(isColorValid)
    {
        colors = [...colors, { content: newColorInput }];
    render();
    }
    
  };

  const render = () => {
    let htmlString = "";
   
      for (const color of colors) {
        htmlString += `
                <li class="colorList">    
                 <span class="text">${color.content}</span>           
                 <span class="square" style="background: ${color.content}"></span>                       
                </li>
                `;
      }

      document.querySelector(".js-color").innerHTML = htmlString;
     
  };

  const onFormSubmit = (event) => {
    event.preventDefault();

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
