import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";

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
}

export function ApiTable({
  title,
  description,
  properties,
  showDefault = true,
}: ApiTableProps) {
  return (
    <div className="space-y-4">
      {title && (
        <h3 className="scroll-m-20 text-xl font-semibold tracking-tight mb-4">
          {title}
        </h3>
      )}
      {description && (
        <p className="text-muted-foreground mb-4">{description}</p>
      )}
      <Table>
        <TableHeader>
          <TableRow className="hover:bg-transparent">
            <TableHead className="w-[150px] h-12 px-4">
              {title ? "Property" : "Prop"}
            </TableHead>
            <TableHead className="w-[200px] px-4">Type</TableHead>
            {showDefault && (
              <TableHead className="w-[150px] px-4">Default</TableHead>
            )}
            <TableHead className="px-4">Description</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {properties.map((prop) => (
            <TableRow key={prop.name} className="hover:bg-muted/50">
              <TableCell className="font-mono font-semibold h-16 px-4">
                {prop.name}
              </TableCell>
              <TableCell className="font-mono text-muted-foreground px-4">
                {prop.type}
              </TableCell>
              {showDefault && (
                <TableCell className="font-mono text-muted-foreground px-4">
                  {prop.defaultValue || "-"}
                </TableCell>
              )}
              <TableCell className="px-4">{prop.description}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
