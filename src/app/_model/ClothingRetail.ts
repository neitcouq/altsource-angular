
export class ClothingRetail {
    id:number;
    clothingVendorId:number;
    price:number;
    vendorId:number;

	constructor(id:number, clothingVendorId:number,price:number,vendorId:number){
        this.id = id;
        this.clothingVendorId = clothingVendorId;        
        this.price = price;
        this.vendorId = vendorId;
	}
}