// EventEmitter.js
class EventEmitter {
    constructor() {
        this.events = {};
    } //Конструктор класса, который вызывается при создании нового экземпляра EventEmitter.

    on(eventName, listener) {
        if (!this.events[eventName]) {
            this.events[eventName] = [];
        } // создание массива слушателей
        this.events[eventName].push(listener); // добавление слушателя в массив
    }

    emit(eventName, ...args) {   // Принимает название события и любые дополнительные аргументы (...args), которые будут переданы слушателям.
        if (this.events[eventName]) {
            this.events[eventName].forEach(listener => {
                listener(...args);
            }); //Если слушатели существуют, перебирает их и вызывает функции, передавая им аргументы.
        }
    }

    off(eventName, listener) {
        if (!this.events[eventName]) return;
        this.events[eventName] = this.events[eventName].filter(
            registeredListener => registeredListener !== listener
        ); // удаление (отписка) слушателя от указанного события
    }

    // Метод для проверки подписки
    hasListeners(eventName) {
        return this.events[eventName] && this.events[eventName].length > 0;
    }
    //Этот метод проверяет, есть ли слушатели для заданного события. 
    //Он возвращает true, если есть хотя бы один слушатель, и false в противном случае.
}

// Пример использования
const emitter = new EventEmitter();

// Подписка на событие
const logEvent = () => {
    console.log('Событие произошло!');
};
emitter.on('event', logEvent);

// Проверка подписки
console.log(emitter.hasListeners('event')); // true

// Вызов события
emitter.emit('event'); // Событие произошло!

// Удаление обработчика
emitter.off('event', logEvent);

// Проверка подписки после удаления
console.log(emitter.hasListeners('event')); // false

// Пример с данными
const logData = (data) => console.log(data);
emitter.on('data', logData);
console.log(emitter.hasListeners('data')); // true

emitter.emit('data', { message: 'Hello, world!' }); // { message: 'Hello, world!' }

emitter.off('data', logData);
console.log(emitter.hasListeners('data')); // false
