import React from 'react';

const Education = props => (
    <div className="Education">
        <div className="Education-container">
            {props.data.map((edu, index) => (
                <div className="Education-item" key={`Edu-${index}`}>
                    <h3>
                        {edu.degree} @ {edu.institution}
                    </h3>
                    <h4>
                        {edu.startDate} - {edu.endDate}
                    </h4>
                    <p>
                        {edu.description}
                    </p>
                </div>
            ))}
        </div>
    </div>
);

export default Education;