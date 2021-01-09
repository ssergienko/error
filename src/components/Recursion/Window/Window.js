import './Window.scss';
import Header from "./Header/Header";
import Body from "./Body/Body";

function Window({text}) {

  return (
    <div className="window">
      <Header />
      <Body text={text} />
    </div>
  );

}

export default Window;