import { Injectable } from '@angular/core';
import { ClothingVendor } from '../../_model/ClothingVendor';

@Injectable({
  providedIn: 'root'
})
export abstract class AbstractClothingVendorService {

  	currentClothingVendor: ClothingVendor;

	constructor() { }
	getCurrentClothingVendor(): ClothingVendor {
		return this.currentClothingVendor;
	};
	setCurrentClothingVendor(clothingVendor: ClothingVendor) {
		this.currentClothingVendor = clothingVendor;
	};
	abstract getClothingVendors(): Promise<ClothingVendor[]>;
	abstract addClothingVendor(clothingVendor: ClothingVendor): Promise<Object>;
}
