import * as React from "react";
import { useEffect, useState } from "react";
import DisplayFlag from "./DisplayFlag";

export default function GetFlag() {
  const [status, setStatus] = useState("");
  const [flag, setFlag] = useState("");

  // Fetch the flag, set status.
  useEffect(() => {
    setStatus("Loading...");
    const fetchData = async () => {
      const response = await fetch(
        "https://wgg522pwivhvi5gqsn675gth3q0otdja.lambda-url.us-east-1.on.aws/77726f"
      );
      const text = await response.text();
      setFlag(text);
      setStatus("Success");
    };
    fetchData().catch(() => setStatus("Error"));
  }, []);

  return (
    <div>
      {"Success" === status ? <DisplayFlag flag={flag} /> : <p>{status}</p>}
    </div>
  );
}
