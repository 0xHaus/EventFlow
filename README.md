# EventFlow

EventFlow is a full-stack dApp that demonstrates **real-time event indexing** using **The Graph**. 
It includes:
- A **Solidity** contract for NFT minting and marketplace logic.
- A **Subgraph** to index contract events (mint, list, buy).
- A **React/Next.js** front-end that queries The Graph via GraphQL.

## Project Structure

eventflow/ 
├── contracts/ │ 
└── EventFlowNFT.sol // Your Solidity contract(s) 
├── subgraph/ 
│ ├── schema.graphql // Subgraph schema
│ ├── subgraph.yaml // Subgraph config 
│ └── src/ 
│ └── mapping.ts // Event handlers for The Graph 
├── frontend/
 │ ├── pages/ // Next.js pages
 │ ├── components/ // Reusable UI components
 │ └── package.json // Front-end dependencies 
└── README.md


### 1. Smart Contract (Solidity)

Inside **`/contracts`**, you'll store your **EventFlowNFT.sol** (or equivalent) contract:

- **EventFlowNFT**: Implements an ERC-721 token with marketplace features (listing, buying, event emissions).

### 2. The Graph (Subgraph)

In **`/subgraph`**:
- **schema.graphql**: Defines the data structures (entities) for NFTs, listings, etc.
- **subgraph.yaml**: Points to your contract address & ABI, mapping handlers, and network configuration.
- **mapping.ts**: The functions that transform on-chain events into entities for The Graph.

### 3. Front-End (React/Next.js)

In **`/frontend`**:
- **pages/**: Contains your Next.js routes (e.g., `index.js` or `index.tsx`).
- **components/**: Reusable UI components (e.g., listing cards, minting form).
- **package.json**: Project dependencies (React, Next.js, Apollo Client, ethers.js, etc.).

## Getting Started

1. **Install Dependencies**  
   - For contracts and subgraph (Hardhat/Graph CLI), run:
     ```bash
     cd ../contracts
     npm install
     ```
     ```bash
     cd ../subgraph
     npm install --global @graphprotocol/graph-cli
     ```
   - For front-end (React/Next.js):
     ```bash
     cd ../frontend
     npm install
     ```

2. **Compile & Deploy Contracts**  
   - Initialize Hardhat in `contracts/`, compile, then deploy to a test network.
   - Example (Hardhat):
     ```bash
     npx hardhat compile
     npx hardhat run scripts/deploy.js --network goerli
     ```

3. **Configure & Deploy Subgraph**  
   - In `subgraph/`, update `subgraph.yaml` with your deployed contract address.
   - Generate & deploy subgraph:
     ```bash
     graph codegen
     graph build
     graph deploy --product hosted-service <GITHUB_USER>/<SUBGRAPH_NAME>
     ```

4. **Run the Front-End**  
   - In `frontend/`, start your Next.js dev server:
     ```bash
     npm run dev
     ```
   - Open [http://localhost:3000](http://localhost:3000) to view the app.

## Potential Enhancements

- **Pagination & Filtering**: Improve your subgraph queries to handle large data sets.
- **User Profiles**: Track user activity, minted NFTs, sales.
- **Notifications**: Integrate push notifications (Push Protocol / EPNS).
- **Auctions**: Extend marketplace logic to support bidding/auction events.

## License

[MIT](https://opensource.org/licenses/MIT)

---
