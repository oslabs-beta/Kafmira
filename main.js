//this serves as the main file for the creation of the electron window

//electron dev tools installer code
// import installExtension, { REDUX_DEVTOOLS , REACT_DEVELOPER_TOOLS } from 'electron-devtools-installer';

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
  //serve the index.html upon window load
  win.loadFile("index.html");

  // opens chrome inpspect upon window open
  // win.webContents.openDevTools();
}
//requried for developer environment, comment this require fuction out before packaging in Electron
require("electron-reload")(__dirname, {
  electron: path.join(__dirname, "node_modules", ".bin", "electron"),
});

// whenReady is a method of App, that will wait till the app mounts than it will invoke creatWindow
app.whenReady().then(createWindow);

// //new code here for react dev tools

// app.whenReady().then(() => {
//   installExtension([REDUX_DEVTOOLS, REACT_DEVELOPER_TOOL])
// }).then(createWindow);

