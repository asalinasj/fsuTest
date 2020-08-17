import React from 'react';
import './Banner.css';

const BannerComponent = (props) => {
    return(
        <div className="banner">
            <div className="banner-text">
                <h1 aria-label="FSU Interview">FSU Interview</h1>
                <h3 aria-label="Customized Site">
                    Customized Site
                </h3>
            </div>
        </div>
    );
}
export default BannerComponent;