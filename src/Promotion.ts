import {RentalType} from './RentalType';

export class Promotion {

  public applyDiscount(price: number): number {
    return price;
  }

  public hasPromotionOnRentals(rentals: Array<RentalType>) {
    return false;
  }
}
