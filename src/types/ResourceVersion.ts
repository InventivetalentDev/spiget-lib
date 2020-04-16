import Spiget from "../Spiget"
import SpigetType from "../SpigetType"
import ResourceRating from "./ResourceRating";

/* Generated on Thu, 16 Apr 2020 10:50:06 GMT*/
export default class ResourceVersion extends SpigetType {
  id: number;
  name: string;
  releaseDate: number;
  downloads: number;
  rating: ResourceRating;

  constructor(source: any, spiget: Spiget = new Spiget()) {
    super(source, spiget);
    if (source !== undefined) {
      if (source.hasOwnProperty("id")) this.id = source.id;
      if (source.hasOwnProperty("name")) this.name = source.name;
      if (source.hasOwnProperty("releaseDate")) this.releaseDate = source.releaseDate;
      if (source.hasOwnProperty("downloads")) this.downloads = source.downloads;
      if (source.hasOwnProperty("rating")) this.rating = source.rating;
    }
  }
}
