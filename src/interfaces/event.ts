export interface Event {
  _id: string;
  issueId: string;
  timeStamp: Date;
  createdBy: {
    ip: string | null;
    email: string | null;
    userId: string | null;
  };
  os?: {
    version: string | null;
    name: string;
  };
  browser?: {
    version: string;
    name: string;
  };
}
// os , browser , sdk 분리
