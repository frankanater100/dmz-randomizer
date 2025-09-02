import { useEffect, useState } from "react";

export default function Toast({ msg, onDone, ms = 1500 }) {
  const [show, setShow] = useState(Boolean(msg));

  useEffect(() => {
    if (!msg) return;
    setShow(true);
    const t = setTimeout(() => {
      setShow(false);
      onDone?.();
    }, ms);
    return () => clearTimeout(t);
  }, [msg, ms, onDone]);

  if (!show) return null;

  return (
    <div style={{
      position: "fixed",
      bottom: 20,
      left: "50%",
      transform: "translateX(-50%)",
      background: "rgba(20,24,20,0.92)",
      border: "1px solid #2a2f2a",
      padding: "10px 14px",
      borderRadius: 10,
      zIndex: 1000,
      color: "#e9eaee",
      boxShadow: "0 10px 28px rgba(0,0,0,.45)",
      fontSize: 14
    }}>
      {msg}
    </div>
  );
}