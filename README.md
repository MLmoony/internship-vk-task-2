# internship-vk-task-2

Написать реализацию EventEmitter.

## Требования
### Подписка на события:
Реализовать метод on(eventName, listener), который:\
Пример использования:\
const emitter = new EventEmitter();\
emitter.on('data', (data) => console.log(data));\
• Регистрирует обработчик события listener на событие с именем eventName\
• Позволяет регистрировать несколько обработчиков на одно событие.

### Испускание события:
Реализовать метод emit (eventName, ...args), который:\
Пример использования:\
emitter. emit('data', { key: 'value' });\
• Вызывает все обработчики, зарегистрированные на событие с именем eventName\
• Передает в обработчики параметры, указанные в ...args

### Удаление подписки: 
Реализовать метод off(eventName, listener), который:\
Пример использования:\
emitter.off('data', listener);\
• Удаляет указанный обработчик listener для события с именем eventName\
• Если обработчик не найден, ничего не делает.
