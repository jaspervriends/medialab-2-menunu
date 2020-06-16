var watch = require('watch')
const { exec } = require('child_process');

/**
 * Some menunu text
 */
console.log(`
*                                    
(  \`                                   
)\))(     (           (            (   
((_)()\   ))\  (      ))\   (      ))\  
(_()((_) /((_) )\ )  /((_)  )\ )  /((_) 
|  \/  |(_))  _(_/( (_))(  _(_/( (_))(  
| |\/| |/ -_)| ' \))| || || ' \))| || | 
|_|  |_|\___||_||_|  \_,_||_||_|  \_,_| 
                                       
`);
console.log('\033[2J');
console.log("\x1b[4m%s\x1b[0m", "Launch Information");
console.log("\x1b[0m");

/**
 * Launch React
 */
console.log("Launching React....");
exec("react-scripts start");
console.log(" ");

/**
 * 
 */
console.log("Launching Prettier....");
watch.createMonitor('./src', {
  interval: 1
}, function (monitor) {
  monitor.on("changed", function (fileName) {
    // Handle file changes
    if(fileName.split('.').pop() === 'js') {
      exec(`prettier --single-quote=false --trailing-comma=es5 --tab-width=2 --write \"${fileName}\"`);
    }
  })
});

console.log(" ");
console.log("Done. Waiting for React & Prettier");
console.log(" ");
console.log("Launching Menunu on http://localhost:3000");