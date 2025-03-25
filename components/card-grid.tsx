import { cn } from "@/lib/utils";
waidaw

export interface CardGridColumn extends React.HTMLAttributes<HTMLElement> {
  cards: React.ReactNode[];
}

export interface CardGridProps extends React.HTMLAttributes<HTMLElement> {
  columns: CardGridColumn[];
}

export default function CardGrid({ columns, ...props }: CardGridProps) {
  return (
    <div {...props} className={cn("flex flex-row space-x-4", props.className)}>
      {columns.map((column, index) => (
        <div
          key={index}
          {...column}
          className={cn("space-y-4", column.className)}
        >
          {column.cards.map((card, cardIndex) => (
            <div key={cardIndex}>{card}</div>
          ))}
        </div>
      ))}
    </div>
  );
}
