export default class Language {
    static _currentLanguage = 'vi';
    static keys = null;
    static init() {
        if (Language.keys != null) return;
        Language._loadKeys();
    }

    static _loadKeys() {
        switch (Language._currentLanguage) {
            case 'vi':
                Language.keys = require('../Resource/Languages/vi.json');
                break;
            case 'en':
                Language.keys = require('../Resource/Languages/en.json');
                break;
            case 'jp':
                Language.keys = require('../Resource/Languages/jp.json');
                break;
            default:
                break;
        }
    }

    /**
        lang: String
     */
    static setCurrentLanguage(lang) {
        if (!lang || Language._currentLanguage === lang) return;
        Language._currentLanguage = lang;
        Language.keys = null;
        Language.init();
    }
}
Language.init();