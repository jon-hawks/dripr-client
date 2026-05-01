# Get generic VSCode Node dev container image.
FROM mcr.microsoft.com/devcontainers/javascript-node

# Automatically set up remote tracking on new branches.
RUN git config --global push.autoSetupRemote true

# Remove dubious ownership warning.
RUN git config --global safe.directory "*"
