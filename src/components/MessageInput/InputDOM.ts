export class InputDOM {
  private input: HTMLInputElement | null = null;

  set ref(input: HTMLInputElement | null) {
    this.input = input;
  }

  get value() {
    if (!this.input) return "";
    return this.input.value;
  }

  set value(value: string) {
    if (!this.input) return;
    this.input.value = value;
  }
}
