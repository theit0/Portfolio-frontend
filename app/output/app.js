"use strict";
///////// Practica POO con Typescript ////////
//////////Clases con atributos y metodos, modificadores
class Persona {
    constructor(id, password) {
        this.nombre = id;
        this.constraseña = password;
    }
    setPassword() {
        return `${this.nombre}, your password has been set to ${this.constraseña}`;
    }
}
let newPassword1 = new Persona('Theo', 'porfoliowebPOO');
const setNewPassword = newPassword1.setPassword();
console.log(setNewPassword);
/////////////////Herencia
class PersonaChange extends Persona {
    constructor(id, password, surname) {
        super(id, password);
        this.apellido = surname;
    }
    modifyPassword() {
        return `${this.nombre} ${this.apellido}, your password has been changed to ${this.constraseña}`;
    }
}
let newChangedPassword = new PersonaChange('Theo', 'constraseñaNueva123!', 'Pelegrina');
console.log(newChangedPassword.modifyPassword());
function mostrarGaseosa(refresco) {
    console.log(`Info: El nombre es ${refresco.nombre} y la marca es ${refresco.marca}`);
}
const miGaseosa = {
    nombre: "Coca Cola",
    marca: "Pepsico",
};
// no se puede modificar el nombre
/* miGaseosa.nombre = "Sprite"; */
mostrarGaseosa(miGaseosa);
class Wine {
    constructor(name, alcohol) {
        this.name = name;
        this.alcohol = alcohol;
    }
    showInfo() {
        return `Info: ${this.name} con ${this.alcohol}° de alcohol `;
    }
}
class Cocktail {
    constructor(name, alcohol, ingredients) {
        this.name = name;
        this.alcohol = alcohol;
        this.ingredients = ingredients;
    }
    showInfo() {
        const ingredientsInfo = this.ingredients.reduce((ac, e) => ac + " " + e + ", ", "");
        return `Info: ${this.name} ${this.alcohol}` +
            ` Ingredientes: ${ingredientsInfo}`;
    }
}
const margarita = new Cocktail("Margarita", 12.5, ["tequila", "limon", "sal", "soda", "hielo"]);
const rioja = new Wine("Vino Rioja", 14);
const malbec = new Wine("Vino Malbec", 16);
console.log(margarita.showInfo());
console.log(rioja.showInfo());
console.log(malbec.showInfo());
//para llevaralo a js hacemos "tsc"
