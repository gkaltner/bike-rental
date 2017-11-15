import {Promotion} from './Promotion';
import {RentalType} from './RentalType';

export class FamilyPromotion extends Promotion{
  static DISCOUNT = 30;
  rentalMin = 3; //default value
  rentalMax = 5; //default value

  public applyDiscount(price: number): number {
    return price - (price * FamilyPromotion.DISCOUNT / 100) ;
  }

  public hasPromotionOnRentals(rentals: Array<RentalType>): boolean {
    return rentals.length >= this.rentalMin && rentals.length <= this.rentalMax;
  }
}
