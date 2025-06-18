import express from 'express';
import { exec } from 'child_process';

const app = express();
const port = 3000;

// Middleware to parse JSON requests
app.use(express.json());

// Route to start the Minecraft server
app.post('/start', (req, res) => {
    exec('java -Xmx1024M -Xms1024M -jar minecraft_server.jar nogui', (error, stdout, stderr) => {
        if (error) {
            console.error(`Error starting server: ${error.message}`);
            return res.status(500).send('Error starting server');
        }
        if (stderr) {
            console.error(`Server stderr: ${stderr}`);
            return res.status(500).send('Error starting server');
        }
        console.log(`Server stdout: ${stdout}`);
        res.send('Minecraft server started');
    });
});

// Route to stop the Minecraft server
app.post('/stop', (req, res) => {
    // Implement logic to stop the server
    res.send('Minecraft server stopped');
});

// Route to get server status
app.get('/status', (req, res) => {
    // Implement logic to check server status
    res.send('Minecraft server status');
});

// Start the Express server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});