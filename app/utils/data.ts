export type TicketStatus = "To Do" | "In Progress" | "Done";
export type Priority = "Low" | "Medium" | "High";

export interface Ticket {
  id: string;
  title: string;
  description: string;
  status: TicketStatus;
  priority: Priority;
  assignee: string;
  createdAt: string;
}

export const mockTickets: Ticket[] = [
  { id: "ISS-492", title: "Auth proxy SSL sertifika hatası", description: "Stage ortamında nginx proxy 502 dönüyor. Loglarda x509 süresi geçmiş görünüyor.", status: "To Do", priority: "High", assignee: "Burak", createdAt: "1 sa" },
  { id: "ISS-491", title: "Tabloda overflow problemi", description: "Kullanıcı tablosu mobilde scroll olmuyor, ekranın dışına taşıyor.", status: "In Progress", priority: "Medium", assignee: "Zeynep", createdAt: "3 sa" },
  { id: "ISS-488", title: "Webhook response timeout", description: "Payment API dönen webhook isteklerini 10s içerisinde işleyemediğimiz için loop'a giriyor.", status: "To Do", priority: "High", assignee: "Hatice", createdAt: "Dün" },
  { id: "ISS-485", title: "Tipografi kilitlenmeleri", description: "Design system'da belirtilen font ağırlıkları Safari üzerinde patlıyor.", status: "Done", priority: "Low", assignee: "Can", createdAt: "2g" },
  { id: "ISS-480", title: "S3 Bucket permission error", description: "CI/CD sürecinde dev ortamına img publish edemiyoruz. Terraform config değişmeli.", status: "In Progress", priority: "Medium", assignee: "Burak", createdAt: "1h" }
];

export const mockUsers = [
  { id: 1, name: "Hatice Kartal", role: "Frontend Lead", email: "hatice@acme.inc", status: "Active" },
  { id: 2, name: "Burak Y.", role: "DevOps", email: "burak@acme.inc", status: "Active" },
  { id: 3, name: "Zeynep T.", role: "UI Designer", email: "zeynep@acme.inc", status: "Active" },
  { id: 4, name: "Can S.", role: "Backend Eng.", email: "can@acme.inc", status: "Inactive" }
];
