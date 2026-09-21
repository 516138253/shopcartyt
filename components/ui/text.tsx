import { cn } from "@/lib/utils";

const Title = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h2
      className={cn(
        "text-2xl md:text-3xl font-bold text-brand-navy capitalize tracking-tight",
        className
      )}
    >
      {children}
    </h2>
  );
};

const SubTitle = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h3 className={cn("font-semibold text-brand-navy", className)}>
      {children}
    </h3>
  );
};

const SubText = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <p className={cn("text-slate-500 text-sm leading-relaxed", className)}>
      {children}
    </p>
  );
};

export { Title, SubTitle, SubText };
