
export class Clothing {
    type:number;
    typeName: string;
    size: number;
    sizeName:string;
    color: number;
    colorName:string;
	price:number;
    stockUnit: number;
    id?: number;
    
	constructor(id:number, type:number, size:number, color:number, price:number, stockUnit:number){

        this.id = id;
		this.type = type;
		this.size = size;
		this.color = color;
        this.price = price;
        this.stockUnit = stockUnit;
	}
}