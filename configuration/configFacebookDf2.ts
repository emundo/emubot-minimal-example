import { FacebookAdapter, DialogflowV2Adapter, Config } from "@emundo/emubot";

import { platformChatFacebook } from "./platformChatFacebook";
import { platformNlpDialogflowV2 } from "./platformNlpDialogflowV2";

import { serverConfig } from "./serverConfig";
import { interceptorConfig } from "./interceptorConfig";

/**
 * An exemplar configuration using Facebook and DialogflowV2.
 * You can exchange elements (e.g. use Slack instead of Facebook) by using a different respective (messenger) configuration.
 */
export const config: Config<FacebookAdapter, DialogflowV2Adapter> = {
  interceptors: interceptorConfig,
  platform: {
    chat: platformChatFacebook,
    nlp: platformNlpDialogflowV2
  },
  server: serverConfig
};
