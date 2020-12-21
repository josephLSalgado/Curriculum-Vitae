import React from 'react';

const Certificates = props => (
    <div className="Certificates">
        <div className="Certificates-container">
            {props.data.map((certif, index) => (
                <div className="Certificates-item" key={`Certif-${index}`}>
                    <h3>
                        {certif.name} @ {certif.institution}
                    </h3>
                    <h4>
                        {certif.date}
                    </h4>
                    <p>
                        {certif.description}
                    </p>
                </div> 
            ))}
        </div>
    </div>
);

export default Certificates;