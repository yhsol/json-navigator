import { JsonType } from "../types/jsonNavigator.types";

export type SetValueType = {
  object: JsonType;
  key: string;
  value: string | {};
};

const setValues = ({ object, key, value }: SetValueType) => {
  const keys = key.split(".");
  const last = keys.pop();
  if (last) {
    keys.reduce((o, k) => (o[k] = o[k] || {}), object)[last] = value;
  }

  return object;
};

export const formattedJson = (json: JsonType) => {
  return Object.entries(json).reduce(
    (object, [key, value]) => setValues({ object, key, value }),
    {} as JsonType
  );
};
