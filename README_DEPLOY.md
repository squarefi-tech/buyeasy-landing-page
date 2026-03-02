# 🚀 Инструкция по деплою

## Быстрый деплой (1 команда!)

Откройте терминал в Cursor (`Cmd + ~`) и выполните:

```bash
./deploy.sh
```

Когда появится запрос, введите:
- **Username**: `pbrik-tech`
- **Password**: Ваш Personal Access Token

---

## Или вручную (3 команды):

```bash
# 1. Настроить remote
git remote add origin https://github.com/pbrik-tech/buyeasy-landing.git

# 2. Запушить код
git push -u origin main

# 3. Готово! Vercel автоматически задеплоит
```

---

## 📍 Ссылки:

- **Ваш сайт**: https://buyeasy-landing.vercel.app
- **Vercel Dashboard**: https://vercel.com/pbrik-tech/buyeasy-landing
- **GitHub Repo**: https://github.com/pbrik-tech/buyeasy-landing

---

## 🔑 Как получить Personal Access Token:

1. Зайдите на https://github.com/settings/tokens
2. Нажмите **"Generate new token (classic)"**
3. Выберите права: `repo` (полный доступ к репозиториям)
4. Скопируйте токен и используйте вместо пароля

---

## ⚠️ Важно:

После успешного пуша на GitHub:
1. Зайдите на https://vercel.com
2. Найдите проект **buyeasy-landing**
3. Нажмите **"Connect Git Repository"**
4. Выберите `pbrik-tech/buyeasy-landing`
5. Vercel автоматически задеплоит новую версию!

---

## ✅ Что уже сделано:

- ✅ Дизайн переработан в минималистичном стиле
- ✅ Добавлен текст по всему сайту
- ✅ Убрано слово "licensed" из hero
- ✅ Добавлена MSB лицензия в футер
- ✅ Calendly заменен на форму
- ✅ Добавлен Login с фейковой формой
- ✅ Код закоммичен локально
- ⏳ Осталось только запушить на GitHub

Удачи! 🎉
