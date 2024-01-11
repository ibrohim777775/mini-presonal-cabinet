declare module '@vue/runtime-core' {
}

declare module '@nuxt/schema' {
  interface AppConfig {
    app: {
      version: string
      language: string
      available_locales: string[]
    }

    headers: {
      ALLOW_ORIGIN: '*' | string
    }

    BASE_URL: string
    STATIC_URL: string
    API_URL: string
  }
}

interface LocaleMessages extends DefaultLocaleMessageSchema {
  [key: string]: Record<string, string> | string
}

// declare module '#locale' {
//   export default interface Locales {
//     uz: LocaleMessages
//     ru: LocaleMessages
//     en: LocaleMessages
//   }
// }

declare module '*.vue' {
  import Vue from 'vue'
  export default Vue
}
declare module '*.jpg' {
  const content: string
  export default content
}

declare module '*.png' {
  const content: string
  export default content
}

declare module '*.svg' {
  const content: string
  export default content
}
