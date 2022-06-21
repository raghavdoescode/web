import Card from "./components/Card";
import Button from "./components/Button";

function App() {
  return (
    <div className="App">
      <div class="intro">
        <h2 style={{ color: "#eceff4", fontSize: "35px" }}>
          Raghav (festiveelephantseal)
        </h2>
      </div>

      <div className="btns">
        <Button text="Github" url="https://github.com/raghavdoescode" />
        <Button text="Gitea" url="https://git.raghavk.xyz" />
        <Button text="Discord Server" url="https://discord.gg/abVWJJH7AK" />
      </div>

      <div className="cards">
        <Card
          title="About me"
          text={"💻 programming\n 🏎️ motorsports \n 📖 high school student"}
          height={250}
          width={400}
        />
      </div>
    </div>
  );
}

export default App;
