import {RentalType} from './RentalType';
import {Promotion} from './Promotion';

export class BikeRental {
  private rentals: Array<RentalType> = [];
  private promotions:  Array<Promotion> = [];

  /**
   * Add new promotion to the Bike Rental
   * @param {Promotion} promotion
   */
  public addPromotion(promotion: Promotion) {
    this.promotions.push(promotion);
  }


  private applyPromotions(price): number{
    for(const promotion of this.promotions){
      if(promotion.hasPromotionOnRentals(this.rentals)) {
        price = promotion.applyDiscount(price);
      }
    }
    return price;
  }

  /**
   * add new type rental to the Bike Rental
   * @param {RentalType} rentalType
   */
  public addRental(rentalType: RentalType){
    this.rentals.push(rentalType);
  }

  /**
   * Calculate the total rental price.
   * @returns {number}
   */
  public calculatePrice(): number{
    let price: number = 0;
    for(const rental of this.rentals){
      price += rental.getPrice();
    }
    return this.applyPromotions(price);
  }
}
