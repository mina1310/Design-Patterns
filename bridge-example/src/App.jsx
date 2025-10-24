import { createAdvancedRemote } from "./utils/createAdvancedRemote";
import { createRadio } from "./utils/CreateRadio";
import { createRemote } from "./utils/createRemote";
import { createTv } from "./utils/CreateTv";

function App() {
  const tv = createTv();
  const remote = createAdvancedRemote(tv);

  remote.togglePower();
  remote.volumeUp();
  remote.mute();

  console.log(tv.toString());

  const radio = createRadio();
  const radioRemote = createRemote(radio);
  radioRemote.togglePower();
  radioRemote.volumeUp();

  return <></>;
}

export default App;
