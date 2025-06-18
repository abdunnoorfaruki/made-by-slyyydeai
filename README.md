# Made by SlyyydeAI

This repository contains a basic setup for a custom GitHub MCP (Minecraft Control Panel) server using Node.js and Express.

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine.
- TypeScript installed globally (`npm install -g typescript`).

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/abdunnoorfaruki/made-by-slyyydeai.git
   ```

2. Navigate to the project directory:
   ```bash
   cd made-by-slyyydeai
   ```

3. Install the dependencies:
   ```bash
   npm install express @types/express
   ```

4. Compile the TypeScript file:
   ```bash
   tsc server.ts
   ```

5. Run the server:
   ```bash
   node server.js
   ```

## Usage

- **Start the Minecraft server**: Send a POST request to `/start`.
- **Stop the Minecraft server**: Send a POST request to `/stop`.
- **Check server status**: Send a GET request to `/status`.

## Note

This is a basic setup and does not include actual Minecraft server management logic. You will need to implement the logic for stopping the server and checking its status.

## License

This project is licensed under the MIT License.