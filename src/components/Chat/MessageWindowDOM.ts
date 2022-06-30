export class MessageWindowDOM {
  private chatContainer: HTMLDivElement | null = null;

  set ref(div: HTMLDivElement | null) {
    this.chatContainer = div;
  }

  get scrollTop() {
    if (!this.chatContainer) return 0;
    return this.chatContainer.scrollTop;
  }

  get scrollHeight() {
    if (!this.chatContainer) return 0;
    return this.chatContainer.scrollHeight;
  }

  scrollToBottom(px: number) {
    if (!this.chatContainer) return;
    this.chatContainer.scrollTop = px;
  }
}
