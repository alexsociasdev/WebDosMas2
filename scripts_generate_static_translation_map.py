import json
import re
import time
from pathlib import Path
from deep_translator import GoogleTranslator

FILES = [
    'services/data.ts',
    'projects/data.ts',
    'projects/project-descriptions.ts',
]
OUT = Path('/Users/alex/Desktop/WebDosMas/lib/generated-static-content-translations.ts')

pat = re.compile(r'"((?:[^"\\]|\\.)*)"|\'((?:[^\'\\]|\\.)*)\'')

def should_keep(s: str) -> bool:
    if not s:
        return False
    if s.startswith('/images/') or s.startswith('http') or s.startswith('@/') or s.startswith('/'):
        return False
    if s.startswith('center ') or s in {'cover', 'contain', 'jpg', 'jpeg', 'png', 'webp', 'svg'}:
        return False
    if re.fullmatch(r'[a-z0-9-]+', s):
        return False
    if re.fullmatch(r'[0-9+., %²³xmtA-Z-]+', s):
        return False
    if '@' in s and ' ' not in s:
        return False
    if re.fullmatch(r'\d{4}-\d{2}-\d{2}', s):
        return False
    if len(s) < 2:
        return False
    return True

strings = set()
for file in FILES:
    src = Path(file).read_text()
    for m in pat.finditer(src):
        s = (m.group(1) or m.group(2) or '').replace('\\n', '\n').replace('\\"', '"').replace("\\'", "'")
        if should_keep(s):
            strings.add(s)

source_strings = sorted(strings)
print('strings', len(source_strings), flush=True)

locale_targets = {'ca': 'ca', 'en': 'en', 'de': 'de'}
translations = {locale: {} for locale in locale_targets}

for locale, target in locale_targets.items():
    translator = GoogleTranslator(source='es', target=target)
    print('translating', locale, flush=True)
    for index, text in enumerate(source_strings, start=1):
        try:
            translated = translator.translate(text)
        except Exception:
            time.sleep(1)
            translated = translator.translate(text)
        translations[locale][text] = translated
        if index % 25 == 0:
            print(locale, index, '/', len(source_strings), flush=True)
            time.sleep(0.4)

content = 'import { type Locale } from "@/lib/i18n";\n\n'
content += 'export const generatedStaticContentTranslations: Record<Exclude<Locale, "es">, Record<string, string>> = '
content += json.dumps(translations, ensure_ascii=False, indent=2)
content += ' as const;\n'
OUT.write_text(content)
print('written', OUT, flush=True)
