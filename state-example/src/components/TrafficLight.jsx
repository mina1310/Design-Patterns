import { useTrafficLight } from "../hooks/useTrafficLight";

const TrafficLight = () => {
  const { color, changeLight } = useTrafficLight();
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <div
        style={{
          width: "100px",
          height: "100px",
          borderRadius: "50%",
          margin: "0 auto 20px",
          backgroundColor: color,
          boxShadow: "0 0 20px " + color,
          transition: "background-color 0.3s ease",
        }}
      />
      <button
        onClick={changeLight}
        style={{
          padding: "10px 20px",
          border: "none",
          borderRadius: "8px",
          backgroundColor: "#333",
          color: "white",
          cursor: "pointer",
        }}
      >
        Change color
      </button>
    </div>
  );
};
export default TrafficLight;
