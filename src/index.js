import React from 'react';
import ReactDOM from 'react-dom';

import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles'; // Warning of M-ui, import like for private module
import { heIL } from '@material-ui/core/locale';

import App from './App';
import './index.css';
import { NEW_JOB_COLOR, DARK_TEST_COLOR, BOX_SHADOW, TEXT_AND_ICONS_ADS_BACKGROUND_COLOR, TOOLTIP_OR_SCROLLER_COLOR } from './assets/projectJSS/Colors';
import { ASSISTANT_FONT, ITALIC_FONT } from './assets/projectJSS/Fonts';

const MINI_TEXT_INPUT_PADDING = '1ch';

const projectGlobalTheme = createMuiTheme({
  textArea: {
    "&::placeholder": {
      fontStyle: `${ITALIC_FONT}`
    }
  },
  typography: {
    fontFamily: `${ASSISTANT_FONT}`,
    body1: {
      fontWeight: "900",
      color: `${DARK_TEST_COLOR}`
    }
  },
  overrides: {
    MuiTooltip: {
      backgroundColor: `${TOOLTIP_OR_SCROLLER_COLOR}`,
      tooltip: {
        fontSize: "100%"
      }
    },
    MuiPickersToolbar: {
      toolbar: {
        backgroundColor: `${NEW_JOB_COLOR}`
      },
    },
    MuiPickersCalendarHeader: {
      switchHeader: {
        backgroundColor: `${NEW_JOB_COLOR}`
      }
    },    
    MuiInput: {
      input: {
        "&::placeholder": {
          fontStyle: `${ITALIC_FONT}`
        }
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
        boxShadow: BOX_SHADOW,
        '&:hover': {
          boxShadow: BOX_SHADOW
        },
        '&:focus': {
          boxShadow: BOX_SHADOW
        }
      }
    },
    MuiRadio: {
      colorSecondary: {
        '&$checked': {
          color: `${NEW_JOB_COLOR}`
        }
      },
      root: {
        padding: 'unset'
      }
    },
    MuiCheckbox: {
      colorSecondary: {
          '&$checked': {
            color: `${NEW_JOB_COLOR}`
          }
      }
    },
    MuiSwitch: {
      color: `${NEW_JOB_COLOR}`,
      colorSecondary: {
        '&$checked': {
          color: `${NEW_JOB_COLOR}`,
        },
        '&$checked + $track': {
          backgroundColor: `${NEW_JOB_COLOR}`
        }        
      }
    },
    MuiTextField: {
      root: {
        paddingRight: `${MINI_TEXT_INPUT_PADDING}`,
        "&::placeholder": {
          fontStyle: `${ITALIC_FONT}`
        },
        boxShadow: BOX_SHADOW
      },
    },
    MuiSelect: {
      select: {
        boxShadow: BOX_SHADOW,
        '&$disabled': {
          boxShadow: 'unset'
        },
        paddingLeft: "24px", // Reverse to Hebrew
        paddingRight: "1ch !important"  ,
        backgroundColor: `${TEXT_AND_ICONS_ADS_BACKGROUND_COLOR}`
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

