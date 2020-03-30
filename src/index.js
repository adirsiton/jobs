import React from 'react';
import ReactDOM from 'react-dom';

import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { heIL } from '@material-ui/core/locale';

import App from './App';
import './index.css';

const projectGlobalTheme = createMuiTheme({
  overrides: {
    MuiInputLabel: {
      formControl: {
        left: "unset",
      }
    },
    MuiButton: {
      '&:focus': {
        outline: 'none'
      }
    },
    MuiCheckbox: {
      colorSecondary: {
          '&$checked': {
            color: 'rgb(89,89,89)'
          }
      }
    },
    MuiSwitch: {
      colorSecondary: {
        '&$checked': {
          color: 'green',
        },
        '&$checked + $track': {
          backgroundColor: 'green'
        }        
      }
    }    
  }
}, heIL);

ReactDOM.render(
  <React.StrictMode>
    <MuiThemeProvider theme={projectGlobalTheme}>
      <App />
    </MuiThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

