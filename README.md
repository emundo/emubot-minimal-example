# emubot minimal setup

This repository offers a minimal example using the npm library of the [eMundo Bot Framework (emubot)](https://github.com/emundo/emubot).

## Important note

This setup is a MINIMAL setup which can be used to start a chatbot, e.g. for a demonstration or for toying around with the framework or another platform.
You should not use this setup in production since several important features, like user pseudonymization, are not implemented in this example. Some snippets
for advanced usage can be found in our [advanced example](https://github.com/emundo/emubot-advanced-example).

## <a name="setup"></a>Setup

Make sure that you have installed [npm](https://www.npmjs.com/get-npm). Then:

1. Install the dependencies: `npm install`.
2. Create a valid configuration file, import the file in your `main.ts` and compile the code using `npm run tsc`.
3. Start the bot: `npm run start`.

This will start the chatbot with the default configuration using a CLI client as well as no NLP platform. Any request will be answered with a default response.
To test your bot with a real agent (i.e. "bot"), create an agent on one of the supported platforms and use a valid
[configuration file](https://emundo.github.io/emubot_doc/_build/html/configuration.html). We have already prepared some configuration files which you can
easily change and extend. Head over to the `main.ts` file, import the configuration and follow the previous [setup](#setup) steps. Your bot should then work
and you should receive answers from the respective agent.
Changing the chat platform usually requires setting up a server with a certificate to enforce communication using https. If you have set up a server you can also
just follow the instructions in our [documentation](https://emundo.github.io/emubot_doc/_build/html/index.html) to deploy the bot to another messaging platform.

## Authors

- **Fiete Lueer**
- **Maxim Dolgich**
