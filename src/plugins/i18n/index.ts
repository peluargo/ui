import { createI18n } from 'vue-i18n'
import messages from './messages'

const i18n = createI18n({
    locale: 'pt-BR',
    fallbackLocale: 'en',
    messages
})

export default i18n