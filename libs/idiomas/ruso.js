const lenguaje = () => { return 'rs' } // ruso  

//index.js
const tmp = () => { return `╭━─━─━─≪🔆≫─━─━─━╮\n│ ПАПКА TMP БЫЛА ОЧИЩЕНА ПРАВИЛЬНО\n╰━─━─━─≪🔆≫─━─━─━╯` } 
const session = () => { return `🟢 НЕТ ФАЙЛА ДЛЯ УДАЛЕНИЯ` }
const errorsession = () => { return `🟢 ЧТО-ТО ПОШЛО НЕ ТАК ВО ВРЕМЯ УДАЛЕНИЯ, ФАЙЛ НЕ УДАЛЕН.` }
const archivo = () => { return `🟢 АРХИВ` }
const archborrado = () => { return ` УСПЕШНО УДАЛЕНО` } 
const archivoborrado = () => { return ` НЕ УДАЛЕНО` }
const purgesessions = () => { return `╭━─━─━─≪🔆≫─━─━─━╮\n│ АУТООЧИСТИТЕЛЬНЫЕ СЕССИИ\n│ УДАЛЕННЫЕ ФАЙЛЫ ✅\n╰━─━─━─≪🔆≫─━─━─━╯` }
const purgesubbots  = () => { return `╭━─━─━─≪🔆≫─━─━─━╮\n│AUTO_PURGE_SESSIONS_SUB-BOTS\n│ УДАЛЕННЫЕ ФАЙЛЫ ✅\n╰━─━─━─≪🔆≫─━─━─━╯` }
const purgeoldfiles = () => { return `╭━─━─━─≪🔆≫─━─━─━╮\n│AUTO_PURGE_OLDFILES\n│ УДАЛЕННЫЕ ФАЙЛЫ ✅\n╰━─━─━─≪🔆≫─━─━─━╯` }

const console = { 
text1: ` МЕТОД СВЯЗИ`, 
text2: ` КАК ВЫ ХОТИТЕ ПОДКЛЮЧИТЬСЯ?`, 
text3: ` ⇢ Вариант 1:`, 
text4: ` QR код`, 
text5: ` ⇢ Вариант 2:`, 
text6: ` Восемьзначный код.`, 
text7: ` Напишите только номер`, 
text8: ` вариант подключения.`, 
text9: (chalk) => ` НЕ РАЗРЕШАЮТСЯ НОМЕРА, КРОМЕ КАК ${chalk.bold.greenBright("1")} О ${chalk.bold.greenBright("2")}, ТАКЖЕ НИ БУКВ, НИ СПЕЦИАЛЬНЫХ СИМВОЛОВ.\n${chalk.bold.yellowBright(" СОВЕТ: СКОПИРУЙТЕ НОМЕР ОПЦИИ И ВСТАВЬТЕ ЕГО В КОНСОЛЬ.")}`, 
text10: `🟢 Начните с кода страны своего номера WhatsApp, например: +59178862672`, 
text11: `🟢 Введите номер, который будет бот\nНапример: +59178862672`, 
text12: `❌ Убедитесь, что добавлен код страны.`, 
text13: `👑 Код привязки 👑:` }

//call
const smscall = () => { return `Вы будете заблокированы*\n_Причина: за создание` }
const smscall2 = () => { return `*Если вы случайно позвонили, свяжитесь с моим создателем, чтобы разблокировать вас.*` }

//antiprivado
const smsAntiPv = () => { return `В личных сообщениях бота запрещено рассказывать о том, через что бот будет вступать в группу бота.*` } 

//detec
const smsAvisos = () => { return `[ 🔒 ЗАКРЫТАЯ ГРУППА ]` }  
const smsAvisos2 = () => { return `「 НАСТРОЙКИ ГРУППЫ」\n\n*Теперь только админы могут писать группы*` } 
const smsAvisos3 = () => { return `[ 🔓 ОТКРЫТЫЕ ГРУППЫ ]` }
const smsAvisos4 = () => { return `「 НАСТРОЙКИ ГРУППЫ」\n\n*Теперь все участники могут отправлять сообщения 🗣️*` } 
const smsAvisos5 = () => { return `「 НАСТРОЙКИ ГРУППЫ」\n\n` } 
const smsAvisos6 = () => { return `*Теперь только администраторы могут редактировать настройки группы.*` } 
const smsAvisos7 = () => { return `Теперь все участники могут редактировать настройки группы.` } 
const smsAvisos8 = () => { return `Описание группы изменено, новое описание` }  
const smsAvisos9 = () => { return `*Имя группы изменено на новое имя*` }

//welcome
const smsWel =  () => { return ` Варенье` }
const smsWel2 = () => { return `¿ КАК ВЫ? 😃` }
const smsWel3 = () => { return `¿ КАК ВЫ?😃\n\n『 Selamat Datang di` }
const smsWel4 = () => { return `Приятно познакомиться с друзьями 🤗\n\n_Не забудьте прочитать правила группы, чтобы не попасть в неприятности 🧐_\n\n*Просто наслаждайтесь группой и получайте удовольствие 🥳*` }
const smsWel5 = () => { return `[ НОВЫЕ УЧАСТНИКИ ]\n\n` }
const smsWel6 = () => { return `Мы приветствуем вас` }  
const smsWel7 = () => { return `⪨────[ ДОБРО ПОЖАЛОВАТЬ ]────⪩\n\n` } 
const smsWel8 = () => { return `💫 *Добро пожаловать в :*` }
const smsWel9 = () => { return `💫 *Участвовать*` }
const smsWel10 = () => { return `💫 *Дата*` }
const smsWel11 = () => { return `📢 *Прочитайте описание* 📢\n` }
const smsBye = () => { return ` Прощайте` }
const smsBye2 = () => { return `Да, оно ушло` }
const smsBye3 = () => { return `Дай Бог здоровья 😎` }
const smsBye4 = () => { return `покинуть группу._` }
const smsBye5 = () => { return `Остались фанаты BTS` }
const promote = () => { return `Поздравляем, вы теперь являетесь частью команды.🎉` }
const demote = () => { return `Вы больше не администратор 🥲` }

//mensaje el la consola inicio
const smsConexion = () => { return `🟢 ПОЛЬЗОВАТЕЛИ ПОДКЛЮЧАЮТСЯ =>` }  
const smsEscaneaQR = () => { return ` СКАНИРОВАНИЕ QR, СРОК ДЕЙСТВИЯ 45 СЕКУНД...` }
const smsConectado = () => { return ` ОНО ПОДКЛЮЧЕНО ПРАВИЛЬНО` }
const smsConexionOFF = () => { return `[ ⚠️ ]  Соединение закрыто. Удалите папку сеансов и повторите сканирование..`}
const smsConexioncerrar = () => { return `⚠️ СОЕДИНЕНИЕ ЗАКРЫТО, ПОПЫТКА ВОССТАНОВИТЬСЯ` }
const smsConexionperdida = () => { return `[ ⚠️ ] Потеряно соединение с сервером, повторное подключение...`}
const smsConexionreem = () => { return `[ ⚠️ ] Соединение заменено, открыта еще одна новая сессия. Пожалуйста, сначала выйдите из текущего сеанса.`}
const smsConexionreinicio = () => { return `🔁 Требуется перезагрузка, перезагрузка...`}
const smsConexiontiem = () => { return `[ ⚠️ ] Время соединения истекло, повторное подключение...`}
const smsConexiondescon = () => { return `[ ⚠️ ] Неизвестная причина отключения:`}

const consola = {
text: ` ВРЕМЯ :`, 
text1: ` СПОСОБ :`, 
text2: ` ТИП (СМС) :`, 
text3: ` ПОЛЬЗОВАТЕЛЬ :`, 
text4: ` ГРУППОВОЙ ЧАТ:`, 
text5: ` ЛИЧНАЯ ПЕРЕПИСКА:`, 
text6: ` СООБЩЕНИЕ :` }

//autobio
const Bio = { 
text: `🦁 ɴᴏᴠᴀʙᴏᴛ - Уже:`,  
text2: `Пользователи используют меня, я могу отвечать медленно, моя скорость:`,
text3: `👑 ɴᴏᴠᴀʙᴏᴛ-ᴍᴅ | Ресурсы ✅️:`,   
text4: `Чтобы установить время, используйте мой список команд #menu`,  
text5: `ɴᴏᴠᴀʙᴏᴛ К ʟᴏʟɪʙᴏᴛ - Подпишитесь на наш YouTube-канал 🔔\nhttps://www.youtube.com/@elrebelde.21`, 
text6: `✅ Активность:`, 
text7: `👥 Пользователь:` }

//antiarabe
const smsAntiFake = () => { return `✳️ В эту группу вход запрещен. Будут выданы поддельные номера....` }
const smsAntiArabe = () => { return `✳️ В этой группе арабские цифры не допускаются до более позднего времени.....` }

//antilink
const smsAntiLink = () => { return `\`\`\`「 ОБНАРУЖЕНА АНТИССЫЛКА 」\`\`\`\n\n` }
const smsAntiLink2 = () => { return `🤨 Запрещено крысам, вас исключат из группы.....` }
const smsAntiLink3 = () => { return `Поздравляю, я не админ 🙄\n\n*[ ЗВОНИТЕ АДМИНУ ]*` }
const smsAntiLink4 = () => { return `Боту нужен админ, чтобы избавиться от этих грязных крыс` } 
const smsAntiLink5 = () => { return `Я тебя спасу, потому что ты админ :v` } 
const smsAntiLink6 = () => { return ` Ты спасешь, дурак, я не админ, я не могу тебя удалить` }

//allAntilink
const AntiLink = () => { return `*ССЫЛКА ОБНАРУЖЕНА* 📢*` }
const AntiLink2 = () => { return ` Вы будете исключены из этой группы` }
const AntiToxic = (m, isToxic) => { return ` Два @${m.sender.split('@')[0]} произнесите это слово*(${isToxic})* Запрещено в этой группе, не ядовитый\n\nПРЕДУПРЕЖДЕНИЕ` }
const AntiToxic2 = () => { return ` Если вы получите 4 предупреждения, вы будете исключены из этой группы. 😐....` }
const viewOnce = () => { return ` Здесь ничего нельзя скрыть.` }

//autosticker
const smsAutoSicker = () => { return `🤡 Эй, где ты видел такую ​​долговечную палку, дура🤣. (Максимум 15 секунд)` }

//autonivel
const smsAutonivel = () => { return `*「 ПОДНЯТЬ УРОВЕНЬ СЧАСТЬЯ 🆙🥳 」*\n\n🥳 Ваше здоровье` }
const smsAutonivel2 = () => { return `👏 Ты повышаешь уровень, продолжай в том же духе 👏\n` }
const smsAutonivel3 = () => { return `*❐ УРОВЕНЬ :*` }
const smsAutonivel4 = () => { return `*❐ ПРЕДЫДУЩИЙ УРОВЕНЬ :* ` }
const smsAutonivel5 = () => { return `*❐ ТЕКУЩИЙ УРОВЕНЬ :*` }
const smsAutonivel6 = () => { return `*❐ ДОСТИГАТЬ :*` }
const smsAutonivel7 = () => { return `*❐ ДАТА :*` }
const smsAutonivel8 = () => { return `_*Чтобы узнать ваш верхний порт, введите команду #lb*_` }
const smsAutonivel9 = () => { return `*🥳 ПОЗДРАВЛЯЕМ С ДОСТИЖЕНИЕМ НОВЫХ УРОВНЕЙ 🎊*\n\n` }

//info
const nivel = () => { return `[ ❇️ ] Нужен уровень` }
const nivel2 = () => { return `Чтобы иметь возможность использовать эту команду, проверьте свой уровень с помощью команды` }   
const admin = () => { return `*⚠️ Вы не администратор 🤡 Эту команду могут использовать только администраторы*` }
const botAdmin = () => { return `*⚠️ Привет, в первую очередь я имею в виду бота (я), мне нужно быть администратором, чтобы использовать эту команду*` }
const propietario = () => { return `*⚠️ Эту команду может использовать только Я или мой начальник.*` }
const prem = () => { return `*Эта команда предназначена только для пользователей VIP и моего владельца*` }
const group = () => { return `*⚠️ Черт, эту команду можно использовать только группами.*` }
const private = () => { return `*⚠️ Эту команду можно использовать только в приватных чатах.*` }
const bot = () => { return `*⚠️ Эту команду может использовать только (ME)*` }
const error = () => { return `⪨╼╼≪⚠️ ОШИБКА ⚠️≫╾╼⪩\n\n ПРОИЗОШЛА НЕОЖИДАННАЯ ОШИБКА (ВЫКЛЮЧЕНИЕ 😢)` }
const AvisoMG = () => { return `⪨╼╼≪⚠️ НАДЕЖНЫЕ ДЕЙСТВИЯ ⚠️≫╾╼⪩\n\n` }
const advertencia = () => { return `[ ⚠️ ПРЕДУПРЕЖДЕНИЕ ]` } 
const registra = () => { return `*[ 🔴 ЭЙ, СТОП, ВЫ НЕ ЗАРЕГИСТРИРОВАНЫ 🔴 ]*\n\nВЫ НЕ ПОЯВЛЯЕТЕСЬ В МОЕЙ БАЗЕ ДАННЫХ ✋\n\nЧтобы иметь возможность использовать бота, вы должны быть зарегистрированы:\n\n#reg name.age` } 
const limit = () => { return `*Бриллианты 💎 б/у*` } 
const AntiNsfw = () => { return `*Команда 18 отключена*\nЕсли вы администратор и хотите включить ее, используйте:\n• modocaliente on` }
const endLimit = () => { return `*😢 НЕТ БОЛЬШЕ АЛМАЗОВ 💎*\n\nКупить больше можно с помощью команды: #buy` } 
const exito = () => { return `*УСПЕХ ✅*` }
const result = () => { return `*Результат :*` }

//Buscadores
const lengua = { 
ejem: `Пример :`, 
ejemplo: `*Что это за поисковая система?\n*Пример:*`, 
opcion: `ВЫБОР :`, 
tipo: `ТИП :`, 
id: ` ID ВИДЕО :`, 
titulo: `заголовок :`, 
Peso: `*МАССА :*`, 
artista: `ХУДОЖНИК`, 
album: `Альбом`,  
vista: `ВИД :`, 
publi: `Опубликовано`, 
dura: `ПРОДОЛЖИТЕЛЬНОСТЬ :`,  
subidos: `ЗАГРУЖЕНО :`,  
calidad: `КАЧЕСТВО :`,  
desc: `ИНФОРМАЦИЯ :`, 
text: `Введите ссылку, чтобы сократить!`, 
trad: `🔸 Перевод`, 
text2: `*И ТЕКСТ?*`, 
ia: `*⚠️ ВВЕДИТЕ ТЕКСТ, ВЫ ХОТИТЕ ПОИСК?*\n\n*• ПРИМЕР:*\n`, 
ia2: `*⚠️ ВВЕДИТЕ ТЕКСТ, ЧТОБЫ СОЗДАТЬ ИЗОБРАЖЕНИЕ С ИСПОЛЬЗОВАНИЕМ ФУНКЦИИ DALL-E*\n\n*• ПРИМЕР:*\n`,
espere: `⏳ *Подождите минуту....*`, 
aguarde: `⏳ *ОБРАБОТКА ИЗОБРАЖЕНИЯ, ПОДОЖДИТЕ МОМЕНТ....*`, 
responde: `*[ ⚠️ ]  Отправляйте изображения и отвечайте на них с помощью команд. :`,
incorrecto: `*[ ⚠️ ] Формат файла не поддерживается. Отправьте фотографии или ответьте на них.*`,   
hd: `*ЭТО HD-ИЗОБРАЖЕНИЕ*\n\nЕсли изображение не появляется, HD отвечает на него другой командой`,  
error: `Не удалось загрузить видео. Повторите попытку.`  
}

//convertidores
const sms = {
text: `*Ответьте на звук, который вы хотите изменить, с помощью команды:*`, 
text2: `*Ответьте на изображение/видео, чтобы преобразовать URL`, 
text3: `*[ ⚠️ ] Ответить на аудио*`, 
text4: `*А наклейки?*\n*Стикер-ответ босса*`, 
text5: `*🕔 ПОДОЖДИТЕ МОМЕНТ....*\nпревращаю изображение в аниме-дизайн, наберитесь терпения, отправляя результаты`,   
text6: `*Убедитесь, что на фотографии видно лицо человека*`, 
text7: `А картинка? Ответить или отметить изображение*`
} 

const info = { 
text: `СТАТУС БОТ`, 
text2: `➢ Серверная ветка :`,  
text3: `➢ Платформа :`,  
text4: `➢ Другими словами :`,  
text5: `➢ использование процессора :`,  
text6: `➢ Объем памяти :`, 
text7: `➢ Пользователь :`,  
text8: `➢ Ресурсы :`,  
text9: `➢ Дорога :`,   
text10: `➢ Активный вторичный бот :`, 
text11: `➢ я суббот :`,  
text12: `Этот бот находится в разработке. Если вы хотите связаться с моим создателем, я оставил вам его номер.\n\nНе спамьте моим авторам и не блокируйте их`,   
text13: `*Здравствуйте, дорогие пользователи 👋🏻, ᴛᴇПриглашаю вас присоединиться к официальной группе семейства The-LoliBot-MD и NovaBot-MD, чтобы сосуществовать с сообществом :ᴠ*\n\n*➤ Официальная группа ботов:*`,   
text14: `*➤ Группа сотрудничества:*`,  
text15: `*➤ Группы тестов для тестирования ботов:*`, 
text16: `*➤ Узнайте о новом обновлении бота здесь:*`,  
text17: `*➤ Группа поддержки ботов:*`,  
text18: `• Группа друзей, к которой принадлежит бот`, 
text19: `Если вы хотите, чтобы ваша группа появилась здесь, обратитесь к моему создателю.`,   
text20: `╭─────────────┈⊷
│ \`\`\` КАК УСТАНОВИТЬ ЭТОГО БОТА?\`\`\`
╰┬────────────┈⊷ 
┌┤\`\`\`📌 ТРЕБОВАНИЯ К УСТАНОВКЕ\`\`\`
┌┤❇️ _Сомневаться: wa.me/5492266466080_
┌┤❇️ _Руководство: https://youtu.be/OhbJjp0L2QA?si=ZqRgG3SGTRFSW6CH_
┌┤❇️ _1 ГБ памяти_
┌┤❇️ _Termux: https://www.mediafire.com/file/3hsvi3xkpq3a64o/termux_118.apk/file_
┌┤❇️ _GitHub: https://github.com/elrebelde21/NovaBot-MD_
┌┤❇️ _Whatsapp неуязвим (вторичный)_
┌┤❇️ _виртуальный номер (другой номер)_
┌┤❇️ _2 устройства или один компьютер для сканирования_
╰────────────┈⊷

 \`\`\`📌 КОМАНДА УСТАНОВКИ TERMUX\`\`\`

> termux-setup-storage

> apt update && apt upgrade && pkg update && pkg upgrade && pkg install bash && pkg install libwebp && pkg install git -y && pkg install nodejs -y && pkg install ffmpeg -y && pkg install wget && pkg install imagemagick -y && pkg install yarn

> git clone https://github.com/elrebelde21/NovaBot-MD && cd NovaBot-MD && yarn && npm install

> npm start

(Сканируйте QR, быстро)

🚀 --------[ Vortexuscloud host ]--------- 🚀 
💞 Спасибо за: mauro 

• https://youtube.com/@vortexuscloud

• Официальная страница:
https://vortexuscloud.com

• панель приборов:
https://dash.vortexuscloud.com

• панель:
https://panel.vortexuscloud.com

• Канал WhatsApp с информацией о хостах
• https://whatsapp.com/channel/0029Va8ZD6O3mFXxTPl1m13A

🚀 --------[ Хозяин Кафирексоса ]--------- 🚀

*Официальная страница:*
https://www.cafirexos.com/

*Панель:*
https://panel.cafirexos.com/

*панель приборов:*
https://dash.cafirexos.com/home

*Сомнения ТОЛЬКО В ХОЗЯИНЕ:*
https://chat.whatsapp.com/FBtyc8Q5w2iJXVl5zGJdFJ 
(Спросите Диего: cafirexos)

*Канал WhatsApp:*
https://whatsapp.com/channel/0029VaFVSkRCMY0KFmCMDX2q

🚩 --------[ Infinity-Host ]--------- 🚩
*🆕 Новый хостинг с собственным хостингом*

*🔰 Инструкция по созданию учетной записи на панели управления и созданию сервера:*
https://youtu.be/o6ZSpMOsvHs?si=fzwZIDN5LPE1w0pI

*📍Панель управления:*
https://dashboard.infinitywa.xyz

* ✅ Панель: *
https://live.panel-infinitywa.store

*🧰 Бот поддержки: эксклюзивно для организаторов*
wa.me/message/FETBF7YBO37CG1

*⚙️Группа поддержки:*
> Вопросы *ТОЛЬКО О ХОЗЯИНЕ*
https://chat.whatsapp.com/GQ82mPnSYnm0XL2hLPk7FV`, 
text21: `*Введите команду с ошибкой*\n\n*Пример:`,  
text22: `Отчет отправлен моему создателю, при необходимости мы свяжемся с вами, если он неправильный, он будет проигнорирован и заблокирован от ботов.*`,  
text23: `*╼╼╼╼╼╼╼[ 💖 пожертвование 💖 ]╾╾╾╾╾╾╾╾*\n\n*Здравствуйте 👋, если вы хотите поддержать этот проект, вы можете сделать это посредством добровольных пожертвований через PayPal, Mercado Pago или Naranja X.*\n\n╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍\n\n*❇️ PayPal:*\nhttps://paypal.me/OfcGB\n\n╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍\n\n*❇️ Платежный рынок:*\n*• Alias :* OficialGB\n*• CVU :* 0000003100059201491917\n\n╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍\n\n*❇️ Оранжевый Х:*\n*• Alias :* OficialGL\n*• CVU :* 4530000800017922067114`, 
text24: `*💖 Вы также можете поделиться следующим в качестве поддержки 💕*\n\n*💖 Пожалуйста, поддержите репозиторий несколькими звездами, спасибо 🙏💕*`,  
text25: `┗❴ ⚠ ПРЕДУПРЕЖДЕНИЕ ⚠ ❵┛\n\nНе отмечайте авторов/разработчиков, если у вас есть предложения по поводу ботов, пишите им в личные сообщения.`, 
text26: `*⚡ Вы ищете качественные горячие товары, которые уместятся в вашем кармане?*

⚡ Вашему боту нужна поддержка? У Cafirexos есть идеальное решение! Наш высокопроизводительный хостинг обеспечит круглосуточную работу вашего бота по невероятно низкой цене. Забудьте о проблемах с памятью и держите своего бота активным 24/7 по приемлемой цене. Присоединяйтесь к нашему сообществу и дайте своему боту ту поддержку, которую он заслуживает.

*🔵 \`\`\`Информация о хосте\`\`\`*

💻 *Пейдж*
• https://www.cafirexos.com

✨ *Панель управления*
• https://dash.cafirexos.com

⚙️ *Панель*
• https://panel.cafirexos.com

📢 *Канал WhatsApp*
• https://whatsapp.com/channel/0029VaFVSkRCMY0KFmCMDX2q

💥 *Группа WhatsApp*
• https://chat.whatsapp.com/FBtyc8Q5w2iJXVl5zGJdFJ 

📧 *Коррео*
• contacto@cafirexos.com

🧑‍💻 *Контакт (Диего Флорес)*
_(Сомнения ТОЛЬКО В ХОЗЯИНЕ)_
• https://wa.me/50497150165`, 
text27: (nna, host, paypal, fb) => `*\`💫 Мы представляем вам новый хостинг: "Infinity-Wa" свои хозяева 😎\`*

*Твой нокиа очень медленный и тебе нужно иметь своего бота активным 24/7?*

> *У нас есть лучший вариант, чтобы держать своего бота активным 24/7, по очень доступным ценам. Это очень дешево и каждый может купить.*

*🚩 Цены :*
* 1 ГБ, 100 ЦП = 1 доллар
* 2 ГБ, 120 ЦП = 2 доллара
* 3 ГБ, 140 процессоров = 3 доллара
* 4 ГБ, 175 процессоров = 4 доллара
* 5 ГБ, 200 процессоров = 5 долларов.

🟢 \`\`\` Информация о хосте\`\`\`

💻 *Страница:*
https://infinity-wa.com

*💙 Панель управления:*
https://dash.infinity-wa.com

⚙️ *Панель*
https://panel.infinity-wa.com

🧡 *Канал WhatsApp:*
${nna}

*🟣 Дискорд:*
https://discord.com/invite/vgfpe4Nwd8

💚 *Группа:*
${host}

🛍️ *Способ оплаты:*
*• PayPal :* ${paypal}
*• Меркадо паго, псевдоним:* OficialGB
*• Апельсин x, также известный как:* infinity-host
*• Япе (Перу) :* +51948705559
*• Ого, КВУ:* 0000007900204304075982
*• Я плачу картой:* wa.me/390684003755

*• Ссылка на оплату:*
• _link.mercadopago.com.ar/h0sting_
• _https://payment-link.astropay.com/RbMJ_
*• Патреон:*_patreon.com/Infinity_wa_hosting_
*• Кофи:* _https://ko-fi.com/infinitywa_

*\`🗣📲 Свяжитесь с нами для получения дополнительной информации или заказа услуг:\`*
• ${fb}
• wa.me/573147616444` }
 
const menu = { 
text: `❐ Префикс`, 
text2: `❐ Дата :`,  
text3: `❐ Время :`, 
text4: `❐ версия :`, 
text5: `❐ пользователи :`, 
text6: `❐ активность :`, 
text7: `❐ режим :`, 
text8: `❐ Закон :`, 
text9: `❐ уровень : `, 
text10: `❐ диапазон:`, 
text11: `❐ отмеченный :`, 
textt: `❐ Ofc Bot: это бот ofc`, 
texttt: `❐ я суббот:`,  
text12: `\`\`\`СПИСОК КОМАНД\`\`\`
\`\`\` Простой бот с несколькими командами\`\`\``,  
text13: `*Конкретные слова для взаимодействия бота с вами*`,   
text14: `_*Будьте внимательны, напишите то, что в сообщении*_`,
text15: (vs) => `🤔 *Что нового?* 🤗\n\n*🌐 Новая версия:* [ ${vs} ]\n\n* Новая команда:*

👾 Новая РПГ:
• #crime 

⚡ Улучшена стабильность бота

🟢 Мультиязычность: теперь вы можете выбрать язык, на котором бот будет отвечать:
• #idioma
• #lenguaje

🔸Бот будет реагировать только на эти префиксы: (#./*) 

Больше команд, в будущих версиях я хочу добавить специальную команду, напишите моему создателю`,
text16: `*🌐 ПРАВИЛА БОТА 🌐*

*• Не спамьте команды*

Используйте команду каждые 5 секунд, иначе бот перенасытится, или номер бота может уйти в поддержку из-за спама.

*• Не отправляйте ссылки на группы ботам, чтобы они могли присоединиться*

Поговорите с моим создателем, и он присоединится к вашей группе.

*• Не звоните ботам или их создателям*

Если вы это сделаете, вы будете заблокированы от ботов и забанены.` }

//jadibot.js
const jadibot = {
text: `Отсканируйте этот QR-код, чтобы стать временным ботом

1) Нажмите на три точки в правом верхнем углу.
2) Нажмите WhatsApp Web.
3) Отсканируйте этот QR
*QR истекает через 45 секунд*\n\n`, 
text2: `НОВЫЙ СПОСОБ СТАТЬ СУББОТОМ

1) Нажмите на три точки в правом верхнем углу.
2) Нажмите WhatsApp Web.
3) Нажмите на ссылку с кодом телефона.
4) Вставьте код ниже\n\n`, 
text3: `*⚠️ Эта команда отключена автором*`, 
text4: `*✅ Вы на связи, наберитесь терпения, сообщения загружаются...*`, 
text5: `*Подключено успешно*`, 
text6: `× Бот :`, 
text7: `× Владелец :`, 
text8: `*ПРИМЕЧАНИЕ. *бота можно перезапустить, если он перестанет получать команды. Для повторного подключения используйте #serbot или идентификатор, который будет отправлен ниже.`, 
text9: `*⚠️ Отключенные устройства, которые необходимо повторно подключить: #jadibot*`, 
text10: `*⚠️ Повторно отправить команду....*`, 
text11: `[ ⚠️ ] Требуется перезагрузка, Перезагрузить...`, 
text12: `*⚠️ Устройство отключено*\n\n*Необходимо войти снова (используйте .deljadibot)*`, 
text13: `*⚠️ Соединение закрыто*\n*Попробуйте переподключиться с помощью:`, 
text14: `[ ⚠️ ] Потеряно соединение с сервером, вынужден переподключиться`, 
text15: `*[ ⚠️ ] Ваше соединение недействительно*\n*Вы не сможете повторно подключиться*`, 
text16: `[ ⚠️ ] Время соединения истекло.`, 
tex17: `[ ⚠️ ] Неизвестная ошибка:\n`, 
text18: `*ПОДКЛЮЧЕННЫЕ СУББОТЫ:*` }

//descargar.js
const descargar = { 
text: `*Что искать? введите название темы*\n\nПример:`, 
text1: `*Что вы ищете?\n\nВведите название темы или ссылку на YouTube, чтобы скачать аудио/видео.\n\nПример:`, 
text2: `         *⌜ Найденные песни ✅⌟*`,
text3: `         *⌜ Видео найдено ✅⌟*`, 
text4: `*Это твое видео👌*`, 
text5: `          *⌜ Аудио найдено ✅⌟*`, 
text6: `*ДОЖДИТЕСЬ ОТПРАВКИ ВАШИХ MP3-ФАЙЛОВ ⚠*

*Услуга предоставляется NovaBot*`, 
text7: `*ДОЖДИТЕСЬ ОТПРАВКИ ВАШИХ ФАЙЛОВ MP4 ⚠*

*Услуги, предоставляемые NovaBot*`, 
text8: `*Что вы ищете?*\n*Введите название песни Spotify.*`,  
text9: `* Где ссылка на github?*\n\n*Пример :*`, 
text10: `*ПОДОЖДИТЕ МОМЕНТ...*\n\nЕсли файл не доставлен, это потому, что репозиторий очень большой.`,   
text11: `*Что искать? введите название/название песни для поиска текста*\n*Пример:*`, 
text12: `*Нет*`, 
text13: `*Размер*`, 
text14: `*Расширение*`, 
text15: `Я не могу загружать файлы размером более 900 МБ.\n`, 
text16: `*🎥 ЗДЕСЬ ВАШЕ ВИДЕО НА ФЕЙСБУКЕ*`, 
text17: `*Введите имя пользователя*\n\n*Пример:*`, 
text19: `*Фамилия :*`, 
text20: `*последователи :*`, 
text21: `*Следовать :*`, 
text22: `*биография :*`, 
text23: `*Публикация :*`, 
text24: `*[ ⚠️ ] Какой APK вы ищете?*`, 
text25: `*Загрузчик Aptoide*`, 
text26: `*Последнее обновление`, 
text27: `*Размер`, 
text28: `[ ⛔ ] Файл слишком велик, поэтому он не будет отправлен.`, 
title: `*аголовок:*`, 
duracion: `*Продолжительность:*`,
ago: `*Опубликовано:*`, 
autor: `*Автор:*`,
views: `*Появление:*`, 
letra: `*Письмо:*`, 
music: `*• Скачал аудио 🔊, Подожди минутку....*`,  
vid: `*• Скачал видео 🎥, Подожди минутку....*`, 
espere: `*🕔 ПОДОЖДИТЕ МИНУТУ....*`,  
audio: `*⏳ ОБРАБОТКА....*\n\n_ваш аудиозагружен, подождите немного._`,  
video: `*⏳ ОБРАБОТКА....*\n\n_ваше видео скачано, подождите немного_`,
descargado: `_Скачайте файл, подождите немного...._` }

//enable.js
const enable = {
text: `⪨╼╼≪⚠️ НАДЕЖНЫЕ ДЕЙСТВИЯ⚠️≫╾╼⪩\n\n* Используйте этот метод в качестве примера:*`, 
text1: `*Он был успешно активирован*`, 
text2: `*Не активен!*`, 
text3: `*Внимание всем активным участникам этой группы 📣*\n\n*Антилинк активен*\n\n*И только администратор этой группы может пересылать ссылки*\n\nЕсли ссылку присылает участник, не являющийся администратором из другой группы, они будут немедленно забанены в этой группе`, 
text4: `Бот будет отвечать только администраторам группы..`, 
text5: `Бот теперь работает для всех участников группы.🥳` }

//grupo.js
const grupos = {
text: `*а текст?*`, 
text1: `*УСПЕШНАЯ ОТКРЫТАЯ ГРУППА✅*`, 
text2: `*УСПЕШНЫЕ ГРУППЫ ЗАКРЫТЫ✅*`, 
text3: `*ВВЕДИТЕ ССЫЛКУ НА ГРУППУ*\n\n*📌 ПРИМЕР:*`, 
text4: `*Я ПРИСОЕДИНИЛСЯ😼*`, 
text5: `📧 *ЗАЯВКА НА ГРУППЫ*\n\n*👤 Ваш запрос*`,    
text6: `*🔮 Связь*`, 
text7: `*✅ Ваша ссылка была отправлена ​​моему владельцу*\n┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n⚠️ *Ваша группа будет оценена, и мой владелец должен решить, будет ли Бот присоединяется к группе или нет. нет.*\n┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n❕*Ваша заявка может быть отклонена по следующим причинам:*\n*1️⃣ Бот переполнен.*\n┈┈ ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n2️⃣ *Бот удален из группы.*\n┈┈┈┈┈┈┈┈┈┈ ┈┈┈┈┈┈┈ ┈┈\n3️⃣ *Группа не соответствует правилам бота*\n┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n4️⃣ *Ссылка на группу восстановлена. *\n┈┈┈┈┈┈┈┈┈┈┈ ┈┈┈┈┈┈┈┈\n5️⃣ *Не добавлен в группу моим владельцем*\n┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ ┈┈┈┈\n📧 *Ответ на запрос может занять несколько часов. Пожалуйста, наберитесь терпения, спасибо*\n┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n*Вы можете поддержать Бота звездочками в нашем официальном репозитории и подписаться на наш YouTube-канал, отправить отправьте скриншоты моему создателю, чтобы он мог добавить бота в вашу группу 💫*`, 
text8: (md, yt, nn7, fb) => `*[ У бота есть ваша группа ]*

Вы можете запросить его, сделав добровольное пожертвование через PayPal или Mercado Pago arg.

🚀 Бот будет активен для вашей группы 24/7.

*⚡ Где я могу сделать пожертвование?*
Через наш Paypal, Mercado Pago или Naranja.

*❇️PayPal:*
https://paypal.me/OfcGB

*❇️Платежный рынок:*
*• Псевдоним :* OficialGB
*• CVU :* 0000003100059201491917

*❇️ Оранжевый Х:*
*• Псевдоним :* OficialGL
*• CVU :* 4530000800017922067114

*⚡ Я не могу сделать пожертвование, есть ли другой вариант получить бота для моей группы?*
Вы можете поддержать наш официальный репозиторий звездочкой 🌟
• ${md}
• https://github.com/elrebelde21/LoliBot-MD

🔔 Подпишитесь на наш официальный канал на YouTube.
• ${yt}

*⏩ Следующий шаг ⏩*

После оплаты вы можете сообщить моему создателю и отправить подтверждение отправки денег (скриншот), чтобы я мог добавить бота в вашу группу 👇.
• ${nn7}
• ${fb}

*⚡ Будет ли бот активен 24/7?*
Да, наш бот размещен на платном сервере, чтобы поддерживать его работу круглосуточно и без выходных (именно поэтому мы также просим пожертвования на его поддержание)..`, 
text9: `*⚠️ и картинки?*`, 
text10: `*⚠️ Отвечайте на изображения с помощью  :*`, 
text11: `*✅ Название группы изменено правильно*`, 
text12: `*✅ Описание группы успешно изменено*`, 
text13: `*[ ⚠️ ] ВВЕДИТЕ КОЛИЧЕСТВО ЛЮДЕЙ, КОТОРЫЕ ВЫ ХОТИТЕ ДОБАВИТЬ*\n*ПРИМЕР:*`, 
text14: `*⚠️ ВВЕДИТЕ НОМЕР БЕЗ НЕГО (+)*`, 
text15: `≡ *ПРИГЛАШЕНИЕ*\n\nЗдравствуйте пользователи, приглашаю вас присоединиться к этой группе.`, 
text16: `*[ ⚠️ ] КОГО МНЕ ПОТЕРЯТЬ? ОТМЕТКИ НЕКОТОРЫХ МОИХ ПОЛЬЗОВАТЕЛЕЙ НЕ ПРОГНОЗЫ 😯*`, 
text17: `*[ ⚠️ ] КТО Я КАК АДМИН? ОТМЕТЬТЕ ЧЕЛОВЕКА ИЛИ ОТВЕТЬТЕ НА ЕГО СООБЩЕНИЕ*`, 
text18: `*[ ⚠️ ] У КОГО УДАЛЯТЬ АДМИНА? ОТМЕТЬТЕ ЧЕЛОВЕКА ИЛИ ОТВЕТЬТЕ НА ЕГО СООБЩЕНИЕ*`, 
text19: `*ЛОДКА МЕРТВА*`, 
text20: `*МОЙ ОНЛАЙН-БОТ СЕЙЧАС ДОСТУПЕН ✅*`, 
text21: `❑ Сообщение :`, 
text22: `*[ ⚠ ️] Используйте эту команду только в случае крайней необходимости*`, 
text23: ` Информационная группа`,  
text24: `*🔸️ Нет* :`,  
text25: `*🔸️ Член* :`,  
text26: ` Участник`,  
text27: `*🔸️ Создатель группы:*`, 
text28: `*🔸️ Настройки группы:*`,  
text29: `*🔸️ Информация* :`,    
text30: `[ ⚠️ ] Отметьте/упомяните кого-нибудь\n\n📌 Пример :`, 
text31: `✳️ Пользователь не найден в моей базе данных`,  
text32: `⚠️ *ПОЛЬЗОВАТЕЛИ БУДЬТЕ ПРЕДУПРЕЖДЕНЫ* ⚠️`,  
text33: `*Пользователь:*`,  
text34: `*Предупреждение:*`, 
text35: `*Причина:*`,  
text36: `⚠️ *ВНИМАНИЕ* ⚠️

Вы получаете предупреждение от администратора`, 
text37: `Если вы получите предупреждение *4*, вы будете автоматически удалены из группы.`, 
text38: `⛔ Пользователь превысил *4* предупреждения и поэтому будет удален.`, 
text39: `⚠️ *ПРЕДУПРЕЖДЕНИЕ УДАЛЕНО* ⚠️`, 
text40: `Полное предупреждение:`, 
text41: `🔸️ Админ уменьшил предупреждение, теперь вы это сделали`, 
text42: `🔸️ Пользователи не получают оповещения` }

//juegos.js
const juegos = {
text: `*и вопрос?*\n\n*Пример:*`, 
text1: `*• Просить:*`, 
text2: `*• Отвечаю:*`,  
text3: ` тебе придется выйти замуж`, 
text4: ` Они совместимая пара 💕`, 
text5: `*Введите @ или имя человека*`, 
text6: `🤤👅🥵 *ВЫ ПРОСТО ЛЮБИТЕ ЕГО!*🥵👅🤤

Ты только что трахнул эту суку`, 
text7: `На четвереньках, пока она стонет на тебя, как сука: «ааа, ааа, продолжай, не останавливайся, не останавливайся», и он оставляет ее такой разбитой, что сука даже не может удержаться.!`, 
text8: `🤤🥵 *¡ОНИ УЖЕ ЛЮБЯТ ТЕБЯ!* 🥵🤤`, 
text9: ` Вы когда-нибудь задумывались о создании трио? из вас троих получится отличный секс втроем 😳😏`, 
text10: `*_😍 5 лучших пар в группе 😍_*`, 
text11: `- Этой паре суждено быть вместе 💙`, 
text12: `- Эта парочка — двое влюбленных маленьких неразлучников.✨`, 
text13: `- Уфф, а что сказать об этой паре, у них уже должна быть семья 🤱🧑‍🍼`, 
text14: `- Они тайно поженились 💍`, 
text15: `- Пара находится в медовом месяце✨🥵😍❤️`, 
text16: `*[ ⚠️ ] Запишите имена двух людей, чтобы вычислить их любовь*`, 
text17: `*Эй, напиши имя второго человека*`,
text18: `*Введите имя?*`, 
text19: `*[ ⚠️ ] ВВЕДИТЕ @tag НЕКОТОРЫЕ ПОЛЬЗОВАТЕЛИ*`, 
text20: `*[ ⚠️ ] Введите сумму, которую хотите поставить*\n\n*📌 Пример:*`, 
text21: `⏳ надеяться`, 
text22: `Чтобы сделать ставку еще раз`,  
text23: `*✳️ Минимальная ставка 100 опыта.*`, 
text24: `*✳️ У вас недостаточно опыта*`,  
text25: `🎁 Бить вас`,  
text26: `*🔮 Ты почти сделал это!! Продолжайте*\n*Возьмите 20 ᥊⍴*`,   
text27: `😔 Терпеть`,      
text28: `🥌 камень 📄 ножницы ✂️ бумага\n\n• Вы можете использовать эту команду:\n🥌 #ppt piedra\n📄 #ppt papel\n✂️ #ppt tijera\n\n• Используйте строчные буквы\n*Пример:* #ppt papel` }
  
//nsfw.js
const nsfw = {
text: `😐 Ты еще несовершеннолетний! давай поиграем в фри фаер😆`, 
text1: `*Это мой пакет 🥵*`, 
text2: `*🥵 НАСЛАЖДАЙТЕСЬ ВИДЕО🥵` }  

//propietario.js
const owner = {
text: `*Введите текст, который хотите опубликовать*`, 
text1: `*Отправка официального сообщения на минутку*`, 
text2: `「 ✅ *ОФИЦИАЛЬНОЕ ОБЪЯВЛЕНИЕ* ✅ 」`,  
text3: `Передача завершена успешно ✅ Общий:`,  
text4: `Групповой чат\nОбщее время доставки:`,  
text5: `* Пользователь заблокирован от ботов*`, 
text6: `* Пользователь освобожден*`, 
text7: `*[ ⚠️ ] Отвечайте на стикеры или изображения, к которым вы хотите добавить команды или текст.*`, 
text8: `*⚠️ Изложите сообщение*`,   
text9: `*[ ⚠️ ] Ошибка использования, отсутствует текст*\n\n*Пример правильного использования команды:*`,  
text10: `*[ ⚠️ ] У вас нет разрешения на изменение этой команды стикера.*`,   
text11: `*[ ✔ ] Текст/команда, назначенная наклейке/изображению, корректно добавлена ​​в базу данных.*`, 
text12: `*Этот идентификатор стикера не существует.*`,  
text13: `*[ ⚠️ ] У вас нет разрешения на изменение этой команды стикера*`,  
text14: `* СПИСОК КОМАНД*\n▢ *Информация:* Если *жирный* заблокирован`,    
text15: `*[ ⚠️ ] Отмечайте пользователей с помощью @𝚝𝚊𝚐*`, 
text16: `*[ ⚠️ ] Введите количество бриллиантов, которое вы хотите добавить*`,   
text17: `*[ ⚠️ ] Символы не поддерживаются, только цифры.!*`, 
text18: `*[ ⚠️ ] Минимальное количество добавляемых бриллиантов — 𝟷.*`,   
text19: `*Itu был добавлен*`, 
text20: `*[ ⚠️ ] Введите количество опыта (XP), которое вы хотите добавить.*`,   
text21: `*[ ⚠️ ] Минимальное количество опыта (XP), которое можно добавить, составляет 𝟷.*`, 
text22: `*Заблокированные пользователи больше не могут использовать мои команды*`,   
text23: `*Пользователь успешно разбанен ✅ теперь он может использовать бота*`,  
text24: `✅ Успешные изменения для публичного использования`,  
text25: `✅ Успешные изменения для частного использования`,  
text26: `*До свидания, очень рад, до скорой встречи 👋*`, 
text27: `*Отправка резервной копии на мгновение*`, 
text28: `_🔄 Перезапуск бота..._` } 
 
//randow.js
const ramdow = {
text: `*ты возбужден 🥵🔥*`,  
text2: `_Ваша религия должна быть простой!!_`,  
text3: `*Вызовите полицию!!* 😱`,  
text4: `*Вы оставили комментарий на YouTube!!* 😳` }

//rpg.js
const rpg = { 
text: `[ 💤 НЕ НАЗВЫВАЙТЕ ИХ 💤 ]\n\nЭтот пользователь упомянул этот AFK`,  
text1: `*Он не активен для : `,  
text2: `*🕔 Освободить этот AFK 🕔*`,  
text3: `ТАБЛИЦА ЛИДЕРОВ`,  
text4: `Этот пользователь`,    
text5: `Он неактивен 😴\n💤 Не отмечайте их 💤\n☣️ Причины :`,  
text6: `*🚓 Он возвращается*`,  
text7: `*Нет :*`,    
text8: `*ИСПОЛЬЗОВАНИЕ:*\n║Вы можете купить 💎 бриллианты\n║Используя следующую команду:`, 
text9: `[ ⏳ ] Ждать`,  
text10: `для меня снова`, 
text11: `⚒️ Я дружелюбный`,  
text12: `*Ты сегодня много работал*`, 
text13: `* вернуться на работу*`, 
text14: `🎁 * Вы забрали свой ежедневный подарок*\n\n🕚 снова в :`,   
text15: `*🎁 Получил рождественский подарок 🎁🎅*
 
• *Вы получили:*`,   
text16: `*🎁 ВЫ ПОДНЯЛИ ГРУДЬ*\n🕚 ВЕРНИТЕСЬ:`, 
text17: `🛒 ПОЛУЧИТЬ СУНДУК`,   
unreg: `*✳️ Введите серийный номер, проверьте свой серийный номер командой:* #myns`, 
myns: `*⚠️ Неправильный серийный номер, используйте:* #myns`, 
delreg: `*✅ Запись удалена*`,   
myns2: `👇 Это ваш серийный номер:`,  
rob: `*⚠️ ОТМЕТИТЬ ЛЮДЕЙ БОБО*`, 
rob2: `*😔 Пользователи*`,   
rob3: `*Бриллиант меньше 15, не воруйте у бедных*`,  
rob4: `Имейте меньше 10 опыта, не воруйте у бедных людей* v:`, 
rob5: `*Вы разграбили⚔️ ᴀ*`,  
rob6: ` Украдено:`,  
rob7: `*🚓🚓🚓 Ограбить его нельзя, потому что этого пользователя защищает полиция 👮 (AFK)*`, 
buy: `*платежные записи*`, 
buy2: `*Вы приобрели :*`,  
buy3: `*ты потратил :*`,   
buy4: `🔶 У вас недостаточно опыта для покупки`,  
buy5: ` Бриллианты 💎 Вы можете получить *XP* с помощью команды: #minar`, 
pp: `              *⪨ ПРОФИЛЬ ⪩*`,  
pp2: `*💫 НЕТ :*`,  
pp3: `*📱 ЧИСЛО :*`, 
pp4: `*💎 АЛМАЗ :*`,   
pp5: `*🆙 УРОВЕНЬ :*`,  
pp6: `*🏆 ДОСТИГАТЬ :*`, 
pp7: `*📇 ЗАРЕГИСТРИРОВАНО :*`, 
level: `*💫 ВАША СТАТИСТИКА 🆙*`, 
level2: `『 Ваша статистика в реальном времени 🕐 』`, 
level3: `💫 *НЕТ:*`, 
level4: `🎊 ты потерялся`,  
level5: `*XP* для повышения уровня`,    
level6: `Ура!\n├ Переходите на новый уровень 』`, 
level7: `*💫 Чем больше вы взаимодействуете с ботами, тем выше ваш уровень*` } 
 
//sticker.js
const sticker = {
text: `⏳ *Подожди, я делаю твою наклейку....*`, 
text1: `_[ ❌ ] Максимум 20 секунд!_`, 
text2: `*И ФОТО?*`, 
text3: `*Ответная наклейка, чтобы украсть`, 
text4: `введите что-нибудь, чтобы превратить это в наклейку :v`, 
text5: `_*Не волнуйся, я превратим твой текст в наклейку 👏*_\n\n_*Это может занять несколько минут.....*_` }

const idioma = (prefix) => { return `*✳️ Использовать:*\n${prefix}idioma 1 (испанец)\n${prefix}idioma 2 (Английский)\n${prefix}idioma 3 (арабский)\n${prefix}idioma 4 (Индонезия)\n${prefix}idioma 5 ( португальский)\n${prefix}idioma 6 ( Россия)\n\n*❗ Пример:*\n• ${prefix}idioma 1` } 
const idioma2 = () => { return `✅ Язык успешно изменен на ` }

const smsReg = () => { return `*Вы уже зарегистрированы 🧐*` }
const smsReg1 = (prefix) => { return `*❌ Неправильная форма*\n\nиспользуйте этот формат\nПример: ${prefix}reg name.Age.` }
const smsReg2 = () => { return `Имя не может быть пустым` }
const smsReg3 = () => { return `Возраст не может быть пустым (число)` }
const smsReg4 = () => { return 'Это старое (。-`ω´-)' }
const smsReg5 = () => { return `🚼 Исходя из этого, малыш умеет писать.✍️😳` }
const smsReg6 = () => { return `🐈 Очень просто, имя настолько длинное, что я хочу, чтобы в качестве имени был мост.😹` }
const smsReg7 = (name, user, age, time, date, sender, sn, prefix, rtotalreg) => { return `[ ✅ РЕГИСТРАЦИЯ ЗАВЕРШЕНА ]\n\n ◉ *Нет:* ${name} ${user.registered === true ? 'ͧͧͧͦꙶͣͤ✓' : ''}\n ◉ *Возраст:* ${age} много лет\n ◉ *Варенье:* ${time}\n ◉ *Дата:* ${date}\n ◉ *Число:* wa.me/${sender.split("@")[0]}\n ◉ *Серийный номер*\n ⤷ ${sn}\n\n 🎁 *Подарок:*\n ⤷ 2 алмаз 💎\n ⤷ 200 опыт\n\n *◉ Для просмотра команды бота используйте:*
 ${prefix}menu\n\n ◉ *Всего зарегистрированных пользователей:* ${rtotalreg}` }
const smsReg8 = () => { return `*💬 Выберите язык с помощью:* #idioma` }
 
const cuenta = (nna, md, yt, tiktok, fb) => { return `*Добро пожаловать на официальные аккаунты ✨*

*👑 Официальный номер бота:*
• wa.me/51910628581

*✨ Канал WhatsApp / Обновление:*
• ${nna}

*✨ ГИТХАБ:*
• ${md}

*✨ YOUTUBE:*
• ${yt}

*✨ ТИК ТАК:*
• ${tiktok}

*✨ ФЕЙСБУК:*
• ${fb}

*Если у вас есть сомнения, предложения или вопросы, вы можете написать мне на Facebook.*` }

const game = { 
text1: `*\`🎮 ТРОЕ В ХВОСТЕ 🎮\`*`, 
text2: `*ВЫ ВЫИГРАЛИ 🎉*\n*🎁 ПОЛУЧИТЕ*`, 
text3: `*ГАЛСТУК😹*`, 
text4: ` Выключение:`, 
text5: `*Правильный ответ 🎉*\n\n*Побеждающий вас:*`, 
text6: `⚠️ В этом чате еще остались неразрешенные вопросы`, 
text7: `🧮 Доступные трудности :`, 
text8: ` МАТЕМАТИКА`, 
text9: ` Сколько это стоит? :`, 
text10: ` Время`, 
text11: `*Ответьте на это сообщение ответом*`, 
text12: `⏳ *Время вышло! Ответ:*`, 
text13: `⚠️ Вы все еще в игре`, 
text14: `*\`🕹 ТРИ В ХВОСТЕ🎮\`*\n\n🎮👾 В ожидании`, 
text15: ` Как первый игрок`, 
text16: `*ГОСТИНАЯ :*`, 
text17: `*ПРАВИЛА :*\n\n*Сделайте 3 строки вертикально, горизонтально или диагонально, чтобы выиграть*\nПишет *rendirse* сдаться и признать поражение`, 
text18: `*⏳ Ожидание следующего игрока*`, 
text19: `*Напишите следующую команду:`, 
text20: ` Награда:`, 
text21: `✅ Сессия перезапущена *ᴛɪᴄᴛᴀᴄᴛᴏᴇ 🎮*`, 
text22: `⚠️ Ты не в игре ᴛɪᴄᴛᴀᴄᴛᴏᴇ 🎮` }

const transfer = {
text1: `⚠️ Отменено, перевод не будет выполнен.`, 
text2: `✅ Они были переданы правильно`, 
text3: ` Ошибка передачи`, 
text4: `⚠️ вы делаете перевод*`, 
text5: (prefix, command) => `*⚠️ правильное использование команды :*\n*${prefix + command}* [tipo] [cantidad] [@user]\n\n> * Пример :*\n• ${prefix + command} exp 100 @0\n\n📍 Передаваемые предметы\n╔═════ೋೋ═════╗\n● *limit* = Диаманте\n● *exp* = Опыт\n● *money* = монеты\n╚════ ≪ •❈• ≫ ════╝`, 
text6: `⚠️ *Отметьте пользователя, который хочет сделать перевод.**`, 
text7: `❌ *Пользователь не находится в моей базе данных*`, 
text8: (type) => `*⚠️ У вас недостаточно ${type} перевести*`, 
text9: ` ВЫ УВЕРЕНЫ, ЧТО ХОТИТЕ ПЕРЕВЕСТИ`, 
text10: `> *У вас есть 60 секунд, чтобы подтвердить*\n\n*• Писарь:*\n* si = *чтобы понять это правильно*\n* no = *отменить*`, 
text11: `⚠️ *Время вышло, ответ не получен. Перевод отменен.*` }

module.exports = { lenguaje, exito, tmp, session, errorsession, archivo, AvisoMG, archborrado, archivoborrado, purgesessions, purgesubbots, purgeoldfiles, smscall, smscall2, smsAvisos, smsAvisos2, smsAvisos3, smsAvisos4, smsAvisos5, smsAvisos6, smsAvisos7, smsAvisos8, smsAvisos9, smsWel, smsWel2, smsWel3, smsWel4, smsWel5, smsWel6, smsWel7, smsWel8, smsWel9, smsWel10, smsWel11, smsBye, smsBye2, smsBye3, smsBye4, smsBye5, smsConexion, smsEscaneaQR, smsConectado,  smsConexionOFF, smsConexioncerrar, smsConexionperdida, smsConexionreem, smsConexionreinicio, smsConexiontiem, smsConexiondescon, nivel, nivel2, admin, botAdmin, propietario, group, private, bot, error, advertencia, registra, limit, AntiNsfw, endLimit, result, lengua, sms, Bio, smsAntiFake, smsAntiArabe, smsAntiLink, smsAntiLink2, smsAntiLink3, smsAntiLink4, smsAntiLink5, smsAntiLink6, smsAutoSicker, smsAutonivel, smsAutonivel2, smsAutonivel3, smsAutonivel4, smsAutonivel5, smsAutonivel6, smsAutonivel7, smsAutonivel8, smsAutonivel9, smsAntiPv, info, menu, jadibot, descargar, demote, promote, enable, grupos, juegos, nsfw, owner, ramdow, rpg, sticker, idioma, idioma2, smsReg, smsReg1, smsReg2, smsReg3, smsReg4, smsReg5, smsReg6, smsReg7, smsReg8, cuenta, consola, console, AntiLink, AntiLink2, viewOnce, AntiToxic, AntiToxic2, game, transfer, prem}
