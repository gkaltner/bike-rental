import * as chai from 'chai';
import {BikeRental} from '../src/BikeRental';
import {HourRentalType} from '../src/HourRentalType';
import {DayRentalType} from '../src/DayRentalType';
import {WeekRentalType} from '../src/WeekRentalType';
import {FamilyPromotion} from '../src/FamilyPromotion';
import apply = Reflect.apply;

const expect = chai.expect;

describe('Promotion rental bike', () => {

  let bikeRental:BikeRental;

  beforeEach( () => {
    bikeRental = new BikeRental();
    bikeRental.addPromotion(new FamilyPromotion());
  });

  it('rent a bike for a day with Family Promotion' , () => {
    bikeRental.addRental(new DayRentalType());
    expect(bikeRental.calculatePrice()).to.equal(DayRentalType.DEFAULT_PRICE);
  });


  it('rent three bikes, one 1 week the second bike 3 days, and the last one 7 hours with family promotion' , () => {
    const expectValue = WeekRentalType.DEFAULT_PRICE + (DayRentalType.DEFAULT_PRICE * 3) + (HourRentalType.DEFAULT_PRICE * 7);
    const expectPriceWithDiscount = expectValue - (expectValue * FamilyPromotion.DISCOUNT / 100) ;
    bikeRental.addRental(new HourRentalType(7));
    bikeRental.addRental(new DayRentalType(3));
    bikeRental.addRental(new WeekRentalType(1));
    expect(bikeRental.calculatePrice()).to.equal(expectPriceWithDiscount);
  });


  it('rent four bikes, two 1 week the second bike 3 days, and the last one 7 hours with family promotion' , () => {
    const expectValue = (WeekRentalType.DEFAULT_PRICE * 2) + (DayRentalType.DEFAULT_PRICE * 3) + (HourRentalType.DEFAULT_PRICE * 7);
    const expectPriceWithDiscount = expectValue - (expectValue * FamilyPromotion.DISCOUNT / 100) ;
    bikeRental.addRental(new HourRentalType(7));
    bikeRental.addRental(new DayRentalType(3));
    bikeRental.addRental(new WeekRentalType(1));
    bikeRental.addRental(new WeekRentalType(1));
    expect(bikeRental.calculatePrice()).to.equal(expectPriceWithDiscount);
  });


  it('rent five bikes, two 1 week the second bike 3 days, and the last two 7 hours with family promotion' , () => {
    const expectValue = (WeekRentalType.DEFAULT_PRICE * 2) + (DayRentalType.DEFAULT_PRICE * 3) + (HourRentalType.DEFAULT_PRICE * 7 * 2);
    const expectPriceWithDiscount = expectValue - (expectValue * FamilyPromotion.DISCOUNT / 100) ;
    bikeRental.addRental(new HourRentalType(7));
    bikeRental.addRental(new HourRentalType(7));
    bikeRental.addRental(new DayRentalType(3));
    bikeRental.addRental(new WeekRentalType(1));
    bikeRental.addRental(new WeekRentalType(1));
    expect(bikeRental.calculatePrice()).to.equal(expectPriceWithDiscount);
  });

  it("rent six bikes, three 1 week the second bike 3 days, and the last two 7 hours with family promotion, but isn't going to be applyed" , () => {
    const expectValue = (WeekRentalType.DEFAULT_PRICE * 3) + (DayRentalType.DEFAULT_PRICE * 3) + (HourRentalType.DEFAULT_PRICE * 7 * 2);
    bikeRental.addRental(new HourRentalType(7));
    bikeRental.addRental(new HourRentalType(7));
    bikeRental.addRental(new DayRentalType(3));
    bikeRental.addRental(new WeekRentalType(1));
    bikeRental.addRental(new WeekRentalType(1));
    bikeRental.addRental(new WeekRentalType(1));
    expect(bikeRental.calculatePrice()).to.equal(expectValue);
  });
});
