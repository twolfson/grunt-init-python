# Create the grunt-init dir
mkdir -p $HOME/.grunt-init/

# Link the current directory to ~/.grunt-init/python
ln -s $PWD $HOME/.grunt-init/python

# Notify the user
echo "Linked $PWD -> $HOME/.grunt-init/python"