# Изображения и промпты

Все новые изображения и реставрация портрета выполнены встроенным ImageGen. WebP сделаны из PNG с помощью sharp для уменьшения размера; содержание изображений при конвертации не менялось. Полноразмерные исходники сохранены локально как *-original.png.

## Проектные ресурсы

| Ресурс                  | Происхождение                                     |
| ----------------------- | ------------------------------------------------- |
| hero-800/1600/2200.webp | ImageGen, иллюстративная обложка                  |
| film.webp               | ImageGen, иллюстрация услуги                      |
| polish.webp             | ImageGen, иллюстрация услуги                      |
| interior.webp           | ImageGen, иллюстрация услуги                      |
| sound.webp              | ImageGen, иллюстрация услуги                      |
| marat-enhanced.webp     | ImageGen edit исходного 150×150 фото пользователя |
| work-bmw.webp           | Реальная обложка публикации DZDQUmRI3OG           |
| work-getz.webp          | Реальная обложка публикации DWGmKjCiJWM           |

## Обложка, полный промпт

Photorealistic automotive campaign photograph ONLY. Wide horizontal 1792x1024. Graphite dark grey Porsche 911 front three-quarter angle in a dark charcoal clean detailing workshop, positioned in the right two thirds, dramatic overhead white strip lights with long reflections on polished body, restrained yellow reflection very subtle, elegant quiet empty dark LEFT THIRD with no objects for website headline overlay. Grounded realistic tires and headlights, premium crisp automotive photography. No people, no text, no UI, no watermarks. This is a decorative hero image for a detailing studio, not a claimed client project.

## Иллюстрации услуг

Общий префикс: Photorealistic premium automotive detailing illustrative photography, ONE horizontal 1536x1024 photograph ONLY, no UI or text.

Отдельные сцены:

- film: Black gloved hands stretching clear paint protection film over a graphite car hood, bubbles of solution, close-up.
- polish: Black gloved hands using a dual action polishing machine with cream pad on a dark grey sports car hood, close-up.
- interior: Black gloved hand using an upholstery extractor on black leather and fabric car seat, intimate car interior.
- sound: Black gloved hands pressing dark black gold sound deadening mat into exposed inside of car door, accurate car workshop close-up.

Общий суффикс: Clean dim graphite workshop, hard white ceiling strip reflections, natural material texture, tiny restrained yellow accents. Tight confident camera composition, realistic tools and fingers. No face, logos, words, watermarks. Commercial service illustration, not an actual client project.

## Реставрация фото пользователя, полный промпт

Enhance and upscale this exact supplied photograph of Marat, an auto detailer, for the greeting section of his actual business website. Preserve identity exactly: same face, facial features, ethnicity, apparent age, expression, blue Adidas cap, white shirt, hands, black polishing tool, pose, and workshop setting. No beautification, no changing face, no synthetic new portrait, no extra fingers. Restore natural detail from a tiny 150x150 image, reduce compression noise, improve exposure and sharpness with realistic skin, neutral white balance. Keep the scene documentary and honest. Output a clean high resolution square photograph, 1024x1024, restrained professional photo restoration. Do not add text, graphics, watermark or invent branding. This is an edit target, not a style reference.

## Референсы разделов

Общий промпт: Generate ONE horizontal website SECTION reference, 1536x1024 landscape, premium MARAT DETAILING local auto studio Astana. Consistent charcoal #101110, yellow #F4CE45, white type, Manrope Cyrillic, squared 8px corners, sophisticated readable native website UI, no browser frame, no stats or invented testimonials. Not a collage.

- Hero: slim navigation, cinematic dark Porsche on the right, large two-line «Ваш автомобиль. Наше внимание.», yellow «Обсудить в WhatsApp», «Детейлинг в Астане».
- Services: title «Забота о каждой детали», spacious asymmetric 2×2 photography grid, four services, text below photographs, thin separators.
- Works: title «Результат в деталях», asymmetric portrait gallery, yellow Instagram link, captions below photographs.
- About: wide detailer portrait left, «Марат. Ваш личный детейлер» right, consultation and assessment paragraphs, WhatsApp action. Это только композиционный референс; сгенерированного человека не выдаём за Марата.
- Process: title «Понятно на каждом этапе», three numbered process steps, two native disclosure questions.
- Contacts: title «Начнём с вашего автомобиля», left form, right real phone and address, embedded Google map and route link. Данные карты в изображении не используются в коде.

Референсы сохранены по одному в `design/references/`. На сайт не выводится ни текст внутри референсов, ни их вымышленные проекты/персонажи. Интерфейс сверстан семантическим HTML.
