import './Window.scss';
import Header from "./Header/Header";
import Body from "./Body/Body";

function Window(params) {

  return (
    <div className="window" style={params.style}>
      <Header />
      <Body text={params.text} stack={params.stack} />
    </div>
  );

}

export default Window;