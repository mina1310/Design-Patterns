const Beverage = ({ name, brew, addCondiments }) => {
  const steps = ["جوشاندن آب", brew(), "ریختن در فنجان", addCondiments()];

  return (
    <div>
      <h2>{name}</h2>
      <ol>
        {steps.map((items, index) => (
          <li key={index}>{items}</li>
        ))}
      </ol>
    </div>
  );
};
export default Beverage;
