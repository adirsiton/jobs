import React from 'react';
import ReactDOM from 'react-dom';

import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles'; // Warning of M-ui, import like for private module
import { heIL } from '@material-ui/core/locale';

import App from './App';
import './index.css';

const MINI_TEXT_INPUT_PADDING = '1ch';
const assistantColor = '#595959';
const boxShadow = "0px 1px 7px 1px rgba(0,0,0,0.75)";
const GREEN_COLOR = ''

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
    MuiPickersToolbar: {
      toolbar: {
        backgroundColor: 'green',
      },
    },
    MuiPickersCalendarHeader: {
      switchHeader: {
        backgroundColor: 'green',
      },
    },    
    MuiInput: {
      input: {
        // font: 'caption',
        "&::placeholder": {
          fontStyle: 'italic',
        },
      }
    },
    MuiInputBase: {
      input: {
        font: 'caption'
      }
    },
    MuiInputLabel: {
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
            color: '#21BD90'
          }
      }
    },
    MuiSwitch: {
      color: '#21BD90',
      colorSecondary: {
        '&$checked': {
          color: '#21BD90',
        },
        '&$checked + $track': {
          backgroundColor: '#21BD90'
        }        
      }
    },
    MuiTextField: {
      root: {
        paddingRight: `${MINI_TEXT_INPUT_PADDING}`,
        "&::placeholder": {
          fontStyle: 'italic'
        },
        boxShadow
      },
    },
    MuiMenu: {
      // font
    },
    MuiSelect: {
      select: {
        boxShadow,
        '&$disabled': {
          boxShadow: 'unset'
        },
        paddingLeft: "24px", // Reverse to Hebrew
        paddingRight: "1ch !important"  
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

