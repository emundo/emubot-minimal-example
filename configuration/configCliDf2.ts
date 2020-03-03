import { DialogflowV2Adapter, Config, CliAdapter } from "@emundo/emubot";

import { platformChatCli } from "./platformChatCli";
import { platformNlpDialogflowV2 } from "./platformNlpDialogflowV2";

import { serverConfig } from "./serverConfig";
import { interceptorConfig } from "./interceptorConfig";

/**
 * An exemplar configuration using Facebook and DialogflowV2.
 * You can exchange elements (e.g. use Slack instead of Facebook) by using a different respective (messenger) configuration.
 */
export const config: Config<CliAdapter, DialogflowV2Adapter> = {
  interceptors: interceptorConfig,
  platform: {
    chat: platformChatCli,
    nlp: platformNlpDialogflowV2
  },
  server: serverConfig
};
