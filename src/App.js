import React from "react";

function App() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>AI Health & Wellness App</h1>
      <p style={styles.description}>
        Transform your health with AI-powered food analysis, personalized nutrition, 
        and real-time ingredient insights.
      </p>
      <button style={styles.button}>Get Started</button>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    padding: "50px",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#121212",
    color: "#ffffff",
    height: "100vh",
  },
  title: {
    fontSize: "2.5em",
    marginBottom: "10px",
  },
  description: {
    fontSize: "1.2em",
    marginBottom: "20px",
  },
  button: {
    backgroundColor: "#00C896",
    color: "white",
    padding: "10px 20px",
    fontSize: "1.2em",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default App;
