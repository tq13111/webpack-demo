yarn build &&
git checkout gh-pages &&
rm -rf  src/ *.html *.js *.css *.png *.jpg &&
mv dist/* ./ &&
rm -rf dist &&
git add . &&
git commit -m 'updata' &&
git push &&
git checkout -