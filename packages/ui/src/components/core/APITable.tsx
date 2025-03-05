import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { cn } from "../../lib/utils";

interface ApiTableProps {
  title?: string;
  description?: string;
  properties: {
    name: string;
    type: string;
    defaultValue?: string;
    description: string;
  }[];
  showDefault?: boolean;
  className?: string;
}

export function ApiTable({
  title,
  description,
  properties = [],
  showDefault = true,
  className,
}: ApiTableProps) {
  return (
    <div className={cn("space-y-4", className)}>
      {title && (
        <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
          {title}
        </h3>
      )}
      {description && <p className="text-muted-foreground">{description}</p>}
      <div className="relative overflow-auto rounded-lg border">
        <Table>
          <TableHeader>
            <TableRow className="hover:bg-transparent">
              <TableHead className="w-[180px] h-12 px-4 bg-muted/50">
                {title ? "Property" : "Prop"}
              </TableHead>
              <TableHead className="w-[200px] px-4 bg-muted/50">Type</TableHead>
              {showDefault && (
                <TableHead className="w-[150px] px-4 bg-muted/50">
                  Default
                </TableHead>
              )}
              <TableHead className="min-w-[300px] px-4 bg-muted/50">
                Description
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {properties.map((prop) => (
              <TableRow key={prop.name} className="hover:bg-muted/50">
                <TableCell className="font-mono font-semibold h-16 px-4 align-top py-4">
                  {prop.name}
                </TableCell>
                <TableCell className="font-mono text-sm text-muted-foreground px-4 align-top py-4 whitespace-pre-wrap">
                  {prop.type}
                </TableCell>
                {showDefault && (
                  <TableCell className="font-mono text-sm text-muted-foreground px-4 align-top py-4">
                    {prop.defaultValue || "-"}
                  </TableCell>
                )}
                <TableCell className="px-4 align-top py-4">
                  {prop.description}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
