import React from "react";
import "./styles.css";

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>ZenChain Lending</h1>
        <p>Next-gen decentralized lending built on ZenChain 🚀</p>
      </header>

      <main className="main">
        <div className="card">
          <h2>Secure. Fast. Scalable.</h2>
          <p>
            Experience the power of Web3 lending with low fees, lightning speed,
            and the security of ZenChain.
          </p>
          <a href="https://zenchain.io" target="_blank" rel="noreferrer">
            Learn More
          </a>
        </div>
      </main>

      <footer className="footer">
        <p>© 2025 ZenChain Project. Built with ❤️ by the community.</p>
      </footer>
    </div>
  );
}

export default App;
