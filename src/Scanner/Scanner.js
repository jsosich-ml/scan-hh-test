import React from 'react';

const keycode = require('keycode');
const debounce = require('lodash/debounce');


function Scanner({ endScanningEventCode, parser, limitSubsequentTime }) {
  const inputEl = React.useRef(null);
  const [code, setCode] = React.useState('');
  
  const returnCode = debounce((finalCode) => {
    parser(finalCode);
  }, limitSubsequentTime, { leading: true, trailing: false });

  const handleChange = (e) => {
    setCode(e.target.value);

  };

  const handleSubmit = () => {
    returnCode(code);
    setCode('');
  };

  const handleKeyUp = (e) => {
    if (keycode.isEventKey(e, endScanningEventCode)) {
      e.stopPropagation();
      handleSubmit();
    }
  };

  const handleBlur = (e) => {
    inputEl.current.focus();
  };

  React.useEffect(() => {
    inputEl.current.focus();
  }, []);

  

  return (
    <div>
      <input
        className="code-scanner__input"
        ref={inputEl}
        onChange={handleChange}
        onKeyUp={handleKeyUp}
        onBlur={handleBlur}
        inputMode="none"
        value={code}
        type="text"
      />
    </div>
  );
}
export default Scanner


