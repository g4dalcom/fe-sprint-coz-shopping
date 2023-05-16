import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

export default function Toast() {
  const [isFading, setIsFading] = useState(false);
  const state = useSelector((state) => state.notification);

  console.log("notify state = ", state);

  useEffect(() => {
    let mounted = true;
    setTimeout(() => {
      setIsFading(true);
    }, 4500);

    return () => (mounted = false);
  }, []);

  return (
    <div>
      <div>text</div>
    </div>
  );
}
