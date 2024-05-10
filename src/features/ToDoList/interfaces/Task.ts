export interface Task {
  id: string;
  text: string;
  status: "draft" | "complete" | "pending";
  createdAt: Date;
}
