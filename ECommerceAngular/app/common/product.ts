export class Product {
    constructor(
    public productid: number,
    public sku : string,
    public name: string,
    public description: string,
    public unitprice: number,
    public imageurl : string,
    public activebit : number,
    public unitsinstock: number,
    public datecreated: Date,
    public lastupdated : Date,
    public categoryid : number
    ){}
}
