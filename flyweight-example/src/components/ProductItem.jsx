const ProductItem = ({ product, price, index, method }) => {
  return (
    <div>
      <ol style={{ listStyle: "none" }}>
        <h3>product number :{index + 1}</h3>
        <li>the poduct is :{product}</li>
        <li>the price is :{price}</li>
        <li>how to buy :{method}</li>
      </ol>
    </div>
  );
};
export default ProductItem;
