if [ -d "./node_modules_stashed" ] 
then 
  echo "Unstashing node_modules in Lest-Form repo"
  mv ./node_modules_stashed ./node_modules 
fi