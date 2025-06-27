import "./styles.css";

import definePlugin from "@utils/types";

import { settings } from "./settings";
import { WhisperChatBarIcon } from "./whisperIcon";

export default definePlugin({
    name: "Whispers",
    description: "Set a prefix and suffix for your messages",
    authors: [{ name: "Cait", id: 614870731322425374n }],
    settings,

    renderChatBarButton: WhisperChatBarIcon,

    async onBeforeMessageSend(_, message) {
        if (!settings.store.autoWhisper) return;
        if (!message.content) return;

        message.content = settings.store.prefix.replaceAll("\\n", "\n") + message.content + settings.store.suffix.replaceAll("\\n", "\n");
    }
});
