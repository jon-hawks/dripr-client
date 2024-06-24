# dripr Front-end
A stock filtering app written in React Native (and [Meteor](https://github.com/jon-hawks/dripr-server)).

Deploys itself upon commit.

## Running
Notes:
1. Be patient! It takes 3-5 minutes for the app to show up in Expo Go. (You may get timeouts or a 'No apps connected' message, keep trying!)
2. Expo will give you a link starting with the protocol "exp://", I had to change this to "https://".
3. To inspect the ngrok tunnel, navigate to: http://localhost:4040/inspect/http

## Build Status
[![Main](https://github.com/jon-hawks/dripr-client/workflows/default/badge.svg?branch=main)](https://github.com/jon-hawks/dripr-client/actions)

## Directory Structure
Follows the guide at [reactnative.express](https://www.reactnative.express/app/project_structure#large-projects).

# Known Issues
1. It isn't known why it takes 3-5 minutes for Metro Bundler to serve the app after starting up. There's no indication it's doing anything either (appears locked up, and reloading the app shows a 'No apps connected' message).
