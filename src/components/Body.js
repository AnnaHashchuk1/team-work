import React from "react";

const Body = () => {
  return (
    <main style={styles.body}>
    <div style={styles.card}>
        <img src={"/avatar-default.png"} alt="Serhii Boldariev" style={styles.photo} />
        <div style={styles.textContainer}>
          <h2 style={styles.name}>Serhii Boldariev</h2>
          <p style={styles.position}>Business analist</p>
        </div>
      </div>
      <div style={styles.card}>
        <img src={"/anna-hashchuk.png"} alt="Anna Hashchuk" style={styles.photo} />
        <div style={styles.textContainer}>
          <h2 style={styles.name}>Anna Hashchuk</h2>
          <p style={styles.position}>UI/UX Designer</p>
         </div>
      </div>
      <div style={styles.card}>
        <img src={"/Kate_Havryshchuk.png"} alt="Kate Havryshchuk" style={styles.photo} />
        <div style={styles.textContainer}>
          <h2 style={styles.name}>Kate Havryshchuk</h2>
          <p style={styles.position}>Project Manager</p>
        </div>
      </div>
      <div style={styles.card}>
        <img src={"/yokay-avatar.png"} alt="Danylo Voitynskyi" style={styles.photo} />
        <div style={styles.textContainer}>
          <h2 style={styles.name}>Danylo Voitynskyi</h2>
          <p style={styles.position}>Domain Expert</p>
        </div>
      </div>
      <div style={styles.card}>
        <img src={"/avatar-maksbid.jpg"} alt="Maks Bidolakh" style={styles.photo} />
        <div style={styles.textContainer}>
          <h2 style={styles.name}>Maks Bidolakh</h2>
          <p style={styles.position}>Senior QA</p>
        </div>
  
      </div>
    </main>
  );
};

const styles = {
  body: {
    display: "flex",
    flexWrap: "wrap",
  },
  card: {
    width: "150px",
    padding: "1em",
    borderRadius: "10px",
    backgroundColor: "#fff",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    margin: "1em",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  photo: {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    objectFit: "cover",
  },
  textContainer: {
    marginTop: "0.5em",
  },
  name: {
    fontSize: "1em",
    fontWeight: "bold",
    color: "#333",
    margin: "0",
  },
  position: {
    fontSize: "0.9em",
    color: "#6a0dad", // Same purple color as header
    margin: "0.5em 0 0 0",
  },
};

export default Body;
