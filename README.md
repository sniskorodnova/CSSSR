# CSSSR

Для автотестов использовался фреймворк Cypress. Информация о фреймворке: https://www.cypress.io/
Для запуска необходимо скачать содержимое репозитория на компьютер. Из скачанной папки выполнить команду
./node_modules/.bin/cypress run --browser chrome (при выполнении этой команды запустится браузер и можно будет видеть все действия автотестов)

Начнут выполняться тесты из спека Test.js. Он содержит три теста:

первый тест проверяет, что элемент h1 содержит название должности и отображается на странице

второй тест проверяет, что после повторного нажатия на ссылку выбранного столбца в разделе "Распределение обязанностей", текст в черной рамке должен отображаться

третий тест проверяет ссылку на инструмент для скриншотов

На данный момент все три теста фейлятся. Для того, чтобы они прошли успешно, необходимо:
- в html страницы в элемент h1 вместо png картинки написать название должности "QA-инженер".
- не присваивать атрибут display: none для div элемента после повторного нажатия на уже выбранную ссылку в разделе "Распределение обязанностей"
- в html страницы поменять ссылку на инструмент для скриншотов на "http://monosnap.com/"
