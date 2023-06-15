import React from 'react';

import '../assets/css/loading.css';

const Loading = () => {
    return (
        <div className='loading-bg'>
            <div className="loading" data-loading-text="LOADING"></div>
        </div>
    )
}

export default Loading;
