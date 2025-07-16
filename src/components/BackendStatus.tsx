import { useEffect } from "react";

export function BackendStatus() {
 useEffect(() => {
  fetch("http://localhost:5050/")
    .then(res => {
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      return res.text();
    })
    .then(data => {
      console.log("Backend response:", data);
    })
    .catch(err => {
      console.error("Error fetching backend status:", err.message);
    });
}, []);

  return <div>Check the console for backend status.</div>;
}