import {RentalType} from './RentalType';

/**
 * Rental by hour, charging $5 per hour
 */
export class HourRentalType extends RentalType {
  static DEFAULT_PRICE = 5;

  constructor(hours?: number) {
    super(HourRentalType.DEFAULT_PRICE,hours);
  }
}
