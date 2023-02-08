import React from "react";

const TransactionToast = ({ userAmount, hash, text, text2 }) => {
  return (
    <div className="flex flex-col">
      <div>
        Successfully {text} {userAmount} SAWON Tokens {text2}
      </div>
      <a
        href={`https://etherscan.io/tx/${hash}`}
        target="_blank"
        rel="noreferrer noopener"
        className="text-blue-300 mt-2 underline"
      >
        View on explorer
      </a>
    </div>
  );
};

export default TransactionToast;
