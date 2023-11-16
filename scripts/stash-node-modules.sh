if [ -d "./node_modules" ] 
then
  echo "Stashing node_modules in Lets-Form repo"
  mv ./node_modules ./node_modules_stashed
fi