# Create the grunt-init dir
mkdir -p $HOME/.grunt-init/

# Link the current directory to ~/.grunt-init/node
ln -s $PWD $HOME/.grunt-init/node

# Notify the user
echo "Linked $PWD -> $HOME/.grunt-init/node"