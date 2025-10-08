import { Button } from ".";
import { AiFillApple } from "react-icons/ai";

function App() {
  return (
    <div style={{ padding: "2rem", maxWidth: "800px" }}>
      <h1>Component Library</h1>
      <p>Development playground for testing components</p>

      {/* === BUTTON VARIANTS === */}
      <section style={{ marginBottom: "2rem" }}>
        <h2>Button Variants</h2>
        <div
          style={{
            display: "flex",
            gap: "1rem",
            flexWrap: "wrap",
            marginBottom: "1rem",
          }}
        >
          <Button variant="primary">
            <AiFillApple />
            Primary
          </Button>
        </div>
      </section>
    </div>
  );
}

export default App;
