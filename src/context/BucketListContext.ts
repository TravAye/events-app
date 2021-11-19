import { createContext } from "react";
import Event from "../models/Event";

interface BucketListContextModel {
  bucketList: Event[];
  setBucketList: (events: Event[]) => void;
  addToBucket: (event: Event) => void;
  removeFromBucket: (id: string) => void;
  isInBucket: (id: string) => boolean;
}

const defaultValues: BucketListContextModel = {
  bucketList: [],
  setBucketList: () => {},
  addToBucket: () => {},
  removeFromBucket: () => {},
  isInBucket: () => false,
};

const BucketListContext = createContext(defaultValues);

export default BucketListContext;
