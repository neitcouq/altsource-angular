import { Injectable } from '@angular/core';
import { Clothing } from '../../_model/Clothing';

@Injectable({
  providedIn: 'root'
})
export abstract class AbstractClothingService {

  	currentClothing: Clothing;

	constructor() { }
	getCurrentClothing(): Clothing {
		return this.currentClothing;
	};
	setCurrentClothing(clothing: Clothing) {
		this.currentClothing = clothing;
	};
	abstract getClothings(): Promise<Clothing[]>;
	abstract addClothing(clothing: Clothing): Promise<Object>;
}
