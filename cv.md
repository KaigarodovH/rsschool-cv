1. Full name: Kaigarodov Andrey
2. Contacts:
   - email: kaigarodov2012@yandex.ru
   - vkontakte: https://vk.com/a.kaygarodov
   - telegram: https://t.me/kaigarodov
3. About me  
   **Main target и приоритеры**: Стать крутым разработчиком десктоп приложений, познать с++, а сним и фреймворк qt.

   **Сильные стороны**: Люблю капаться в деталях. Не ограничиваюсь только одним сетком технолоий и всегда готов попробовать что-то новое.

   **Expirience**:

   - 2017-2017 Unilever
   - 2020-Now ProsoftSystems

4. Skills

   - MySQL/MongoDB
   - HTML/CSS
   - GIT
   - python
   - C/C++/C#

5. Code example

```cpp
void StartTaskUartOut(void *argument)
{
  /* USER CODE BEGIN StartTaskUartOut */
  T_IO_Message msg;
  osStatus_t status;
  uint8_t* data_ptr;
  /* Infinite loop */
  for(;;)
  {
	if(status == osOK)
	{
	    data_ptr = msg.template_ptr == NULL ? msg.buff : msg.template_ptr;
	    while (HAL_UART_Transmit_IT(&huart3, data_ptr, strlen(data_ptr))==HAL_BUSY);
	}
	status = osMessageQueueGet(StdOutputHandle, &msg, NULL, 0U);
	osDelay(1);
  }
  /* USER CODE END StartTaskUartOut */
}
```

6. Education
   - URFU 2016-2020
   - Urfu 2020-2022
7. Languages
   - English: B1
