import React from 'react';

export default function TextWithBreak ({text, className}){
    const renderTextWithLineBreaks = () => {
        const lines = text.split('\n');
    
        return lines.map((line, index) => (
          <React.Fragment key={index}>
            {line}
            {index !== lines.length - 1 && <br />}
          </React.Fragment>
        ));
      };
    return(
            <p className={className}>
                {renderTextWithLineBreaks()}
            </p>
    )
}