import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import RefactoredApp from './RevisedApp'
import NewTry from './NewComponents/newTry'
import FeatureItem from './NewComponents/feature-item'
import Feature from './NewComponents/Feature'
import SummaryOption from './NewComponents/summaryOption'
import MainForm from './NewComponents/MainForm'
import RevisedApp2 from './RevisedApp2'

const FEATURES = {
  Processor: [
    {
      name: '17th Generation Intel Core HB (7 Core with donut spare)',
      cost: 700
    },
    {
      name: 'Professor X AMD Fire Breather with sidewinder technology',
      cost: 1200
    }
  ],
  "Operating System": [
    {
      name: 'Ubuntu Linux 16.04',
      cost: 200
    },
    {
      name: 'Bodhi Linux',
      cost: 300
    }
  ],
  "Video Card": [
    {
      name: 'Toyota Corolla 1.5v',
      cost: 1150.98
    },
    {
      name: 'Mind mild breeze 2000',
      cost: 1345
    }
  ],
  Display: [
    {
      name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
      cost: 1500
    },
    {
      name: '15.3" HGTV (3840 x 2160) Home makeover edition',
      cost: 1400
    },
  ]
};

ReactDOM.render(<RevisedApp2 features={FEATURES}/>, document.getElementById('root'));
