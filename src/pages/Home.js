import React from 'react';

import AnalysisForm from '../components/home/AnalysisForm';
import ChartsLayout from '../components/home/ChartsLayout';

const Home = () => {
    return (
        <React.Fragment>
            <AnalysisForm />
            <ChartsLayout />
        </React.Fragment>
    )
}

export default Home;
