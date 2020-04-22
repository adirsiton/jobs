import React from 'react';
import ReactDOM from 'react-dom';

import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles'; // Warning of M-ui, import like for private module
import { heIL } from '@material-ui/core/locale';

import App from './App';
import { THEME_COLOR, DARK_TEST_COLOR, BOX_SHADOW, TEXT_AND_ICONS_ADS_BACKGROUND_COLOR, TOOLTIP_OR_SCROLLER_COLOR } from './assets/projectJSS/Colors';
import { ASSISTANT_FONT, ITALIC_FONT } from './assets/projectJSS/Fonts';

import './index.css';

const MINI_TEXT_INPUT_PADDING = '1ch';

const projectGlobalTheme = createMuiTheme({
  direction: 'rtl',
  textArea: {
    "&::placeholder": {
      fontStyle: ITALIC_FONT
    }
  },
  typography: {
    fontFamily: ASSISTANT_FONT,
    body1: {
      fontWeight: "900",
      color: DARK_TEST_COLOR
    }
  },
  overrides: {
    MuiTooltip: {
      backgroundColor: TOOLTIP_OR_SCROLLER_COLOR,
      tooltip: {
        fontSize: "100%"
      }
    },
    MuiPickersYear: {
      yearSelected: {
        color: THEME_COLOR,
      },
    },
    MuiPickersToolbar: {
      toolbar: {
        backgroundColor: THEME_COLOR
      },
    },
    MuiPickersCalendarHeader: {
      switchHeader: {
        backgroundColor: THEME_COLOR
      }
    },
    MuiPickersMonth: {
      monthSelected: {
        color: THEME_COLOR,
      },
    },
    MuiInput: {
      input: {
        "&::placeholder": {
          fontStyle: ITALIC_FONT
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
        ...BOX_SHADOW,
        '&:hover': {
          ...BOX_SHADOW
        },
        '&:focus': {
          ...BOX_SHADOW
        }
      }
    },
    MuiTooltip:{
      tooltip: { 
        backgroundColor: 'rgb(72,90,115,30)',
        color: 'white',
        fontSize: '1.3erm'
      },
      popper:{
        marginLeft: '-10px',
      }
    },
    MuiRadio: {
      colorSecondary: {
        '&$checked': {
          color: THEME_COLOR
        }
      },
      root: {
        padding: 'unset'
      }
    },
    MuiCheckbox: {
      colorSecondary: {
          '&$checked': {
            color: THEME_COLOR
          }
      }
    },
    MuiSwitch: {
      color: THEME_COLOR,
      colorSecondary: {
        '&$checked': {
          color: THEME_COLOR,
        },
        '&$checked + $track': {
          backgroundColor: THEME_COLOR
        }        
      }
    },
    MuiTextField: {
      root: {
        paddingRight: MINI_TEXT_INPUT_PADDING,
        "&::placeholder": {
          fontStyle: ITALIC_FONT
        },
        ...BOX_SHADOW
      },
    },
    MuiSelect: {
      select: {
        ...BOX_SHADOW,
        '&$disabled': {
          boxShadow: 'unset'
        },
        paddingLeft: "24px", // Reverse to Hebrew
        paddingRight: "1ch !important",
        backgroundColor: TEXT_AND_ICONS_ADS_BACKGROUND_COLOR
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

