import { definePluginSettings } from "@api/Settings";
import { OptionType } from "@utils/types";

export const settings = definePluginSettings({
    prefix: {
        type: OptionType.STRING,
        description: "String added before your messages.",
        default: "-# "
    },
    suffix: {
        type: OptionType.STRING,
        description: "String added after your messages.",
        default: ""
    },
    showChatBarButton: {
        type: OptionType.BOOLEAN,
        description: "Show whisper button in chat bar.",
        default: true
    },
    autoWhisper: {
        type: OptionType.BOOLEAN,
        description: "Automatically apply the prefix and suffix to your messages before sending.",
        default: true
    },
});
