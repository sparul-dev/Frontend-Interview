import { useEffect, useRef, useState } from "react";
import Bar from "./Bar";
import styles from "./index.module.css";

const ProgressBar = () => {
  const [bars, setBars] = useState<number[]>([]);
  const [activeBar, setActiveBar] = useState(0);
  const [count , setCount] = useState(0);

  const intervalRef = useRef<number | null>(null);

  const handleFillBar = () => {

    if(intervalRef.current){
        clearInterval(intervalRef.current);
    }
    let completed = false;

    intervalRef.current = setInterval(() => {
      setBars((prev) =>{
        const newBars= [...prev];
        const current = newBars[activeBar];

        if(current>=100){
            if(!completed){
                clearInterval(intervalRef.current ||0);
                completed = true;
                setActiveBar(prev => prev+1);
                intervalRef.current = null;

            }

            newBars[activeBar] = 100;
            return newBars;

        }

        newBars[activeBar] = Math.min(100, current+2);
        return newBars;
      })
    }, 50);

    return () => clearInterval(intervalRef.current || 0);
  };

  useEffect(() => {
    if (activeBar >= bars.length) return;

    const cleanup = handleFillBar();
    return cleanup;
  }, [activeBar, bars.length]);

  const handleAddBar = () => {
    setBars(prev => [...prev, 0]);
  };

  return (
    <>
      <h2>Progress Bars</h2>
      <button onClick={handleAddBar}>＋ Add Bar</button>

      {bars.length > 0 && (
        <div className={styles.bar_container}>
          {bars.map((currBar, index) => (
            <Bar key={index} fill={currBar} />
          ))}
        </div>
      )}
    </>
  );
};

export default ProgressBar;
