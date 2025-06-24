/*
 * Vencord, a Discord client mod
 * Copyright (c) 2025 Vendicated and contributors
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { classNameFactory } from "@api/Styles";
import { Margins } from "@utils/margins";
import { ModalCloseButton, ModalContent, ModalHeader, ModalProps, ModalRoot } from "@utils/modal";
import { Forms, Switch, TextInput } from "@webpack/common";

import { settings } from "./settings";

const cl = classNameFactory("vc-whisper-");
const StringSettingKeys = ["prefix", "suffix"] as const;

function WhisperSettings({ settingsKey }: { settingsKey: typeof StringSettingKeys[number]; }) {
    const currentValue = settings.use([settingsKey])[settingsKey];

    return (
        <section className={Margins.bottom16}>
            <Forms.FormTitle tag="h3">
                {settingsKey}
            </Forms.FormTitle>
            <Forms.FormText tag="h5">
                {settings.def[settingsKey].description}
            </Forms.FormText>
            <TextInput
                value={settings.store[settingsKey]}
                onChange={v => settings.store[settingsKey] = v}
            />
        </section>
    );
}

function AutoWhisperToggle() {
    return (
        <Switch
            value={settings.use(["autoWhisper"]).autoWhisper}
            onChange={v => settings.store.autoWhisper = v}
            note={settings.def.autoWhisper.description}
            hideBorder
        >
            AutoWhisper
        </Switch>
    );
}

export function WhisperModal({ rootProps }: { rootProps: ModalProps; }) {
    return (
        <ModalRoot {...rootProps}>
            <ModalHeader className={cl("modal-header")}>
                <Forms.FormTitle tag="h2" className={cl("modal-title")}>
                    Whisper
                </Forms.FormTitle>
                <ModalCloseButton onClick={rootProps.onClose} />
            </ModalHeader>

            <ModalContent className={cl("modal-content")}>
                {StringSettingKeys.map(s => (
                    <WhisperSettings
                        key={s}
                        settingsKey={s}
                    />
                ))}

                <Forms.FormDivider className={Margins.bottom16} />

                <AutoWhisperToggle />
            </ModalContent>
        </ModalRoot>
    );
}
