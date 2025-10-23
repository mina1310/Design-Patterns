const ProductItem = ({ product, price, index }) => {
  return (
    <div>
      <ol>
        <p>product number :{index + 1}</p>
        <li>the poduct is :{product}</li>
        <li>the price is :{price}</li>
      </ol>
    </div>
  );
};
export default ProductItem;
