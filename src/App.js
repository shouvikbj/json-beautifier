import React, { useState, useEffect } from 'react';
import JsonEditor from './components/JsonEditor';
import JsonViewer from './components/JsonViewer';

const App = () => {
  const [jsonData, setJsonData] = useState(null);

  const handleJsonUpdate = (data) => {
    setJsonData(data);
  };

  useEffect(() => {
    document.title = 'JSON Viewer and Beautifier';
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h1>JSON Viewer and Beautifier</h1>
      <JsonEditor onJsonUpdate={handleJsonUpdate} />
      <p></p>
      <p></p>
      <JsonViewer jsonData={jsonData} />
      <p></p>
      <p></p>
      <p></p>
      <div className='author-container'>
        <p className='bottom-text'>
          Developed with ❤️ by
          <a href="https://github.com/shouvikbj" target="_blank" rel="noopener noreferrer">
            {' '}<i>Shouvik Bajpayee</i>{' '}<i class="fas fa-external-link-alt"></i>
          </a>
        </p>
      </div>
    </div>
  );
};

export default App;
