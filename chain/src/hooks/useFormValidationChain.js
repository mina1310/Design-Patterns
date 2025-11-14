import { useCallback, useState } from "react";
import { minlenght } from "../utils/validators/minlenght";
import { onlyletters } from "../utils/validators/onlyletters";
import { notempty } from "../utils/validators/notempty";
import { composehandler } from "../utils/validators/composehandler";

export const useFormValidationChain = () => {
  const [error, setError] = useState("");
  const chain = composehandler([notempty, minlenght, onlyletters]);
  const validate = useCallback((value) => {
    const result = chain(value);
    setError(result === "معتبر است" ? "" : result);
  }, []);
  return { error, validate };
};
