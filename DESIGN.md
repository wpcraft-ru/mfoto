# DESIGN.md

> Дизайн-система для AI-агентов. Формат: Markdown + YAML frontmatter.
> Все токены и правила в одном месте — агент читает и применяет.

---

## Context

- **Проект:** MFoto — лендинг фотографа в Новосибирске про фотокниги для семей, детских садов и школ
- **Платформа:** Статический HTML-сайт (будет) / AstroJS прототипы
- **Workflow:** При проработке дизайна любой страницы — детали сохраняются в RFC `./docs/rfc/` в формате md
- **Конвенция:** Каждый RFC-файл описывает один page design с деталями, секциями, текстами и промптами для иллюстраций
- **Прототипирование:** HTML-прототипы собираются на **AstroJS + DaisyUI** в папке `./docs/prototypes/<slug>/`
- **Design source of truth:** `design.pen` (Penpot) — основной макет лендинга

---

## Overview

- **Стиль:** Café-inspired — тёплые тона, мягкая типографика, чистые layout-ы
- **Настроение:** Доверительный, уютный, профессиональный
- **Вдохновение:** Уютные café-интерфейсы + тёплая семейная эстетика (Cafe Design System by typeui.sh)
- **Для кого:** смотри MARKETING.md — целевая аудитория

## Design Tokens

### Colors

```yaml
colors:
  primary: "#5D4432"        # тёплый коричневый — основной акцент (CTA, выделения)
  primary-hover: "#4A3628"  # hover primary
  secondary: "#E9E3DD"      # тёплый бежевый — вторичный акцент
  success: "#16A34A"
  warning: "#D97706"
  danger: "#DC2626"
  background: "#F9F7F5"     # тёплый off-white — основной фон
  surface: "#E9E3DD"        # бежевый — фон карточек и альтернативных секций
  text-primary: "#3E2B1E"   # тёмно-коричневый — заголовки
  text-secondary: "#5D4432" # средний коричневый — тело текста
  text-tertiary: "#9A8474"  # мягкий коричневый — meta, muted
  border: "#5D4432"         # тёплый коричневый бордер 1px
  border-light: "#D4CAC2"   # светлый тёплый бордер
  cta-text: "#FFFFFF"       # текст на CTA-кнопках
```

### Typography

```yaml
typography:
  font-heading: "Poppins, sans-serif"
  font-body: "Poppins, sans-serif"
  font-mono: "JetBrains Mono, monospace"
  font-data: "JetBrains Mono, monospace"

  h1:
    fontFamily: "{typography.font-heading}"
    fontSize: "64px"
    fontWeight: 700
    lineHeight: 1.05

  h2:
    fontFamily: "{typography.font-heading}"
    fontSize: "44px"
    fontWeight: 700
    lineHeight: 1.1

  h3:
    fontFamily: "{typography.font-heading}"
    fontSize: "28px"
    fontWeight: 600
    lineHeight: 1.2

  body:
    fontFamily: "{typography.font-body}"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.6

  body-lg:
    fontFamily: "{typography.font-body}"
    fontSize: "18px"
    fontWeight: 400
    lineHeight: 1.55

  small:
    fontFamily: "{typography.font-body}"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.5

  meta:
    fontFamily: "{typography.font-mono}"
    fontSize: "12px"
    fontWeight: 400

  cta-link:
    fontFamily: "{typography.font-mono}"
    fontSize: "13px"
    fontWeight: 400

  data-number:
    fontFamily: "{typography.font-data}"
    fontSize: "24px"
    fontWeight: 700

  data-stat:
    fontFamily: "{typography.font-data}"
    fontSize: "28px"
    fontWeight: 400

  card-title:
    fontFamily: "{typography.font-body}"
    fontSize: "20px"
    fontWeight: 600
    lineHeight: 1.2
```

### Spacing

```yaml
spacing:
  2xs: "2px"
  xs: "4px"
  sm: "8px"
  md: "12px"
  lg: "16px"
  xl: "24px"
  2xl: "32px"
  3xl: "48px"
```

### Border Radius

```yaml
rounded:
  none: "0px"
  sm: "4px"
  md: "8px"
  lg: "10px"
  xl: "16px"
```

### Shadows

```yaml
shadows:
  none: "none"
  sm: "0 1px 2px rgba(0,0,0,0.05)"
```

## Layout

- **Max width:** 1200px (контент), 1440px (дизайн-макет)
- **Padding:** 48px горизонтальный (десктоп), 28px (блоки)
- **Grid:** flexbox, gap по токенам spacing
- **Breakpoints:**
  - Mobile: ≤ 640px
  - Tablet: ≤ 1024px
  - Desktop: > 1024px
- **Mobile-first:** стили пишутся для мобильных, затем расширяются

### Секция-padding

```yaml
section-padding:
  desktop: "28px"
  mobile: "16px"
```

## Components

### Button Primary (CTA)

```yaml
button-primary:
  backgroundColor: "{colors.primary}"
  textColor: "#FFFFFF"
  borderRadius: "0px"
  borderWidth: "1px"
  borderColor: "{colors.border}"
  padding: "12px 20px"
  fontSize: "16px"
  fontWeight: 600
  fontFamily: "{typography.font-body}"
  transition: "all 0.15s ease"
  hover:
    backgroundColor: "{colors.primary-hover}"
```

### Button Small (CTA Link)

```yaml
button-small:
  backgroundColor: "{colors.primary}"
  textColor: "#FFFFFF"
  borderRadius: "0px"
  borderWidth: "1px"
  borderColor: "{colors.border}"
  padding: "10px 18px"
  fontSize: "15px"
  fontWeight: 600
  fontFamily: "{typography.font-body}"
```

### CTA Link (inline)

```yaml
cta-link:
  color: "{colors.primary}"
  fontFamily: "{typography.font-mono}"
  fontSize: "13px"
  textDecoration: "none"
```

### Card

```yaml
card:
  backgroundColor: "#FFFFFF"
  borderColor: "{colors.border}"
  borderWidth: "1px"
  borderRadius: "0px"
  padding: "{spacing.xl}"
  gap: "{spacing.md}"
```

### Card Light (на сером фоне)

```yaml
card-light:
  backgroundColor: "{colors.surface}"
  borderColor: "{colors.border}"
  borderWidth: "1px"
  borderRadius: "0px"
  padding: "{spacing.xl}"
  gap: "{spacing.md}"
```

### Spec Block

```yaml
spec-block:
  backgroundColor: "{colors.surface}"
  borderColor: "{colors.border}"
  borderWidth: "1px"
  borderRadius: "0px"
  padding: "12px"
  gap: "4px"
```

### Step Block

```yaml
step-block:
  backgroundColor: "{colors.surface}"
  borderColor: "{colors.border}"
  borderWidth: "1px"
  borderRadius: "0px"
  padding: "10px 12px"
  gap: "12px"
```

### Section Frame

```yaml
section:
  # Чередование: background (#F9F7F5) и surface (#E9E3DD)
  background-white: "{colors.background}"
  background-gray: "{colors.surface}"
  borderColor: "{colors.border}"
  borderWidth: "1px"
  padding: "28px"
  gap: "14px"
```

## Page Patterns

### Landing Page Structure (10 блоков)

| # | Блок | Фон | Содержимое |
|---|------|-----|------------|
| 1 | Hero | background (#F9F7F5) | h1 + subtitle + meta-tags + CTA |
| 2 | Для кого | surface (#E9E3DD) | h2 + 3 карточки + CTA |
| 3 | Фотокнига | background (#F9F7F5) | h2 + описание + 3 spec-блока + CTA |
| 4 | Виды фото | surface (#E9E3DD) | h2 + 3 карточки + CTA |
| 5 | Процесс | background (#F9F7F5) | h2 + meta-tag + 3 step-блока + CTA |
| 6 | Безопасность | surface (#E9E3DD) | h2 + subtitle + буллеты + CTA |
| 7 | Пакеты | background (#F9F7F5) | h2 + subtitle + 3 карточки пакетов |
| 8 | Доверие | background (#F9F7F5) | h2 + subtitle + 3 stat + отзывы + CTA |
| 9 | FAQ | surface (#E9E3DD) | h2 + список вопросов + CTA |
| 10 | Форма | background (#F9F7F5) | h2 + subtitle + поля формы + consent |

### Hero Section

- Poppins h1, 64px, fontWeight 700, lineHeight 1.05
- Poppins subtitle, 18px, цвет text-secondary
- Meta-tags: JetBrains Mono, 12px, цвет text-tertiary, формат `[VALUE / VALUE]`
- CTA: кнопка primary
- Фон: background (#F9F7F5)

### Card Grid

- 3 колонки на десктопе, stack на мобильных
- Карточки с чёрным бордером 1px, без скруглений
- gap: 12px

### Meta Labels

- JetBrains Mono, 12px, цвет text-tertiary
- Формат: `[KEYWORD / KEYWORD]` или `[METADATA / VALUE]`

## Interaction States

| State | Description |
|-------|-------------|
| Default | Обычный вид |
| Hover | `cursor: pointer`, визуальный feedback |
| Focus | Accessibility ring — `outline: 2px solid {colors.primary}` |
| Disabled | `opacity: 0.5`, `cursor: not-allowed` |

Транзиции: `transition: all 0.15s ease`

## Accessibility

- **Контраст:** WCAG AA минимум (4.5:1 текст, 3:1 UI)
- **Focus visible:** Все интерактивные элементы — видимый фокус
- **Семантика:** Правильные HTML-теги
- **Alt text:** У всех изображений
- **Touch targets:** Минимум 44×44px

## Visual Directions

Три стилистических направления (из design.pen):

### 01 TECH
- Ровный свет, чистый фон, стандартизированная поза
- Для альбомов и сайта школы

### 02 FAMILY
- Мягкий свет, эмоции, естественные взаимодействия
- Акцент на характере ребёнка

### 03 EDITORIAL MIX
- База из точных кадров + живые сценки
- Рекомендуемый вариант: 70% фото + 30% технические оверлеи

## Do's and Don'ts

### ✅ Do

- Использовать чёрный бордер 1px без скруглений (бренд-стиль)
- Чередовать белый и серый (#F3F4F6) фон секций
- Использовать Anton для всех заголовков
- Meta-информацию в IBM Plex Mono / Geist Mono
- Сохранять page design RFCs в `./docs/rfc/`

### ❌ Don't

- Использовать скругления на карточках и кнопках (кроме тёплого направления)
- Использовать цвета вне палитры
- Добавлять inline styles
- Использовать `!important`
- Ссылаться на Figma — всё в этом файле и design.pen

## Tools

```bash
# Валидация
npx @google/design.md lint DESIGN.md

# Дифф
npx @google/design.md diff DESIGN.md DESIGN-v2.md

# Экспорт в Tailwind
npx @google/design.md export --format tailwind DESIGN.md > tailwind.theme.json
```
