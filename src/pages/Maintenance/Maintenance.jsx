import Card from "../../components/Card";
export default function Maintenance() {
  // Renderiza UI
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        width: "100%",
      }}
    >
      <Card
        titulo="En Mantenimiento"
        texto="Esta sección se encuentra actualmente en trabajo de mantenimiento. Por favor, vuelva más tarde."
        modo="light"
      />
    </div>
  );
}
