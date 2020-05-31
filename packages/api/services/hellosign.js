require("dotenv").config();
import HelloSign from "hellosign-sdk";
import { pick } from "lodash";
import { camelCaseKeys } from "../utils/objects";

const hellosign = HelloSign({
  key: process.env.HELLOSIGN_API_KEY,
});

export const normalizeSignatureRequest = (signatureRequest) => {
  const signatureRequestCamelCase = camelCaseKeys(signatureRequest);
  return pick(signatureRequestCamelCase, [
    "signatureRequestId",
    "title",
    "createdAt",
    "signatures",
    "isComplete",
    "isDeclined",
    "hasError",
  ]);
};

export const getSignatureRequestList = (
  fromDate,
  toDate,
  testMode,
  page,
  pageSize
) => {
  const listOptions = {
    ...(page &&
      pageSize && {
        page: page,
        page_size: pageSize,
      }),
  };

  return hellosign.signatureRequest.list(listOptions);
};
