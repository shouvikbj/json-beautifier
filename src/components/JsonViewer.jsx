import React from 'react';
import ReactJson from 'react-json-view';

const JsonViewer = ({ jsonData }) => {
    return (
        <>
            {jsonData ? (
                <>
                    <h1>Beautified JSON</h1>
                    <div className='container'>
                        <ReactJson
                            src={jsonData}
                            theme="tomorrow"
                            enableClipboard={true}
                            style={{
                                padding: "20px",
                                borderRadius: "20px",
                                width: "90%"
                            }}
                            iconStyle='circle'
                            indentWidth={6}
                        />
                    </div>
                </>
            ) : (
                <p></p>
            )}
        </>
    );
};

export default JsonViewer;
