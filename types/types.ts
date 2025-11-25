import { TableItem } from "@/components/reusable/reuseable-table";

export interface TableRowItem extends TableItem {
  classification?: string;
  classificationId?: string;
  constructionType?: string;
  wageOrderType?: string;
  source?: string;
  location?: string;
  rate?: number;
  effectiveDate?: string;
  status?: string;
  user?: string;
  email?: string;
  plan?: string;
  startDate?: string;
  nextBilling?: string;
  amount?: string;
  startTime?: string;
  endTime?: string;
  registered?: string;
  lastActive?: string;
  searches?: string;
}
