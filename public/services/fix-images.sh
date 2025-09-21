#!/bin/zsh
cd ~/mtm-website/public/services || exit

echo "🔎 Checke und benenne Bilder um ..."

# Entrümpelung
if [ -f entruempelung1.png ]; then
  mv entruempelung1.png entruempelung-hannover.png
  echo "✅ entruempelung1.png -> entruempelung-hannover.png"
fi

if [ -f entruempelung2.png ]; then
  mv entruempelung2.png entruempelung-mitarbeiter.png
  echo "✅ entruempelung2.png -> entruempelung-mitarbeiter.png"
fi

# Montage
if [ -f montage2.png ]; then
  mv montage2.png montage-hannover.png
  echo "✅ montage2.png -> montage-hannover.png"
fi

# Transport
if [ -f transport1.png ]; then
  mv transport1.png transport-hannover.png
  echo "✅ transport1.png -> transport-hannover.png"
fi

if [ -f transport2.png ]; then
  mv transport2.png transport-team.png
  echo "✅ transport2.png -> transport-team.png"
fi

# Umzüge
if [ -f umzuege1.png ]; then
  mv umzuege1.png umzuege-hannover.png
  echo "✅ umzuege1.png -> umzuege-hannover.png"
fi

if [ -f umzuege2.png ]; then
  mv umzuege2.png umzuege-team.png
  echo "✅ umzuege2.png -> umzuege-team.png"
fi

echo "🎉 Fertig! Bitte mit 'ls -l ~/mtm-website/public/services' prüfen."

