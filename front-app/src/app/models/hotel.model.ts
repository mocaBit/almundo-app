export class Hotel {
  _id: string;
  name: string;
  stars: number;
  price: number;
  image: string;
  amenities: string[];

  constructor() {
      this.name = '';
      this.stars = 0;
      this.price = 0;
      this.image = '';
      this.amenities = [];
  }
}

export default Hotel;
