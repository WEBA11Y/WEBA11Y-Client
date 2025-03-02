interface InspectionItem {
  issues: number;
  total: number;
  description: string;
}

interface ImportanceStatus extends InspectionItem {
  level: string;
}

interface StepStatus extends InspectionItem {
  step: string;
}

interface IssueTypeStatus extends InspectionItem {
  type: string;
}

export interface MockRecentInspection {
  importance_status: ImportanceStatus[];
  step_status: StepStatus[];
  issue_type_status: IssueTypeStatus[];
}
