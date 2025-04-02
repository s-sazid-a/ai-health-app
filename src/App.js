import React from "react";

function App() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Welcome to AI Health App</h1>
      <p style={styles.description}>
        Your personalized AI-driven health assistant. Get real-time food 
        assessment, ingredient analysis, and health recommendations instantly.
      </p>
      <div style={styles.buttonContainer}>
        <button style={styles.button}>Explore Features</button>
        <button style={styles.buttonAlt}>Get Started</button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    padding: "100px 20px",
    fontFamily: "Arial, sans-serif",
    background: "linear-gradient(135deg, #1D3557, #457B9D)",
    color: "#ffffff",
    height: "100vh",
  },
  title: {
    fontSize: "3em",
    fontWeight: "bold",
    marginBottom: "15px",
  },
  description: {
    fontSize: "1.2em",
    marginBottom: "25px",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "15px",
  },
  button: {
    backgroundColor: "#E63946",
    color: "white",
    padding: "12px 25px",
    fontSize: "1.1em",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "0.3s",
  },
  buttonAlt: {
    backgroundColor: "#F1FAEE",
    color: "#1D3557",
    padding: "12px 25px",
    fontSize: "1.1em",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "0.3s",
  },
};

export default App;
