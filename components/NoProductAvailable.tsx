"use client";

import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { Loader2 } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";

const NoProductAvailable = ({
  selectedTab,
  className,
}: {
  selectedTab?: string;
  className?: string;
}) => {
  const { t } = useTranslation();

  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center py-10 min-h-80 space-y-4 text-center bg-blue-50/50 rounded-2xl w-full mt-10 border border-blue-100",
        className
      )}
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-bold text-brand-navy">
          {t.product.noProducts}
        </h2>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-slate-600"
      >
        {t.product.noProductsDescBefore}{" "}
        <span className="text-base font-semibold text-brand-navy">
          {selectedTab}
        </span>{" "}
        {t.product.noProductsDescAfter}
      </motion.p>

      <motion.div
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        className="flex items-center space-x-2 text-brand-blue"
      >
        <Loader2 className="w-5 h-5 animate-spin" />
        <span>{t.product.restocking}</span>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="text-sm text-slate-500"
      >
        {t.product.checkBack}
      </motion.p>
    </div>
  );
};

export default NoProductAvailable;
