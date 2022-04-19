import React, { useEffect, useState, useRef } from "react";
// import { db } from "../fire";
import fire from "../../../firechat";
import firebase from "firebase/compat/app";
import "./Chat.css";

// import { useProducts } from "../../../contexts/ProductContext";
import {
  collection,
  deleteDoc,
  doc,
  addDoc,
  getDocs,
} from "firebase/firestore";
// import { useAuth } from "../../../contexts/AuthContext";
import Navbar from "../../Navbar/Navbar";
import { Button, Input } from "@mui/material";

const Chat = () => {
  const email = "miscellaneous2335@gmail.com";
  const [data, setData] = useState([]);
  const [show, setShow] = useState(true);
  const [msg, setMsg] = useState("");

  console.log(
    data.map((item) => {
      item = item.createdAt.seconds;
    })
  );

  console.log(data);

  // const {
  //   user: { email },
  // } = useAuth();

  const firestore = fire.firestore();
  const scroll = useRef();

  async function sendMessage() {
    try {
      await addDoc(collection(firestore, "messages"), {
        email: "miscellaneous2335@gmail.com",
        text: msg,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      });
    } catch (error) {
      console.log(error);
    }

    setMsg("");

    const citiesRef = firestore.collection("messages");

    const snapshot = await citiesRef.orderBy("createdAt").get();

    if (snapshot.empty) {
      console.log("No matching documents.");
      return;
    }
    let list = [];

    snapshot.forEach((doc) => {
      console.log(doc.id, "=>", doc.data());
      list.push(doc.data());
    });

    setData(list);

    // const fetchData = async () => {
    //   let list: any = [];
    //   try {
    //     const querySnapshot = await getDocs(collection(firestore, "messages"));

    //     querySnapshot.forEach((doc) => {
    //       list.push({ id: doc.id, ...doc.data() });
    //     });
    //     setData(list);
    //   } catch (err) {
    //     console.log(err);
    //   }
    // };
    // fetchData();
  }

  useEffect(() => {
    const fetchData = async () => {
      const citiesRef = firestore.collection("messages");

      const snapshot = await citiesRef.orderBy("createdAt").get();

      if (snapshot.empty) {
        console.log("No matching documents.");
        return;
      }
      let list = [];

      snapshot.forEach((doc) => {
        console.log(doc.id, "=>", doc.data());
        list.push(doc.data());
      });

      setData(list);
    };
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(firestore, "messages", id));
      setData(data.filter((item) => item.id !== id));
    } catch (err) {
      console.log(err);
    }
  };

  console.log(show);
  return (
    <div style={{ backgroundColor: "black" }}>
      <Navbar />
      <div className="chat-main-section">
        <div className="chatContainer">
          {data.map((messages) => (
            <>
              <div className={email === messages.email ? "one" : "two"}>
                <div
                  className={email === messages.email ? "message1" : "message2"}
                >
                  <div className="email-message">
                    <div className="chat-email">{messages.email}</div>
                    <div className="chat-text"> {messages.text}</div>

                    {email === messages.email ? (
                      <Button
                        onClick={() =>
                          setShow(
                            show[0] ? [false, messages.id] : [true, messages.id]
                          )
                        }
                        sx={{
                          position: "absolute",
                          top: "0",
                          right: "-10px",
                        }}
                      >
                        <div
                          style={{
                            width: "20px",
                            height: "20px",
                            borderRadius: "50px",
                            backgroundColor: "black",
                          }}
                        ></div>
                      </Button>
                    ) : (
                      ""
                    )}

                    {email === messages.email ? (
                      show[1] === messages.id ? (
                        <>
                          <Button
                            onClick={() =>
                              setShow(
                                show[0]
                                  ? [false, messages.id]
                                  : [true, messages.id]
                              )
                            }
                            sx={{
                              position: "absolute",
                              top: "0",
                              right: "-10px",
                            }}
                          >
                            <div
                              style={{
                                width: "20px",
                                height: "20px",
                                borderRadius: "50px",
                                backgroundColor: "black",
                              }}
                            ></div>
                          </Button>

                          <div>
                            {show[0] ? (
                              <>
                                <button
                                  className="chat-btn"
                                  onClick={() => handleDelete(messages.id)}
                                >
                                  delete
                                </button>
                              </>
                            ) : (
                              ""
                            )}
                          </div>
                        </>
                      ) : (
                        ""
                      )
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
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
              onClick={() => sendMessage()}
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

        <div ref={scroll}></div>
      </div>
    </div>
  );
};

export default Chat;
