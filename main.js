//this serves as the main file for the creation of the electron window

//electron dev tools installer code
const {default: installExtension, REDUX_DEVTOOLS, REACT_DEVELOPER_TOOLS } = require('electron-devtools-installer');

//install electron-is-dev (check if electron is in dev mode or not) and require in here
const isDev = require('electron-is-dev');

//require app, and BrowserWindow from electron
const { app, BrowserWindow } = require("electron");
//require in path
const path = require("path");

//create a function createWindow that will...
function createWindow() {
  //establish new instnce of BrowserWindow with certain specifications
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    backgroundColor: "white",

    //Assuming this are no unnecessary as all are default values

    // webPreferences: {
    //   nodeIntegration: false,
    //   worldSafeExecuteJavaScript: true,
    //   contextIsolation: true,
    // },
    
  });

//new code here to add react dev tools/redux dev tools if we're in dev mode (using electron is dev)
  if (isDev) {
    installExtension(REACT_DEVELOPER_TOOLS)
    .then((name) => console.log(`Added Extension:  ${name}`))
    .catch((err) => console.log('An error occurred: ', err));

    installExtension(REDUX_DEVTOOLS)
    .then((name) => console.log(`Added Extension:  ${name}`))
    .catch((err) => console.log('An error occurred: ', err));
  }

  //serve the index.html upon window load
  win.loadFile("index.html");

  // opens chrome inpspect upon window open
  // win.webContents.openDevTools();
}
//requried for developer environment, comment this require fuction out before packaging in Electron
require("electron-reload")(__dirname, {
  electron: path.join(__dirname, "node_modules", ".bin", "electron"),
});

if (process.platform === 'darwin') {
  //Property to update icon in MacOS dock
  app.dock.setIcon('./logo/KafmiraLogoFin.png');
}

// whenReady is a method of App, that will wait till the app mounts than it will invoke creatWindow
app.whenReady().then(createWindow);


