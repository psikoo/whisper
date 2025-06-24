/*
 * Vencord, a Discord client mod
 * Copyright (c) 2025 Vendicated and contributors
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import "./styles.css";

import { Devs } from "@utils/constants";
import definePlugin from "@utils/types";

import { settings } from "./settings";
import { WhisperChatBarIcon } from "./whisperIcon";

export default definePlugin({
    name: "Whispers",
    description: "Automatically send subtext messages",
    authors: [Devs.Cait],
    settings,

    renderChatBarButton: WhisperChatBarIcon,

    async onBeforeMessageSend(_, message) {
        if (!settings.store.autoWhisper) return;
        if (!message.content) return;

        message.content = settings.store.prefix + message.content + settings.store.suffix;
    }
});
