export default interface ThreadItem {
  id: string;
  views: number;
  points: number;
  flagPoints: number;
  body: string;
  userName: string;
  userId: string;
  createdOn: Date;
}
