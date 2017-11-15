import {RentalType} from './RentalType';

/**
 * Rental by hour, charging $60 per week
 */
export class WeekRentalType extends RentalType {
  static DEFAULT_PRICE = 60;

  constructor(weeks?: number) {
    super(WeekRentalType.DEFAULT_PRICE,weeks);
  }
}
