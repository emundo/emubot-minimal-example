import { ChatConfig, SlackAdapter } from "@emundo/emubot";

/**
 * Exemplar configuration of the Slack adapter. If you are unsure which information is required and how to retrieve it,
 * take a look at the [Slack]{@link ../../_build/html/chat_adapter/slack.html} section of our documentation.
 */
export const platformChatSlack: ChatConfig<SlackAdapter> = {
  appSecret: "YOUR-SLACK-APP-SECRET",
  constructor: SlackAdapter,
  name: "slack",
  url: "https://slack.com/api/chat.postMessage",
  webhook_path: "/webhook"
};
