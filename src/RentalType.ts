
export abstract class RentalType {
  protected amount : number; // how many rental type the custumer buy
  protected price: number; // price of the rental

  constructor(price: number, amount?: number){
    this.amount = amount || 1;
    this.price = price;
  }

  /**
   * get the price of the rental
   * @returns {number}
   */
  public getPrice(): number {
    return this.price * this.amount;
  };
}
