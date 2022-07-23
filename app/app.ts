///////// Practica POO con Typescript ////////

//////////Clases con atributos y metodos, modificadores
class Persona {
    protected nombre:string;
    protected constraseña:any;

    constructor (id:string,password:any){
        this.nombre = id;
        this.constraseña = password;
    }
    public setPassword():any{
        return `${this.nombre}, your password has been set to ${this.constraseña}`
    }
}
let newPassword1 = new Persona('Theo','porfoliowebPOO');
const setNewPassword = newPassword1.setPassword();
console.log(setNewPassword);

/////////////////Herencia
class PersonaChange extends Persona {
    private apellido: string;
    constructor(id:string,password:any,surname:string){
        super(id,password);
        this.apellido = surname;
    }
    public modifyPassword():any{
        return `${this.nombre} ${this.apellido}, your password has been changed to ${this.constraseña}`
    }
}
let newChangedPassword = new PersonaChange('Theo','constraseñaNueva123!','Pelegrina');
console.log(newChangedPassword.modifyPassword()); 

//Types y modificador readonly(no se puede modificar una vez asignado) y ?(opcional)

type Gaseosa = {
    readonly nombre: string;
    marca: string;
    sabor?: string;
}

function mostrarGaseosa(refresco: Gaseosa):void{
   console.log(`Info: El nombre es ${refresco.nombre} y la marca es ${refresco.marca}`);
}

const miGaseosa: Gaseosa = {
    nombre: "Coca Cola",
    marca: "Pepsico",
}

// no se puede modificar el nombre
/* miGaseosa.nombre = "Sprite"; */ 

mostrarGaseosa(miGaseosa);

//Interfaces(contrato)

interface Drink {
    name: string;
}

interface AlcoholicDrink extends Drink {
    alcohol: number;

    showInfo():string
}

interface mixedDrink {
    ingredients: string[];
}

class Wine implements AlcoholicDrink{
    alcohol: number;
    name: string;
    constructor(name: string,alcohol: number){
        this.name = name;
        this.alcohol= alcohol;
    }
    showInfo(): string {
        return `Info: ${this.name} con ${this.alcohol}° de alcohol `;
    }
}

class Cocktail implements AlcoholicDrink, mixedDrink {
    alcohol: number;
    name: string;
    ingredients: string[];

    constructor(name:string, alcohol:number, ingredients: string[]){
        this.name = name;
        this.alcohol= alcohol;
        this.ingredients= ingredients;
    }

    showInfo():string {
        const ingredientsInfo= this.ingredients.reduce((ac,e)=>
        ac+ " "+e+", " , "");
        return `Info: ${this.name} ${this.alcohol}`+
        ` Ingredientes: ${ingredientsInfo}`;
    }
}
const margarita = new Cocktail("Margarita",12.5,["tequila","limon","sal","soda","hielo"])
const rioja = new Wine("Vino Rioja", 14);
const malbec = new Wine("Vino Malbec",16);

console.log(margarita.showInfo())
console.log(rioja.showInfo())
console.log(malbec.showInfo())

//para llevaralo a js hacemos "tsc"

