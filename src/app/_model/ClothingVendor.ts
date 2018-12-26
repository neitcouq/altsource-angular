
export class ClothingVendor {

    clothingId:number;
    price:number;
    unit:number;
    vendorId:number;
    id:number;

	constructor(id:number,clothingId:number,price:number,unit:number,vendorId:number){
        this.clothingId= clothingId;
        this.price = price;
        this.unit = unit;
        this.vendorId = vendorId;
        this.id = id;
	}
}