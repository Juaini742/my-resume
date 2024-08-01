import { cn } from "@/lib/utils";

interface Props {
  className?: string;
  children: React.ReactNode;
}

function CardContainer({ className, children }: Props) {
  return (
    <div
      className={cn("border-l-2 border-primary mt-2 ml-5 pl-5 pr-4", className)}
    >
      {children}
    </div>
  );
}

export default CardContainer;
