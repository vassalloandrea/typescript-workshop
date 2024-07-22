export class EventEmitter {
  events: any = {}

  on(event: any, listener: any) {
    if (!this.events[event]) {
      this.events[event] = []
    }

    this.events[event].push(listener)
  }

  emit(event: any, data: any) {
    if (this.events[event]) {
      this.events[event].forEach((listener: any) => listener(data))
    }
  }
}
