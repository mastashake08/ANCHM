cordova build --release android
jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore ~/KeyStores/ava.keystore platforms/android/build/outputs/apk/android-release-unsigned.apk ava
~/Android/Sdk/build-tools/23.0.1/zipalign -v 4 platforms/android/build/outputs/apk/android-release-unsigned.apk ~/Desktop/ANCHM.apk
