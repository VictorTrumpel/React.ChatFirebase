import { useAppSelector } from "../../hooks/useAppSelector";
import React, { useEffect, useState, useRef, useMemo } from "react";
import { messagesCollection } from "../../firebase/FireBase";
import {
  query,
  orderBy,
  limit,
  getDocs,
  startAfter,
  DocumentData,
} from "firebase/firestore";
import { Message } from "../Message";

const messageQuery = (startAfterKey: string) =>
  query(
    messagesCollection,
    orderBy("createdAt", "desc"),
    startAfter(startAfterKey),
    limit(5)
  );

const messagesFirstBatch = async (firstActiveMessage: DocumentData) => {
  const snapshotMessages = await getDocs(
    messageQuery(firstActiveMessage?.createdAt)
  );

  const rec: any[] = [];

  snapshotMessages.forEach((doc) => {
    rec.push(doc.data());
  });

  return rec;
};

export const HistoryMessagesWindow = () => {
  const { firstActiveMessage } = useAppSelector(
    (state) => state.messageReducer
  );

  const historical = useRef<HTMLDivElement | null>(null);

  const [messages, setMessages] = useState<DocumentData[]>([]);

  const options = useMemo(
    () => ({
      root: null,
      rootMargin: "0px",
      threshold: 0.3,
    }),
    []
  );

  useEffect(() => {
    (async () => {
      if (!firstActiveMessage) return;
      const messages = await messagesFirstBatch(firstActiveMessage);
      setMessages(() => messages.reverse());
    })();
  }, [firstActiveMessage]);

  useEffect(() => {
    if (historical.current) {
      historical.current?.addEventListener("scroll", () => {
        console.log("scroll");
      });
    }

    return () => {
      console.log(historical.current);
    };
  }, [historical, options]);

  return (
    <div className="history-messages" ref={historical}>
      {messages?.map((message, idx) => {
        return <Message key={idx} message={message} />;
      })}
      <h5 style={{ textAlign: "center" }}>history message</h5>
      <hr />
    </div>
  );
};
