class car {
    constructor(model, year, color, electro) {
        this.model = model;
        this.year = year;
        this.color = color;
        this.electro = electro;
    }

    get electroStatus() {
        return this.isUsed ? 'Yes' : 'No';
    }

    toHTMLRow() {
        return `<tr>
                    <td>${this.model}</td>
                    <td>${this.year}</td>
                    <td>${capitalizeFirstLetter(this.color)}</td>
                    <td>${this.electro}</td>
                </tr>`;
    }
}

function capitalizeFirstLetter(str) {
    if (!str) return '';
    return str.charAt(0).toUpperCase() + str.slice(1);
}