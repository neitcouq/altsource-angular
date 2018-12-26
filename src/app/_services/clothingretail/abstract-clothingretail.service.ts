import { Injectable } from '@angular/core';
import { ClothingRetail } from '../../_model/ClothingRetail';

@Injectable({
  providedIn: 'root'
})
export abstract class AbstractClothingRetailService {

  	currentClothingRetail: ClothingRetail;

	constructor() { }
	getCurrentClothingRetail(): ClothingRetail {
		return this.currentClothingRetail;
	};
	setCurrentClothingRetail(clothingRetail: ClothingRetail) {
		this.currentClothingRetail = clothingRetail;
	};
	abstract getClothingRetails(): Promise<ClothingRetail[]>;
	abstract addClothingRetail(clothingRetail: ClothingRetail): Promise<Object>;
}
