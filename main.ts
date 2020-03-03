/**
 * The purpose of this minimal example is to show you how you can easily use the emundo botframework (https://github.com/emundo/emubot).
 * It can be useful to use and adapt this example if you want to perform small tests of the framework or if you want to get going with one
 * of the adapters.
 *
 * The CLI-Adapter will be used by default if you do not supply any other configuration. If you want to test or use any other adapter, please
 * check out the documentation in the emubot framework. You can use the distinctive adapters by uncommenting the next lines and changing the
 * imported configuration.
 * Platforms other than the CLI-Adapter (and the default response if no other NLP adapter is in use) always require additional configuration:
 * Most chat platforms require you to setup a server that is able to communicate using https (i.e. you need a certificate) and additional
 * tokens to talk to the messaging API.
 * NLP adapters usually do not require another server, but some token or configuration file to communicate with their API.
 */

// import { setConfig } from "@emundo/emubot";
// import { config } from "./configuration/configCliDf2";

// setConfig(config);

import { initCore } from "@emundo/emubot";

initCore();
