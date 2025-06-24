import { ChatBarButton, ChatBarButtonFactory } from "@api/ChatButtons";
import { classNameFactory } from "@api/Styles";
import { openModal } from "@utils/modal";

import { settings } from "./settings";
import { WhisperModal } from "./whisperModal";

const cl = classNameFactory("vc-whisper-");

export function WhisperIcon({ className }: { className?: string; }) {
    return (
        <>
            <div className={className}>
                {settings.store.prefix}
            </div>
            <div className={className}>
                {settings.store.suffix}
            </div>
        </>
    );
}

export const WhisperChatBarIcon: ChatBarButtonFactory = ({ isMainChat }) => {
    const { autoWhisper, showChatBarButton } = settings.use(["autoWhisper", "showChatBarButton"]);

    if (!isMainChat || !showChatBarButton) return null;

    const settingPopup = () => {
        openModal(props => (
            <WhisperModal rootProps={props} />
        ));
    };

    const button = (
        <ChatBarButton
            tooltip="AutoWhisper"
            onClick={e => {
                if (e.shiftKey) return settingPopup();
                settings.store.autoWhisper = !settings.store.autoWhisper;
            }}
            onContextMenu={settingPopup}
            buttonProps={{ "aria-haspopup": "dialog" }}
        >
            <WhisperIcon className={cl({ "chat-button-on": autoWhisper, "chat-button-off": !autoWhisper, "chat-button": true })} />
        </ChatBarButton>
    );

    return button;
};
