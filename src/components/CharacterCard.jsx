import React, { useState } from "react";

const CharacterCard = (item) => {
  const [warning, setWarning] = useState(true);
  return (
    <div
      onMouseEnter={() => setWarning(false)}
      onMouseLeave={() => setWarning(true)}
      style={{
        cursor: "pointer",
        width: "20%",
        height: "30vh",
        margin: "2%",
        backgroundColor: warning ? "goldenrod" : "red",
        color: "black",
        borderRadius: "10%",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "5% 5% 0 5%",
        }}
      >
        <img
          className="img-fluid"
          src={item.image}
          alt="avatar"
          style={{ width: "50%", height: "25vh", borderRadius: "50%" }}
        />
        <div
          onMouseEnter={() => setWarning(false)}
          onMouseLeave={() => setWarning(true)}
          style={{
            textAlign: "center",
            fontSize: "15px",
            fontWeight: warning ? "500" : "bolder",
            paddingLeft: "0%",
            color: warning ? "white" : "black"
          }}
        >
          {item.name}
        </div>
      </div>
    </div>
  );
};

export default CharacterCard;
