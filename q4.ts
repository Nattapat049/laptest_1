class fitness{
    name: string;
    age:number;
    price:number;

    constructor(n: string , a: number, p:number){
        this.name = n;
        this.age = a;
        this.price = p;
    }
    show():void{
        console.log(`Name: ${this.name}, Age ${this.age}, Price ${this.price}`);
    }
}