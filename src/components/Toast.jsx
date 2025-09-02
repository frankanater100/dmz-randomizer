// src/components/Toast.jsx
import { useEffect, useState } from "react";
export default function Toast({ msg, onDone, ms=1500 }) {
  const [show, setShow] = useState(Boolean(msg));
  useEffect(()=>{ if(!msg) return; setShow(true); const t=setTimeout(()=>{setShow(false); onDone?.();}, ms); return ()=>clearTimeout(t); },[msg,ms,onDone]);
  if(!show) return null;
  return <div style={{position:"fixed",bottom:20,left:"50%",transform:"translateX(-50%)",
    background:"rgba(20,24,20,.9)",border:"1px solid #333",padding:"10px 14px",
    borderRadius:10,zIndex:100,color:"#e8ede8"}}>{msg}</div>;
}