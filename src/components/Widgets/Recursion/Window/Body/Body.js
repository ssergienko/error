import './Body.scss';

function Body(params) {

  const anonymous = `<anonymous>`;

  return (
    <>
    {!params.stack && 
      <div className="body">
        <span>{params.text}</span>
      </div>
    }
    {params.stack && 
      <div className="bodyStackOverflow">
        <ul>
          <li>Uncaught RangeError: Maximum call stack size exceeded</li>
          <li>at func (${anonymous}:1:25)</li>
          <li>at func (${anonymous}:1:25)</li>
          <li>at func (${anonymous}:1:25)</li>
          <li>at func (${anonymous}:1:25)</li>
          <li>at func (${anonymous}:1:25)</li>
          <li>at func (${anonymous}:1:25)</li>
          <li>at func (${anonymous}:1:25)</li>
          <li>at func (${anonymous}:1:25)</li>
          <li>at func (${anonymous}:1:25)</li>
          <li>at func (${anonymous}:1:25)</li>
        </ul>
      </div>
    }
    </>
  );

}

export default Body;