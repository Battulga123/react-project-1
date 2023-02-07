import "./App.css";
import Heading from "./components/Heading";
import LayOut from "./components/LayOut";
import Section from "./components/Section";
import { UserProvider } from "./contexts/UserContext";

function App() {
  const userName = "Tulgaa";
  return (
    <div className="App">
      <h1>Day57: React Context</h1>
      <Section level={1}>
        <Heading>Title</Heading>
        <Section level={2}>
          <Heading>Heading</Heading>
          <Heading>Heading</Heading>
          <Heading>Heading</Heading>
          <Section level={3}>
            <Heading>Sub-Heading</Heading>
            <Heading>Sub-Heading</Heading>
            <Heading>Sub-Heading</Heading>
            <Section level={4}>
              <Heading>Sub-Heading</Heading>
              <Heading>Sub-Heading</Heading>
            </Section>
          </Section>
        </Section>
      </Section>
    </div>
  );
}

export default App;
