import { Icon } from "./components/ui/Icon/Icon";

function App() {
  return (
    <div style={{ padding: 40 }}>
      <Icon name="Airplay" size="sm" />
      <Icon name="Airplay" size="lg" />
      <Icon name="Airplay" size="sm" customSize={140} />
    </div>
  );
}

export default App;
