export interface ISession {
  readonly userId: string;

  sessionId: string;
  sessionHash: string;
}
