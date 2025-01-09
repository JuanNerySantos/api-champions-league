import { noContent, ok } from "../utils/http-response";

export const getPlayerService = async () => {
  const data = null;

  if (!data) {
    return noContent();
  }

  return ok(data);
};
