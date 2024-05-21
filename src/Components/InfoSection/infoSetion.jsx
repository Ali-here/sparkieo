import React from 'react';
import './InfoSection.css';

function InfoSection() {
    return (
        <div className="info-section">
            <div className="content">
                <div className="logo">Spark</div>
                <div className="info-content">
                    <p>Learn more about Air Drive on</p>
                    <a href="https://spark.pl" className="info-link">Spark.pl</a>
                </div>
            </div>
        </div>
    );
}

export default InfoSection;
