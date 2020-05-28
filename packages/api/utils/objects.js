import { camelCase, isObject, reduce } from "lodash";

export const camelCaseKeys = (obj) => {
  if (!isObject(obj)) {
    return obj;
  } else if (_.isArray(obj)) {
    return obj.map((v) => camelCaseKeys(v));
  }
  return reduce(
    obj,
    (r, v, k) => {
      return {
        ...r,
        [camelCase(k)]: camelCaseKeys(v),
      };
    },
    {}
  );
};
