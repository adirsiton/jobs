import React from 'react';
import ReactDOM from 'react-dom';

import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles'; // Warning of M-ui, import like for private module
import { heIL } from '@material-ui/core/locale';

import App from './App';
import './index.css';

const assistantColor = 'rgb(89,89,89)';

const projectGlobalTheme = createMuiTheme({
  typography: {
    fontFamily: 'Assistant',
    allVariants: {
      color: `${assistantColor}`
    },
    body1: {
      fontWeight: "bold"
    }
  },
  overrides: {
    MuiInputLabel: {
      formControl: {
        left: "unset",
      }
    },
    MuiButton: {
      // TODO: Check this...
      // '&:focus': {
      //   outline: 'none'
      // }
    },
    MuiRadio: {
      colorSecondary: {
        '&$checked': {
          color: `${assistantColor}`
        }
      },
      root: {
        padding: 'unset'
      }
    },
    MuiCheckbox: {
      colorSecondary: {
          '&$checked': {
            color: `${assistantColor}`
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
    },
    MuiFormHelperText: {
      root: {
        textAlign: 'right'
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

