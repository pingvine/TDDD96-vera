export class Message {
  constructor(
    public senderTeam: string,
    public notice: any,
    public receivers: string[]
  ) {}
}
