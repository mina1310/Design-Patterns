import { memo } from "react";

const MethodBuy = memo(({ method }) => {
  return <span> {method}</span>;
});
export default MethodBuy;
