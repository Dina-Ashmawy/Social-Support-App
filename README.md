# Social Support App

A 3-step form wizard with OpenAI “Help Me Write”, draft saving, and English/Arabic support.  
Built with **React, TypeScript, Vite, Ant Design, React Hook Form, and Yup**.

---

## How to Run

```bash
# install dependencies
npm install

# copy env example and add your OpenAI API key
cp .env.example .env

# start dev server
npm run dev

# build for production
npm run build
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## OpenAI API Key Setup

1. Create a `.env` file in the project root.  
2. Add your OpenAI API key:

   ```env
   VITE_OPENAI_API_KEY=your_key_here
   ```

3. `.env` is ignored by Git (not uploaded).  
5. If a key is exposed, revoke it and create a new one in the [OpenAI Dashboard](https://platform.openai.com/account/api-keys).

---

## Features

- **3-Step Wizard**
  - Step 1: Personal Information  
  - Step 2: Family & Financial Information  
  - Step 3: Situation Descriptions (with AI help)  

- **Validations**
  - React Hook Form + Yup  
  - Translated error messages  

- **Drafts**
  - Save, update, resume, delete drafts in `localStorage`  

- **AI Integration**
  - “Help Me Write” button with OpenAI GPT suggestions  
  - Loading states & error handling  

- **Languages**
  - English + Arabic support  
  - Full RTL support  

- **Responsive UI**
  - Built with Ant Design  
  - Mobile, tablet, and desktop friendly  

- **Accessibility**
- Semantic HTML for page landmarks and form structure (`main`, headings, labels).  
- ARIA where needed only (e.g., `aria-label`, `aria-describedby`, roles).  
- Keyboard-friendly: focusable actions; tab order follows the form flow.  
- Ant Design’s components provide baseline accessibility by default.  
- Error messages are announced next to fields and remain visible.  

---

## Project Structure

```plaintext
src/
  api/              # API calls (OpenAI, submitApplication)
  features/
    drafts/         # draft services + UI
    helpMeWrite/    # AI assistance UI
    wizard/         # schemas, state, step components
  shared/           # constants, data, ui, hooks, types
  pages/            # Home, Wizard pages
  routes/           # AppRoutes, Guard
  store/            # Redux store
  lib/              # i18n setup + helpers
```

---

## Notes

- Screenshots of the app added here for clarity.  
- Focus was on:
  - Form flow and validations  
  - Clean UI/UX and responsiveness  
  - OpenAI integration with error handling  
  - Code readability and structure  
  - Accessibility basics  
