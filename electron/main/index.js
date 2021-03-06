import { app, BrowserWindow, screen } from 'electron';
import * as path from 'path';
import { format as formatUrl } from 'url';

const isDevelopment = process.env.NODE_ENV !== 'production';

// global reference to mainWindow (necessary to prevent window from being garbage collected)
let mainWindow;

function createMainWindow() {
  const primaryDisplay = screen.getPrimaryDisplay();
  const {
    width: screenWidth,
    height: screenHeight,
  } = primaryDisplay.workAreaSize;
  const { scaleFactor } = primaryDisplay;

  const width = Math.round(screenWidth * scaleFactor * 0.25);
  const height = Math.round(screenHeight * scaleFactor * 0.75);

  const browserWindow = new BrowserWindow({
    backgroundColor: '#fefefe',
    titleBarStyle: 'hiddenInset',
    minWidth: width,
    width,
    minHeight: height,
    height,
    webPreferences: {
      nodeIntegration: true,
    },
  });
  browserWindow.setMenuBarVisibility(false);

  if (isDevelopment) {
    browserWindow.webContents.openDevTools();
  }

  if (isDevelopment) {
    browserWindow.loadURL(
      `http://localhost:${process.env.ELECTRON_WEBPACK_WDS_PORT}`,
    );
  } else {
    browserWindow.loadURL(
      formatUrl({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file',
        slashes: true,
      }),
    );
  }

  browserWindow.on('closed', () => {
    mainWindow = null;
  });

  browserWindow.webContents.on('devtools-opened', () => {
    browserWindow.focus();
    setImmediate(() => {
      browserWindow.focus();
    });
  });

  return browserWindow;
}

// quit application when all windows are closed
app.on('window-all-closed', () => {
  // on macOS it is common for applications to stay open until the user explicitly quits
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // on macOS it is common to re-create a window even after all windows have been closed
  if (mainWindow === null) {
    mainWindow = createMainWindow();
  }
});

// create main BrowserWindow when electron is ready
app.on('ready', () => {
  mainWindow = createMainWindow();
});
