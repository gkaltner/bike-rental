import * as chai from 'chai';
import {BikeRental} from '../src/BikeRental';
import {HourRentalType} from '../src/HourRentalType';
import {DayRentalType} from '../src/DayRentalType';
import {WeekRentalType} from '../src/WeekRentalType';

const expect = chai.expect;

describe('Simple rental bike', () => {

  let bikeRental:BikeRental;

  beforeEach( () => {
     bikeRental = new BikeRental();
  });

  it('rent a bike only one hour' , () => {
    bikeRental.addRental(new HourRentalType());
    expect(bikeRental.calculatePrice()).to.equal(HourRentalType.DEFAULT_PRICE);
  });

  it('rent a bike three hours' , () => {
    bikeRental.addRental(new HourRentalType(3));
    expect(bikeRental.calculatePrice()).to.equal(HourRentalType.DEFAULT_PRICE * 3);
  });


  it('rent a bike only one day' , () => {
    bikeRental.addRental(new DayRentalType());
    expect(bikeRental.calculatePrice()).to.equal(DayRentalType.DEFAULT_PRICE);
  });

  it('rent a bike four days' , () => {
    bikeRental.addRental(new DayRentalType(4));
    expect(bikeRental.calculatePrice()).to.equal(DayRentalType.DEFAULT_PRICE * 4);
  });

  it('rent a bike only one day' , () => {
    bikeRental.addRental(new WeekRentalType());
    expect(bikeRental.calculatePrice()).to.equal(WeekRentalType.DEFAULT_PRICE);
  });

  it('rent a bike 2 weeks' , () => {
    bikeRental.addRental(new WeekRentalType(2));
    expect(bikeRental.calculatePrice()).to.equal(WeekRentalType.DEFAULT_PRICE * 2);
  });

  it('rent a bike 1 week and other bike 2 days' , () => {
    const expectValue = WeekRentalType.DEFAULT_PRICE + (DayRentalType.DEFAULT_PRICE * 2);
    bikeRental.addRental(new DayRentalType(2));
    bikeRental.addRental(new WeekRentalType(1));
    expect(bikeRental.calculatePrice()).to.equal(expectValue);
  });


  it('rent three bikes, one 1 week the second bike 3 days, and the last one 7 hours' , () => {
    const expectValue = WeekRentalType.DEFAULT_PRICE + (DayRentalType.DEFAULT_PRICE * 3) + (HourRentalType.DEFAULT_PRICE * 7);
    bikeRental.addRental(new HourRentalType(7));
    bikeRental.addRental(new DayRentalType(3));
    bikeRental.addRental(new WeekRentalType(1));
    expect(bikeRental.calculatePrice()).to.equal(expectValue);
  });

});
