import { LucideIcon, FileUp, Briefcase, Layout, BarChart } from "lucide-react";

export interface CodeExample {
  title: string;
  description: string;
  code: string;
}

export interface ComponentProp {
  name: string;
  type: string;
  default: string;
  description: string;
  required?: boolean;
}

export interface ComponentDoc {
  name: string;
  description: string;
  status: "stable" | "beta" | "coming-soon";
  icon: LucideIcon;
  examples: CodeExample[];
  props: ComponentProp[];
}

export const components: Record<string, ComponentDoc> = {
  "file-upload": {
    name: "File Upload",
    description:
      "A versatile file upload component with drag and drop support, file validation, and progress tracking.",
    status: "stable",
    icon: FileUp,
    examples: [
      {
        title: "Basic Example",
        description: "A simple file upload component that accepts image files.",
        code: `import { FileUpload } from "@aviris/ui/components/file-upload"

export default function FileUploadExample() {
  return (
    <FileUpload
      accept="image/*"
      maxSize={5000000}
      onUpload={(files) => console.log(files)}
    />
  )
}`,
      },
      {
        title: "Advanced Example",
        description: "File upload with validation and multiple file support.",
        code: `import { FileUpload } from "@aviris/ui/components/file-upload"

export default function AdvancedFileUpload() {
  return (
    <FileUpload
      accept=".pdf,.doc,.docx"
      maxSize={10000000}
      multiple={true}
      onUpload={(files) => handleFiles(files)}
      validation={{
        maxFiles: 3,
        allowedTypes: ['application/pdf', 'application/msword']
      }}
    />
  )
}`,
      },
    ],
    props: [
      {
        name: "accept",
        type: "string",
        default: "undefined",
        description: "File types to accept (e.g., 'image/*', '.pdf')",
      },
      {
        name: "maxSize",
        type: "number",
        default: "undefined",
        description: "Maximum file size in bytes",
      },
      {
        name: "multiple",
        type: "boolean",
        default: "false",
        description: "Allow multiple file selection",
      },
      {
        name: "onUpload",
        type: "(files: File[]) => void",
        default: "undefined",
        description: "Callback function when files are uploaded",
        required: true,
      },
    ],
  },
  "job-application": {
    name: "Job Application",
    description:
      "A multi-step form component for job applications with validation and progress tracking.",
    status: "beta",
    icon: Briefcase,
    examples: [
      {
        title: "Basic Example",
        description: "Simple job application form with basic fields.",
        code: `import { JobApplication } from "@aviris/ui/components/job-application"

export default function BasicJobApplication() {
  return (
    <JobApplication
      onSubmit={(data) => console.log(data)}
      fields={["name", "email", "resume"]}
    />
  )
}`,
      },
    ],
    props: [
      {
        name: "onSubmit",
        type: "(data: FormData) => void",
        default: "undefined",
        description: "Callback function when form is submitted",
        required: true,
      },
      {
        name: "fields",
        type: "string[]",
        default: "[]",
        description: "Array of field names to include in the form",
      },
    ],
  },
  "kanban-board": {
    name: "Kanban Board",
    description:
      "A flexible drag-and-drop Kanban board component for task management and workflow visualization. Built with react-beautiful-dnd for smooth interactions.",
    status: "beta",
    icon: Layout,
    examples: [
      {
        title: "Basic Example",
        description: "Simple Kanban board with three columns and basic tasks.",
        code: `import { KanbanBoard } from "@aviris/ui/components/kanban-board"

export default function BasicKanban() {
  const columns = [
    {
      id: "todo",
      title: "To Do",
      tasks: [
        { id: "1", title: "Research competitors" },
        { id: "2", title: "Design mockups" }
      ]
    },
    {
      id: "in-progress",
      title: "In Progress",
      tasks: [
        { id: "3", title: "Implement authentication" }
      ]
    },
    {
      id: "done",
      title: "Done",
      tasks: [
        { id: "4", title: "Setup project structure" }
      ]
    }
  ]

  return (
    <KanbanBoard
      columns={columns}
      onTaskMove={(taskId, source, destination) => {
        console.log("Task moved:", { taskId, source, destination })
      }}
    />
  )
}`,
      },
      {
        title: "Advanced Example",
        description:
          "Kanban board with custom styling, task details, and real-time updates.",
        code: `import { KanbanBoard } from "@aviris/ui/components/kanban-board"

export default function AdvancedKanban() {
  return (
    <KanbanBoard
      columns={columns}
      onTaskMove={handleTaskMove}
      customStyles={{
        column: "bg-secondary/50 rounded-lg p-4",
        task: "bg-background shadow-sm hover:shadow-md"
      }}
      renderTask={(task) => (
        <div className="p-4 space-y-2">
          <h3 className="font-medium">{task.title}</h3>
          <div className="flex gap-2">
            {task.labels?.map(label => (
              <Badge key={label}>{label}</Badge>
            ))}
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-muted-foreground">
              {task.dueDate}
            </span>
            <Avatar src={task.assignee.avatar} />
          </div>
        </div>
      )}
      enableRealtime={true}
      onTaskUpdate={handleTaskUpdate}
    />
  )
}`,
      },
    ],
    props: [
      {
        name: "columns",
        type: "Column[]",
        default: "[]",
        description: "Array of columns with their tasks",
        required: true,
      },
      {
        name: "onTaskMove",
        type: "(taskId: string, source: DropResult, destination: DropResult) => void",
        default: "undefined",
        description: "Callback function when a task is moved between columns",
        required: true,
      },
      {
        name: "customStyles",
        type: "{ column?: string; task?: string }",
        default: "{}",
        description: "Custom CSS classes for columns and tasks",
      },
      {
        name: "renderTask",
        type: "(task: Task) => ReactNode",
        default: "undefined",
        description: "Custom render function for task items",
      },
      {
        name: "enableRealtime",
        type: "boolean",
        default: "false",
        description: "Enable real-time updates for collaborative features",
      },
      {
        name: "onTaskUpdate",
        type: "(task: Task) => void",
        default: "undefined",
        description: "Callback function when a task is updated",
      },
    ],
  },
};
