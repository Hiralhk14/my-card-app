import { ArrowUpCircle, ArrowDownCircle, ArrowUpDown, ChevronUp, ArrowLeftRight } from "lucide-react";
import clsx from "clsx";

import { TRANSACTIONS } from "@/shared/data/transcations";

const TransactionsList = () => {
  return (
    <div className="bg-white rounded-card overflow-hidden">
      <div className="bg-background flex items-center justify-between p-4">
        <div className="flex items-center gap-2 text-accent text-sm">
          <ArrowLeftRight size={16} />
          <span>Today&apos;s Transactions</span>
        </div>
        <button type="button">
          <ChevronUp size={18} className="text-gray-400" />
        </button>
      </div>

      <div className="border-l border-r border-b border-background">
        {TRANSACTIONS?.map((transaction) => (
          <div
            key={transaction?.id}
            className="flex items-start gap-3 mx-2 px-4 py-3 border-b border-accent"
          >
            <div className="w-10 h-10 rounded-full bg-secondary-light flex items-center justify-center">
              {transaction?.type === "debit" ? (
                <ArrowUpCircle size={18} className="text-accent" />
              ) : (
                <ArrowDownCircle size={18} className="text-accent" />
              )}
            </div>
            <div className="flex-1">
              <p className="text-sm text-gray-800">{transaction?.title}</p>
              <p className="text-xs text-gray-400">{transaction?.date}</p>
              <p className="text-xs text-accent">{transaction?.note}</p>
            </div>
            <span
              className={clsx(
                "text-sm",
                transaction.amount < 0 ? "text-danger" : "text-success"
              )}
            >
              {transaction?.amount < 0 ? "-" : "+"}$
              {Math?.abs(transaction?.amount)?.toFixed(2)}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TransactionsList;