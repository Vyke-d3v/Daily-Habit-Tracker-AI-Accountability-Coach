# TODO - Register.jsx HeroUI Styling + Bug Fixes

## Setup
- [x] 1. Uncomment `@import "@heroui/styles";` in `src/index.css` so HeroUI styles load.

## Register.jsx
- [x] 2. Rewrite `Register.jsx` with HeroUI components (`TextField`, `Button`, `Card`, `Link`).
- [x] 3. Fix field `name` attributes to match `formData` keys (username, email, password).
- [x] 4. Fix validation display using `isInvalid` + `ErrorMessage`.
- [x] 5. Fix `errors.name` → `errors.username`.
- [x] 6. Fix `console.log("formData")` → `console.log(formData)`.
- [x] 7. Fix `setError([])` → `setError({})`.
- [x] 8. Fix `Link to="login"` → `Link to="/login"`.

## Verify
- [x] 9. Run `npm run build` to confirm no errors. ✅ Build succeeded (only harmless CSS minification warnings).
- [x] 10. Run `npm run lint` — Register.jsx is clean (remaining errors are pre-existing in other files).
