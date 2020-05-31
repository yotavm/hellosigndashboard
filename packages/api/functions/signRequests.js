import { map } from "lodash";
import {
  getSignatureRequestList,
  normalizeSignatureRequest,
} from "../services/hellosign";

export const getList = async (event) => {
  try{
  const { signature_requests } = await getSignatureRequestList();
  const normalizeSignatureRequestList = map(
    signature_requests,
    normalizeSignatureRequest
  );

  return {
    statusCode: 200,
    body: JSON.stringify(normalizeSignatureRequestList),
  };
  }catch (e) {
    return {
      statusCode: 200,
      body: JSON.stringify(e),
    };
  }
};
