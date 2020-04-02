import React from 'react';
import ReactDOM from 'react-dom';

import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles'; // Warning of M-ui, import like for private module
import { heIL } from '@material-ui/core/locale';

import App from './App';
import './index.css';

const assistantColor = '#595959';
const boxShadow = "0px 1px 7px 1px rgba(0,0,0,0.75)";

const projectGlobalTheme = createMuiTheme({
  textArea: {
    "&::placeholder": {
      fontStyle: 'italic',
    },
  },
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
    MuiInput: {
      input: {
        "&::placeholder": {
          fontStyle: 'italic',
        },
      }
    },
    MuiInputLabel: {
      root: {
        fontStyle: 'italic',
      },
      formControl: {
        left: "unset",
      },
    },
    MuiButton: {
      contained: {
        boxShadow,
        '&:hover': {
          boxShadow
        },
        '&:focus': {
          boxShadow
        }
      }
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
    MuiTextField: {
      root: {
        "&::placeholder": {
          fontStyle: 'italic'
        },
        boxShadow
      },
    },
    MuiSelect: {
      select: {
        boxShadow,
        '&$disabled': {
          boxShadow: 'unset'
        },
        paddingLeft: "24px", // Reverse to Hebrew
        paddingRight: "3px !important"  
      },
      icon: {
        right: "unset", // Reverse to Hebrew
        left: 0
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

