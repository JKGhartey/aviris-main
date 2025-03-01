import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@aviris/ui/components/ui/table";
import { Badge } from "@aviris/ui/components/ui/badge";
import { ComponentDoc } from "~/config/types";
import { cn } from "@aviris/ui/lib/utils";

interface ComponentPropsProps {
  component: ComponentDoc;
  className?: string;
}

export function ComponentProps({ component, className }: ComponentPropsProps) {
  const { props } = component;

  if (!props?.length) {
    return null;
  }

  return (
    <div className={cn("space-y-6", className)}>
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold tracking-tight">Props</h2>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[200px]">Name</TableHead>
            <TableHead>Description</TableHead>
            <TableHead className="w-[200px]">Type</TableHead>
            <TableHead className="w-[150px]">Default</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {props.map((prop) => (
            <TableRow key={prop.name}>
              <TableCell className="font-mono">
                {prop.name}
                {prop.required && (
                  <Badge variant="destructive" className="ml-2">
                    Required
                  </Badge>
                )}
              </TableCell>
              <TableCell>{prop.description}</TableCell>
              <TableCell className="font-mono">{prop.type}</TableCell>
              <TableCell className="font-mono">
                {prop.default === "undefined" ? "-" : prop.default}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
