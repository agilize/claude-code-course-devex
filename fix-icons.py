#!/usr/bin/env python3
import os
import glob
import re

BASE = '/Users/afialho/workspace/labs/ccgram-projects/a'

# Find all HTML files (exclude node_modules)
html_files = []
for root, dirs, files in os.walk(BASE):
    dirs[:] = [d for d in dirs if d not in ['node_modules', '.git', '.vercel']]
    for f in files:
        if f.endswith('.html'):
            html_files.append(os.path.join(root, f))

print(f"Found {len(html_files)} HTML files")

UNICONS_CDN = '<link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.8/css/line.css">'

# Emoji → Unicons icon HTML replacements
# Order matters: do longer/more specific ones first
HTML_REPLACEMENTS = [
    # Hamburger menu
    ('☰', '<i class="uil uil-bars"></i>'),
    # Search
    ('🔍 Buscar módulos, comandos, conceitos...', '<i class="uil uil-search"></i> Buscar módulos, comandos, conceitos...'),
    ('🔍 Buscar módulos...', '<i class="uil uil-search"></i> Buscar módulos...'),
    ('🔍 Buscar...', '<i class="uil uil-search"></i> Buscar...'),
    ('🔍', '<i class="uil uil-search"></i>'),
    # Theme toggles (static HTML)
    ('>🌙<', '><i class="uil uil-moon"></i><'),
    ('>☀️<', '><i class="uil uil-sun"></i><'),
    # Logo bolt
    ('>⚡<', '><i class="uil uil-bolt-alt"></i><'),
    # Complete button
    ('✓ Marcar como concluído', '<i class="uil uil-check-circle"></i> Marcar como concluído'),
    ('✓ Concluído!', '<i class="uil uil-check-circle"></i> Concluído!'),
    # Callout icons
    ('<strong>💡 Dica:</strong>', '<strong><i class="uil uil-lightbulb-alt"></i> Dica:</strong>'),
    ('<strong>⚠️ Atenção:</strong>', '<strong><i class="uil uil-exclamation-triangle"></i> Atenção:</strong>'),
    ('<strong>ℹ️ Info:</strong>', '<strong><i class="uil uil-info-circle"></i> Info:</strong>'),
    ('<strong>💡', '<strong><i class="uil uil-lightbulb-alt"></i>'),
    ('<strong>⚠️', '<strong><i class="uil uil-exclamation-triangle"></i>'),
    ('<strong>ℹ️', '<strong><i class="uil uil-info-circle"></i>'),
    # Exercise
    ('🎯 Exercício Prático', '<i class="uil uil-crosshair"></i> Exercício Prático'),
    ('🎯', '<i class="uil uil-crosshair"></i>'),
    # Resources
    ('📚 Recursos', '<i class="uil uil-book-open"></i> Recursos'),
    ('📚', '<i class="uil uil-book-open"></i>'),
    # Next/prev arrows in button text
    ('Próximo →', 'Próximo <i class="uil uil-arrow-right"></i>'),
    ('← Anterior', '<i class="uil uil-arrow-left"></i> Anterior'),
    # Hero badge
    ('⚡ Guia Completo', '<i class="uil uil-bolt-alt"></i> Guia Completo'),
    # Part numbers with emojis (none expected but just in case)
    # Generic remaining emojis that might appear
    ('⏱', '<i class="uil uil-clock"></i>'),
    ('✓', '<i class="uil uil-check"></i>'),
]

for filepath in html_files:
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    original = content

    # 1. Add Unicons CDN after prism.css link (if not already there)
    if 'unicons.iconscout.com' not in content:
        content = content.replace(
            '<link rel="stylesheet" href="/assets/css/prism.css">',
            f'<link rel="stylesheet" href="/assets/css/prism.css">\n  {UNICONS_CDN}'
        )
        # Fallback: add after additional.css
        if 'unicons.iconscout.com' not in content:
            content = content.replace(
                '<link rel="stylesheet" href="/assets/css/additional.css">',
                f'<link rel="stylesheet" href="/assets/css/additional.css">\n  {UNICONS_CDN}'
            )

    # 2. Apply emoji replacements
    for old, new in HTML_REPLACEMENTS:
        content = content.replace(old, new)

    if content != original:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Updated: {os.path.relpath(filepath, BASE)}")
    else:
        print(f"No changes: {os.path.relpath(filepath, BASE)}")

print("\nDone with HTML files!")
