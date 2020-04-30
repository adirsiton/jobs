import React from 'react';
import ReactDOM from 'react-dom';

import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles'; // Warning of M-ui, import like for private module
import { heIL } from '@material-ui/core/locale';

import App from './App';
import { THEME_COLOR, DARK_TEXT_COLOR, BOX_SHADOW, TEXT_AND_ICONS_ADS_BACKGROUND_COLOR, TOOLTIP_OR_SCROLLER_COLOR } from './assets/projectJSS/Colors';
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
      color: DARK_TEXT_COLOR
    }
  },
  overrides: {
    MuiTooltip: {
      tooltip: {
        backgroundColor: TOOLTIP_OR_SCROLLER_COLOR,
        color: 'white',
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
        },
      },
      formControl: {        
        "label + &": {
          marginTop: 'auto'
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
        left: "unset"
      },
      root: {
        fontWeight: "bold"
      },
      shrink: {
        transformOrigin: 'top right'
      }
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
    MuiInputBase: {
      root: {
        paddingRight: MINI_TEXT_INPUT_PADDING,
        "&::placeholder": {
          fontStyle: ITALIC_FONT
        },
        borderRadius: '4px',
        ...BOX_SHADOW
      },
    },
    MuiSelect: {
      select: {
        '&$disabled': {
          boxShadow: 'unset'
        },
        borderRadius: '4px',
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

