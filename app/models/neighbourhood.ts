import { Point } from "geojson";

interface Neighbourhood {
  id: number; // Since 'id' is a serial, it will be a number in TypeScript
  name: string | null; // character varying maps to string
  country: string | null;
  altitude: number | null; // numeric maps to number
  location: Point | null; // 'geography' type can be represented as 'any' or a more specific type if needed
}

export default Neighbourhood;
