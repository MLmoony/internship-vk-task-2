// EventEmitter.js
class EventEmitter {
    constructor() {
        this.events = {};
    }

    on(eventName, listener) {
        if (!this.events[eventName]) {
            this.events[eventName] = [];
        }
        this.events[eventName].push(listener);
    }

    emit(eventName, ...args) {
        if (this.events[eventName]) {
            this.events[eventName].forEach(listener => {
                listener(...args);
            });
        }
    }

    off(eventName, listener) {
        if (!this.events[eventName]) return;

        this.events[eventName] = this.events[eventName].filter(
            registeredListener => registeredListener !== listener
        );
    }
}

// Пример использования
const emitter = new EventEmitter();

const logData = (data) => console.log(data);
emitter.on('data', logData);

emitter.emit('data', { message: 'Hello, world!' });

emitter.off('data', logData);
