import React from 'react';

export function Transcript(props) {
    const results = props.messages.map(msg => {
      // When resultsBySpeaker is enabled, each msg.results array may contain multiple results.
      // The result_index is for the first result in the message, so we need to count up from there to calculate the key.
      return msg.results.map((result, i) => (
        <span key={`result-${msg.result_index + i}`}>{result.alternatives[0].transcript} 
             | confidence: {result.alternatives[0].confidence} | <font color="green">Accept</font> | <font color="red">Reject</font>
        <br /></span>
      ));

    }).reduce((a, b) => a.concat(b), []); // the reduce() call flattens the array
    return (
      <div>
        {results}
      </div>
    );

}
