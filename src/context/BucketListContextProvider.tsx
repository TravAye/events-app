import { ReactNode, useState } from "react";
import Event from "../models/Event";
import BucketListContext from "./BucketListContext";

interface Props {
  children: ReactNode;
}

const BucketListContextProvider = ({ children }: Props) => {
  const [bucketList, setBucketList] = useState<Event[]>([]);
  const addToBucket = (event: Event): void => {
    setBucketList((prev) => [...prev, event]);
  };
  const removeFromBucket = (id: string): void => {
    setBucketList((prev) => {
      const index: number = prev.findIndex((item) => item.id === id);
      return [...prev.slice(0, index), ...prev.slice(index + 1)];
    });
  };
  const isInBucket = (id: string): boolean =>
    bucketList.some((event) => event.id === id);

  return (
    <BucketListContext.Provider
      value={{
        bucketList,
        setBucketList,
        addToBucket,
        removeFromBucket,
        isInBucket,
      }}
    >
      {children}
    </BucketListContext.Provider>
  );
};

export default BucketListContextProvider;
