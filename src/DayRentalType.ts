import {RentalType} from './RentalType';

/**
 * Rental by hour, charging $20 per day
 */
export class DayRentalType extends RentalType{
  static DEFAULT_PRICE = 20;

  constructor(days?: number) {
    super(DayRentalType.DEFAULT_PRICE,days);
  }
}
