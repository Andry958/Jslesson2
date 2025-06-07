// class car {
//     constructor(model, year, color, electro) {
//         this.model = model;
//         this.year = year;
//         this.color = color;
//         this.electro = electro;
//     }

//     get electroStatus() {
//         return this.electro ? 'Yes' : 'No';
//     }

//     toHTMLRow() {
//         return `<tr>
//                     <td>${this.model}</td>
//                     <td>${this.year}</td>
//                     <td>${capitalizeFirstLetter(this.color)}</td>
//                     <td>${this.electroStatus}</td>
//                 </tr>`;
//     }
// }

// function capitalizeFirstLetter(str) {
//     if (!str) return '';
//     return str.charAt(0).toUpperCase() + str.slice(1);
// }

class product{
    constructor(name,picture){
        this.name = name
        this.picture = picture
    }
    toHTMLRow() {
               return `
                <tr onclick="handleRowClick('${this.name}')">
                    <td><img src="${this.picture}" width="50%" height="70%" /></td>
                    <td>${this.name}</td>
                </tr>`;
            }
}