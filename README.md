> Ru

# Urban Market

E-commerce платформа, построенная с использованием React, TypeScript и Redux Toolkit.

## О проекте

Этот проект разработан в соответствии с техническим заданием на позицию Frontend-разработчика.
Функциональность включает в себя просмотр, добавление, удаление продуктов и управление избранными товарами.

> Полное техническое задание можно найти в файле [TASK.md](./TASK.md) в корне проекта.

## Реализованные функции

- Создание новых продуктов с валидацией полей (**новое**)
- Сохранение состояния (созданных продуктов, избранного) между сессиями (**новое**)
- Фильтрация продуктов по избранному
- Фильтрация продуктов с выгодной ценой (скидка > 15%)
- Просмотр списка продуктов с карточным интерфейсом
- Подробная страница продукта
- Возможность добавлять продукты в избранное
- Удаление продуктов из каталога

## Планируемые улучшения

- Редактирование существующих продуктов
- Поиск по продуктам
- Пагинация списка

## Технический стек

- React 18
- TypeScript
- Redux Toolkit для управления состоянием
- React Router для навигации
- Axios для API запросов
- DummyJSON для тестовых данных
- Zod для валидации форм

## Начало работы

### Предварительные требования

- Node.js (v14.0.0 или выше)
- npm (v6.0.0 или выше)

### Установка

1. Клонировать репозиторий

```bash
git clone https://github.com/yourusername/urban-market.git
cd urban-market
```

2. Установить зависимости

```bash
npm install
```

3. Запустить сервер разработки

```bash
npm install
```

## Структура проекта

src/  
├── components/ # Переиспользуемые UI компоненты  
├── pages/ # Компоненты страниц  
├── store/ # Настройка Redux store и слайсы  
├── services/ # API сервисы  
├── types/ # Определения TypeScript типов  
├── hooks/ # Пользовательские React hooks  
├── utils/ # Вспомогательные функции  
└── assets/ # Статические ресурсы

### Лицензия

Этот проект распространяется по лицензии MIT.

> Примечание: В настоящее время проект находится в активной разработке. Функциональность и детали реализации могут измениться по мере его развития.

> En

# Urban Market

A modern, responsive e-commerce platform built with React, TypeScript, and Redux Toolkit.

## About the Project

This project was developed according to the technical specification for a Frontend Developer position.
The functionality includes viewing, adding, deleting products, and managing favorite items.

> The complete technical specification can be found in the [TASK.md](./TASK.md) file in the project root.

## Implemented Features

- Create new products with field validation (**new**)
- State persistence between sessions (created products, favorites) (**new**)
- Filter products by favorites
- Filter products by best discount (more than 15%)
- Product catalog with card-based UI
- Product details page
- Add products to favorites
- Delete products from catalog

## Planned Improvements

- Edit existing products
- Search functionality
- Pagination

## Tech Stack

- React 18
- TypeScript
- Redux Toolkit for state management
- React Router for navigation
- Axios for API requests
- DummyJSON for mock data
- Zod for form validation

## Getting Started

### Prerequisites

- Node.js (v14.0.0 or later)
- npm (v6.0.0 or later)

### Installation

1. Clone the repository

```bash
git clone https://github.com/yourusername/urban-market.git
cd urban-market
```

2. Install dependencies

```bash
npm install
```

3. Start the development server

```bash
npm run dev
```

### Project Structure

src/  
├── components/ # Reusable UI components  
├── pages/ # Page components  
├── store/ # Redux store setup and slices  
├── services/ # API services  
├── types/ # TypeScript type definitions  
├── hooks/ # Custom React hooks  
├── utils/ # Utility functions  
└── assets/ # Static assets

### License

This project is licensed under the MIT License

> Note: This project is currently in active development. Features and implementation details may change as the project evolves.
