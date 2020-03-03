import { SlackAdapter, DialogflowV2Adapter, Config } from "@emundo/emubot";

import { platformNlpDialogflowV2 } from "./platformNlpDialogflowV2";
import { platformChatSlack } from "./platformChatSlack";

import { serverConfig } from "./serverConfig";
import { interceptorConfig } from "./interceptorConfig";

/**
 * An exemplar configuration using Slack and DialogflowV2.
 * You can exchange elements (e.g. use Facebook instead of Slack) by using a different respective (messenger) configuration.
 */
export const config: Config<SlackAdapter, DialogflowV2Adapter> = {
  interceptors: interceptorConfig,
  platform: {
    chat: platformChatSlack,
    nlp: platformNlpDialogflowV2
  },
  server: serverConfig
};
