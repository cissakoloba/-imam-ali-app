# Build de test Imam Ali

```bash
npm install
npx expo start
npm i -g eas-cli
eas login
eas build --platform android --profile preview
```

Le profil preview produit un APK installable. Le compte Expo doit rester au nom du propriétaire.
