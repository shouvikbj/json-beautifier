import React, { useState } from 'react';

const JsonEditor = ({ onJsonUpdate }) => {
  const [jsonInput, setJsonInput] = useState('');

  const handleJsonChange = (e) => {
    setJsonInput(e.target.value);
  };

  const handleBeautify = () => {
    try {
      const parsedJson = JSON.parse(jsonInput);
      const beautifiedJson = JSON.stringify(parsedJson, null, 2);
      setJsonInput(beautifiedJson);
      onJsonUpdate(parsedJson);
    } catch (error) {
      alert('Invalid JSON format!');
    }
  };

  return (
    <div>
      <div className='container'>
        <textarea
          value={jsonInput}
          onChange={handleJsonChange}
          placeholder="Paste your JSON here..."
          rows="25"
        ></textarea>
      </div>
      <p></p>
      <div className='btn-container'>
        <button onClick={handleBeautify}>Beautify JSON</button>
      </div>
    </div>
  );
};

export default JsonEditor;
