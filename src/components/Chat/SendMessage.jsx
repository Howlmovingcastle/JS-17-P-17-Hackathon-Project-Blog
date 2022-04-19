import { Button, Input } from "@mui/material";
import React, { useContext, useState } from "react";
import fire from "../../firechat";
import firebase from "firebase/compat/app";
import { addDoc, collection } from "firebase/firestore";
// import { useAuth } from "../../contexts/AuthContext";
// import { useProducts } from "../../contexts/ProductContext";

const SendMessage = () => {
  // const auth = fire.auth();
  const [msg, setMsg] = useState("");

  const firestore = fire.firestore();

  async function sendMessage() {
    try {
      await addDoc(collection(firestore, "messages"), {
        email: "miscellaneous2335462@gmail.com",
        text: msg,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      });
    } catch (error) {
      console.log(error);
    }

    setMsg("");
  }

  return (
    <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
      <form
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Input
          sx={{
            maxWidth: "800px",
            width: "100%",
            marginTop: "10px",
            backgroundColor: "white",
            height: "70px",
          }}
          value={msg}
          placeholder="Message..."
          onChange={(e) => setMsg(e.target.value)}
        />

        <Button
          onClick={sendMessage}
          style={{
            backgroundColor: "black",
            color: "white",
            height: "70px",
            marginBottom: "-10px",
          }}
        >
          Send
        </Button>
      </form>
    </div>
  );
};

export default SendMessage;
