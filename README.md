# ASTRONOMIC

Внутренний сервис бара: рецептуры, граммовки, а в перспективе — меню,
себестоимость и закупки в одном месте.

## Структура репозитория

| Путь | Что это |
| --- | --- |
| [`app/`](app/) | React-приложение — актуальная версия, деплоится на GitHub Pages |
| `index.html`, `data.js` | первая статическая версия рецептурника; `data.js` пока служит источником данных для `app` |
| `.github/workflows/` | CI и деплой |

## Быстрый старт

```bash
npm --prefix app install
npm --prefix app run dev
```

Дальше — [app/README.md](app/README.md).

## Деплой на GitHub Pages

1. Создать репозиторий на GitHub и запушить `main`.
2. В **Settings → Pages → Build and deployment** выбрать источник **GitHub Actions**.
3. Каждый пуш в `main` собирает и публикует `app/` автоматически.

Адрес сайта: `https://<пользователь>.github.io/<репозиторий>/`
