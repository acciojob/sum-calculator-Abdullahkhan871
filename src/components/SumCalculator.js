import React, { useEffect, useState } from "react";

const SumCalculator = () => {
  const [vlv, setVlv] = useState(0);
  const [sum, setSum] = useState(0);

  useEffect(() => {
    setSum((pre) => pre + Number(vlv));
    console.log("sum ", sum, "vlv", vlv);
  }, [vlv]);

  return (
    <div>
      <h1>Sum Calculator</h1>
      <input
        type="number"
        value={vlv}
        onChange={(e) => setVlv(e.target.value)}
      />
      <p>Sum: {sum}</p>
    </div>
  );
};

export default SumCalculator;
