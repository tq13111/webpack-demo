yarn build &&
git checktout gh-pages &&
rm -rf *.html *.js *.css *.png *.jpg &&
mv dist/* ./ &&
rm -rf dist &&
git add . &&
git commit -m 'updata' &&
git push 