# 🚀 Simple Counter DApp

This project implements a **simple Counter smart contract** deployed on the **Ethereum Sepolia Testnet** using **Hardhat** for development and deployment.

## 📜 Smart Contract Overview

This contract allows users to:

- ✅ **Increment the counter** value.
- ✅ **Retrieve the current count**.

---

## ⚙️ Project Setup & Installation

### **1️⃣ Clone the Repository**

First, clone the repository and navigate into the project directory:

```sh
git clone https://github.com/kumuduwije/counter-dapp.git
cd counter-dapp
```

### **2️⃣ Install Dependencies**

Run the following command to install required packages:

```sh
npm install
```

### **3️⃣ Configure Environment Variables**

Create a `.env` file in the root directory and add the following:

```plaintext
ALCHEMY_SEPOLIA_RPC_URL="https://eth-sepolia.alchemyapi.io/v2/YOUR_ALCHEMY_API_KEY"
PRIVATE_KEY="YOUR_WALLET_PRIVATE_KEY"
ETHERSCAN_API_KEY="YOUR_ETHERSCAN_API_KEY"
```

📌 **Replace placeholders with your actual values.**

---

## 🔨 Compile & Deploy the Contract

### **4️⃣ Compile the Smart Contract**

```sh
npx hardhat compile
```

### **5️⃣ Deploy the Contract to Sepolia**

```sh
npx hardhat run scripts/deploy.js --network sepolia
```

📌 **After deployment, note the contract address from the output.**

---

## 📌 Verify Smart Contract on Etherscan

After deployment, verify the contract using:

```sh
npx hardhat verify --network sepolia YOUR_DEPLOYED_CONTRACT_ADDRESS
```

🔹 Replace `YOUR_DEPLOYED_CONTRACT_ADDRESS` with the actual address from the deployment output.

---

## 📄 Testing the Smart Contract

### **6️⃣ Run Tests (if added)**

If test scripts are available, you can run:

```sh
npx hardhat test
```

---

## 💡 Additional Commands

### **To Clean the Hardhat Cache**

```sh
npx hardhat clean
```

### **To Get the List of Hardhat Tasks**

```sh
npx hardhat help
```

---

## 🔗 Useful Links

- 🔹 [Etherscan Sepolia](https://sepolia.etherscan.io/)
- 🔹 [Alchemy](https://www.alchemy.com/)
- 🔹 [MetaMask](https://metamask.io/)
- 🔹 [Hardhat Documentation](https://hardhat.org/)

---

## 📝 License

This project is licensed under the **MIT License**.

---
