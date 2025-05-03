import React from 'react';
import {FormattedMessage} from 'react-intl';

import musicIconURL from './music/music.png';
import musicInsetIconURL from './music/music-small.svg';

import penIconURL from './pen/pen.png';
import penInsetIconURL from './pen/pen-small.svg';

import videoSensingIconURL from './videoSensing/video-sensing.png';
import videoSensingInsetIconURL from './videoSensing/video-sensing-small.svg';

import text2speechIconURL from './text2speech/text2speech.png';
import text2speechInsetIconURL from './text2speech/text2speech-small.svg';

import translateIconURL from './translate/translate.png';
import translateInsetIconURL from './translate/translate-small.png';

import makeymakeyIconURL from './makeymakey/makeymakey.png';
import makeymakeyInsetIconURL from './makeymakey/makeymakey-small.svg';

import microbitIconURL from './microbit/microbit.png';
import microbitInsetIconURL from './microbit/microbit-small.svg';
import microbitConnectionIconURL from './microbit/microbit-illustration.svg';
import microbitConnectionSmallIconURL from './microbit/microbit-small.svg';

import ev3IconURL from './ev3/ev3.png';
import ev3InsetIconURL from './ev3/ev3-small.svg';
import ev3ConnectionIconURL from './ev3/ev3-hub-illustration.svg';
import ev3ConnectionSmallIconURL from './ev3/ev3-small.svg';

import wedo2IconURL from './wedo2/wedo.png'; // TODO: Rename file names to match variable/prop names?
import wedo2InsetIconURL from './wedo2/wedo-small.svg';
import wedo2ConnectionIconURL from './wedo2/wedo-illustration.svg';
import wedo2ConnectionSmallIconURL from './wedo2/wedo-small.svg';
import wedo2ConnectionTipIconURL from './wedo2/wedo-button-illustration.svg';

import boostIconURL from './boost/boost.png';
import boostInsetIconURL from './boost/boost-small.svg';
import boostConnectionIconURL from './boost/boost-illustration.svg';
import boostConnectionSmallIconURL from './boost/boost-small.svg';
import boostConnectionTipIconURL from './boost/boost-button-illustration.svg';

import gdxforIconURL from './gdxfor/gdxfor.png';
import gdxforInsetIconURL from './gdxfor/gdxfor-small.svg';
import gdxforConnectionIconURL from './gdxfor/gdxfor-illustration.svg';
import gdxforConnectionSmallIconURL from './gdxfor/gdxfor-small.svg';

import twIcon from './tw/tw.svg';
import customExtensionIcon from './custom/custom.svg';
import returnIcon from './custom/return.svg';
import galleryIcon from './gallery/gallery.svg';
import {APP_NAME} from '../../brand';

export default [
    {
        name: (
            <FormattedMessage
                defaultMessage="Music"
                description="Name for the 'Music' extension"
                id="gui.extension.music.name"
            />
        ),
        extensionId: 'music',
        iconURL: musicIconURL,
        insetIconURL: musicInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Play instruments and drums."
                description="Description for the 'Music' extension"
                id="gui.extension.music.description"
            />
        ),
        tags: ['scratch'],
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Pen"
                description="Name for the 'Pen' extension"
                id="gui.extension.pen.name"
            />
        ),
        extensionId: 'pen',
        iconURL: penIconURL,
        insetIconURL: penInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Draw with your sprites."
                description="Description for the 'Pen' extension"
                id="gui.extension.pen.description"
            />
        ),
        tags: ['scratch'],
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Video Sensing"
                description="Name for the 'Video Sensing' extension"
                id="gui.extension.videosensing.name"
            />
        ),
        extensionId: 'videoSensing',
        iconURL: videoSensingIconURL,
        insetIconURL: videoSensingInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Sense motion with the camera."
                description="Description for the 'Video Sensing' extension"
                id="gui.extension.videosensing.description"
            />
        ),
        tags: ['scratch'],
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Text to Speech"
                description="Name for the Text to Speech extension"
                id="gui.extension.text2speech.name"
            />
        ),
        extensionId: 'text2speech',
        collaborator: 'Amazon Web Services',
        iconURL: text2speechIconURL,
        insetIconURL: text2speechInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Make your projects talk."
                description="Description for the Text to speech extension"
                id="gui.extension.text2speech.description"
            />
        ),
        tags: ['scratch'],
        featured: true,
        internetConnectionRequired: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Translate"
                description="Name for the Translate extension"
                id="gui.extension.translate.name"
            />
        ),
        extensionId: 'translate',
        collaborator: 'Google',
        iconURL: translateIconURL,
        insetIconURL: translateInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Translate text into many languages."
                description="Description for the Translate extension"
                id="gui.extension.translate.description"
            />
        ),
        tags: ['scratch'],
        featured: true,
        internetConnectionRequired: true
    },
    {
        name: 'Makey Makey',
        extensionId: 'makeymakey',
        collaborator: 'JoyLabz',
        iconURL: makeymakeyIconURL,
        insetIconURL: makeymakeyInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Make anything into a key."
                description="Description for the 'Makey Makey' extension"
                id="gui.extension.makeymakey.description"
            />
        ),
        tags: ['scratch'],
        featured: true
    },
    {
        name: 'micro:bit',
        extensionId: 'microbit',
        collaborator: 'micro:bit',
        iconURL: microbitIconURL,
        insetIconURL: microbitInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Connect your projects with the world."
                description="Description for the 'micro:bit' extension"
                id="gui.extension.microbit.description"
            />
        ),
        tags: ['scratch'],
        featured: true,
        disabled: false,
        bluetoothRequired: true,
        internetConnectionRequired: true,
        launchPeripheralConnectionFlow: true,
        useAutoScan: false,
        connectionIconURL: microbitConnectionIconURL,
        connectionSmallIconURL: microbitConnectionSmallIconURL,
        connectingMessage: (
            <FormattedMessage
                defaultMessage="Connecting"
                description="Message to help people connect to their micro:bit."
                id="gui.extension.microbit.connectingMessage"
            />
        ),
        helpLink: 'https://scratch.mit.edu/microbit'
    },
    {
        name: 'LEGO MINDSTORMS EV3',
        extensionId: 'ev3',
        collaborator: 'LEGO',
        iconURL: ev3IconURL,
        insetIconURL: ev3InsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Build interactive robots and more."
                description="Description for the 'LEGO MINDSTORMS EV3' extension"
                id="gui.extension.ev3.description"
            />
        ),
        tags: ['scratch'],
        featured: true,
        disabled: false,
        bluetoothRequired: true,
        internetConnectionRequired: true,
        launchPeripheralConnectionFlow: true,
        useAutoScan: false,
        connectionIconURL: ev3ConnectionIconURL,
        connectionSmallIconURL: ev3ConnectionSmallIconURL,
        connectingMessage: (
            <FormattedMessage
                defaultMessage="Connecting. Make sure the pin on your EV3 is set to 1234."
                description="Message to help people connect to their EV3. Must note the PIN should be 1234."
                id="gui.extension.ev3.connectingMessage"
            />
        ),
        helpLink: 'https://scratch.mit.edu/ev3'
    },
    {
        name: 'LEGO BOOST',
        extensionId: 'boost',
        collaborator: 'LEGO',
        iconURL: boostIconURL,
        insetIconURL: boostInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Bring robotic creations to life."
                description="Description for the 'LEGO BOOST' extension"
                id="gui.extension.boost.description"
            />
        ),
        tags: ['scratch'],
        featured: true,
        disabled: false,
        bluetoothRequired: true,
        internetConnectionRequired: true,
        launchPeripheralConnectionFlow: true,
        useAutoScan: true,
        connectionIconURL: boostConnectionIconURL,
        connectionSmallIconURL: boostConnectionSmallIconURL,
        connectionTipIconURL: boostConnectionTipIconURL,
        connectingMessage: (
            <FormattedMessage
                defaultMessage="Connecting"
                description="Message to help people connect to their BOOST."
                id="gui.extension.boost.connectingMessage"
            />
        ),
        helpLink: 'https://scratch.mit.edu/boost'
    },
    {
        name: 'LEGO Education WeDo 2.0',
        extensionId: 'wedo2',
        collaborator: 'LEGO',
        iconURL: wedo2IconURL,
        insetIconURL: wedo2InsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Build with motors and sensors."
                description="Description for the 'LEGO WeDo 2.0' extension"
                id="gui.extension.wedo2.description"
            />
        ),
        tags: ['scratch'],
        featured: true,
        disabled: false,
        bluetoothRequired: true,
        internetConnectionRequired: true,
        launchPeripheralConnectionFlow: true,
        useAutoScan: true,
        connectionIconURL: wedo2ConnectionIconURL,
        connectionSmallIconURL: wedo2ConnectionSmallIconURL,
        connectionTipIconURL: wedo2ConnectionTipIconURL,
        connectingMessage: (
            <FormattedMessage
                defaultMessage="Connecting"
                description="Message to help people connect to their WeDo."
                id="gui.extension.wedo2.connectingMessage"
            />
        ),
        helpLink: 'https://scratch.mit.edu/wedo'
    },
    {
        name: 'Go Direct Force & Acceleration',
        extensionId: 'gdxfor',
        collaborator: 'Vernier',
        iconURL: gdxforIconURL,
        insetIconURL: gdxforInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Sense push, pull, motion, and spin."
                description="Description for the Vernier Go Direct Force and Acceleration sensor extension"
                id="gui.extension.gdxfor.description"
            />
        ),
        tags: ['scratch'],
        featured: true,
        disabled: false,
        bluetoothRequired: true,
        internetConnectionRequired: true,
        launchPeripheralConnectionFlow: true,
        useAutoScan: false,
        connectionIconURL: gdxforConnectionIconURL,
        connectionSmallIconURL: gdxforConnectionSmallIconURL,
        connectingMessage: (
            <FormattedMessage
                defaultMessage="Connecting"
                description="Message to help people connect to their force and acceleration sensor."
                id="gui.extension.gdxfor.connectingMessage"
            />
        ),
        helpLink: 'https://scratch.mit.edu/vernier'
    },
    {
        // not really an extension, but it's easiest to present it as one
        name: (
            <FormattedMessage
                defaultMessage="Custom Reporters"
                description="Name of custom reporters extension"
                id="tw.customReporters.name"
            />
        ),
        extensionId: 'procedures_enable_return',
        iconURL: returnIcon,
        description: (
            <FormattedMessage
                defaultMessage="Allow custom blocks to output values and be used as inputs."
                description="Description of custom reporters extension"
                id="tw.customReporters.description"
            />
        ),
        tags: ['tw'],
        incompatibleWithScratch: true,
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="{APP_NAME} Blocks"
                description="Name of the strange 'TurboWarp Blocks' extension"
                id="tw.twExtension.name"
                values={{
                    APP_NAME
                }}
            />
        ),
        extensionId: 'tw',
        iconURL: twIcon,
        description: (
            <FormattedMessage
                defaultMessage="Weird new blocks."
                description="Description of the strange 'TurboWarp Blocks' extension"
                id="tw.twExtension.description"
            />
        ),
        incompatibleWithScratch: true,
        tags: ['tw'],
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Captchas"
                description="Simple Client-Based Captchas, this does not promise 100% security"
                id="captchas.name"
                values={{
                    APP_NAME
                }}
            />
        ),
        extensionId: 'https://sharkpools-extensions.vercel.app/extension-code/Captchas.js',
        iconURL: "https://sharkpools-extensions.vercel.app/extension-thumbs/Captchas.svg",
        description: (
            <FormattedMessage
                defaultMessage="Simple Client-Based Captchas, this does not promise 100% security"
                description="Simple Client-Based Captchas, this does not promise 100% security"
                id="captchas.description"
            />
        ),
        incompatibleWithScratch: true,
        tags: ['se'],
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Sty-Lists"
                description="Customize and Organize List Monitors"
                id="sty-lists.name"
                values={{
                    APP_NAME
                }}
            />
        ),
        extensionId: 'https://sharkpools-extensions.vercel.app/extension-code/Sty-Lists.js',
        iconURL: "https://sharkpools-extensions.vercel.app/extension-thumbs/Sty-Lists.svg",
        description: (
            <FormattedMessage
                defaultMessage="Customize and Organize List Monitors"
                description="Sty-Lists"
                id="sty-lists.description"
            />
        ),
        incompatibleWithScratch: true,
        tags: ['se'],
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Variables Expanded"
                description="New Variable Blocks and New Variable Monitors"
                id="ve.name"
                values={{
                    APP_NAME
                }}
            />
        ),
        extensionId: 'https://sharkpools-extensions.vercel.app/extension-code/Variables-Expanded.js',
        iconURL: "https://sharkpools-extensions.vercel.app/extension-thumbs/Variables-Expanded.svg",
        description: (
            <FormattedMessage
                defaultMessage="New Variable Blocks and New Variable Monitors"
                description="Sty-Lists"
                id="ve.description"
            />
        ),
        incompatibleWithScratch: true,
        tags: ['se'],
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Variables Expanded"
                description="New Variable Blocks and New Variable Monitors"
                id="ve.name"
                values={{
                    APP_NAME
                }}
            />
        ),
        extensionId: 'https://sharkpools-extensions.vercel.app/extension-code/Variables-Expanded.js',
        iconURL: "https://sharkpools-extensions.vercel.app/extension-thumbs/Variables-Expanded.svg",
        description: (
            <FormattedMessage
                defaultMessage="New Variable Blocks and New Variable Monitors"
                description="Sty-Lists"
                id="ve.description"
            />
        ),
        incompatibleWithScratch: true,
        tags: ['se'],
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Popup Phoenix"
                description="New Variable Blocks and New Variable Monitors"
                id="pp.name"
                values={{
                    APP_NAME
                }}
            />
        ),
        extensionId: 'https://sharkpools-extensions.vercel.app/extension-code/Popup-Phoenix.js',
        iconURL: "https://sharkpools-extensions.vercel.app/extension-thumbs/Popup-Phoenix.svg",
        description: (
            <FormattedMessage
                defaultMessage="Create and design custom Popups! A remaster of 'Better Input'"
                description="Sty-Lists"
                id="pp.description"
            />
        ),
        incompatibleWithScratch: true,
        tags: ['se'],
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Better Input ⚠️"
                description="New Variable Blocks and New Variable Monitors"
                id="bi.name"
                values={{
                    APP_NAME
                }}
            />
        ),
        extensionId: 'https://sharkpools-extensions.vercel.app/extension-code/Better-Input.js',
        iconURL: "https://sharkpools-extensions.vercel.app/extension-thumbs/Better-Input.svg",
        description: (
            <FormattedMessage
                defaultMessage="Expansion of the 'Ask and Wait' Block. Deprecated, please use Popup-Phoenix'"
                description="Sty-Lists"
                id="bi.description"
            />
        ),
        incompatibleWithScratch: true,
        tags: ['se'],
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="My Blocks Plus"
                description="New Variable Blocks and New Variable Monitors"
                id="mbp.name"
                values={{
                    APP_NAME
                }}
            />
        ),
        extensionId: 'https://sharkpools-extensions.vercel.app/extension-code/My-Blocks-Plus.js',
        iconURL: "https://sharkpools-extensions.vercel.app/extension-thumbs/My-Blocks-Plus.svg",
        description: (
            <FormattedMessage
                defaultMessage="Better Custom Blocks'"
                description="Sty-Lists"
                id="mbp.description"
            />
        ),
        incompatibleWithScratch: true,
        tags: ['se'],
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Better Comments"
                description="Better Comments with Color and Text Customization"
                id="bc.name"
                values={{
                    APP_NAME
                }}
            />
        ),
        extensionId: 'https://sharkpools-extensions.vercel.app/extension-code/Better-Comments.js',
        iconURL: "https://sharkpools-extensions.vercel.app/extension-thumbs/Better-Comments.svg",
        description: (
            <FormattedMessage
                defaultMessage="Better Comments with Color and Text Customization"
                description="Sty-Lists"
                id="bc.description"
            />
        ),
        incompatibleWithScratch: true,
        tags: ['se'],
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Sprite Panel"
                description="Better Comments with Color and Text Customization"
                id="sp.name"
                values={{
                    APP_NAME
                }}
            />
        ),
        extensionId: 'https://sharkpools-extensions.vercel.app/extension-code/Sprite-Panel.js',
        iconURL: "https://sharkpools-extensions.vercel.app/extension-thumbs/Sprite-Panel.svg",
        description: (
            <FormattedMessage
                defaultMessage="Addon for viewing and managing Sprites and Clones"
                description="Sty-Lists"
                id="sp.description"
            />
        ),
        incompatibleWithScratch: true,
        tags: ['se'],
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Dropdown Maker"
                description="Create Custom Dropdowns! Best paired with My Blocks+"
                id="dm.name"
                values={{
                    APP_NAME
                }}
            />
        ),
        extensionId: 'https://sharkpools-extensions.vercel.app/extension-code/Dropdown-Maker.js',
        iconURL: "https://sharkpools-extensions.vercel.app/extension-thumbs/Dropdown-Maker.svg",
        description: (
            <FormattedMessage
                defaultMessage="Create Custom Dropdowns! Best paired with My Blocks+"
                description="Sty-Lists"
                id="dm.description"
            />
        ),
        incompatibleWithScratch: true,
        tags: ['se'],
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Extra Controls"
                description="New Advanced Control Blocks"
                id="ec.name"
                values={{
                    APP_NAME
                }}
            />
        ),
        extensionId: 'https://sharkpools-extensions.vercel.app/extension-code/Extra-Controls.js',
        iconURL: "https://sharkpools-extensions.vercel.app/extension-thumbs/Extra-Controls.svg",
        description: (
            <FormattedMessage
                defaultMessage="New Advanced Control Blocks"
                description="Sty-Lists"
                id="ec.description"
            />
        ),
        incompatibleWithScratch: true,
        tags: ['se'],
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="More Operators"
                description="New Advanced Control Blocks"
                id="mo.name"
                values={{
                    APP_NAME
                }}
            />
        ),
        extensionId: 'https://sharkpools-extensions.vercel.app/extension-code/More-Operators.js',
        iconURL: "https://sharkpools-extensions.vercel.app/extension-thumbs/More-Operators.svg",
        description: (
            <FormattedMessage
                defaultMessage="New Advanced Control Blocks"
                description="Sty-Lists"
                id="mo.description"
            />
        ),
        incompatibleWithScratch: true,
        tags: ['se'],
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Added-Motion"
                description="New Advanced Control Blocks"
                id="am.name"
                values={{
                    APP_NAME
                }}
            />
        ),
        extensionId: 'https://sharkpools-extensions.vercel.app/extension-code/Added-Motion.js',
        iconURL: "https://sharkpools-extensions.vercel.app/extension-thumbs/Added-Motion.svg",
        description: (
            <FormattedMessage
                defaultMessage="New Motion Blocks"
                description="Sty-Lists"
                id="am.description"
            />
        ),
        incompatibleWithScratch: true,
        tags: ['se'],
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Scratch Utilities"
                description="New Advanced Control Blocks"
                id="su.name"
                values={{
                    APP_NAME
                }}
            />
        ),
        extensionId: 'https://sharkpools-extensions.vercel.app/extension-code/Scratch-Utilities.js',
        iconURL: "https://sharkpools-extensions.vercel.app/extension-thumbs/Scratch-Utilities.svg",
        description: (
            <FormattedMessage
                defaultMessage="Blocks for fetching Scratch statistics and assets, inspired by NexusKitten's S-Grab"
                description="Sty-Lists"
                id="su.description"
            />
        ),
        incompatibleWithScratch: true,
        tags: ['se'],
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Text to Speech"
                description="New Advanced Control Blocks"
                id="ttss.name"
                values={{
                    APP_NAME
                }}
            />
        ),
        extensionId: 'https://sharkpools-extensions.vercel.app/extension-code/Text-to-Speech.js',
        iconURL: "https://sharkpools-extensions.vercel.app/extension-thumbs/Text-to-Speech.svg",
        description: (
            <FormattedMessage
                defaultMessage="Better Text to Speech using the TikTok API"
                description="Sty-Lists"
                id="ttss.description"
            />
        ),
        incompatibleWithScratch: true,
        tags: ['se'],
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Custom Extension"
                description="Name of library item to load a custom extension from a remote source"
                id="tw.customExtension.name"
            />
        ),
        extensionId: 'custom_extension',
        iconURL: customExtensionIcon,
        description: (
            <FormattedMessage
                defaultMessage="Load custom extensions from URLs, files, or JavaScript source code."
                description="Description of library item to load a custom extension from a custom source"
                id="tw.customExtension.description"
            />
        ),
        tags: ['tw'],
        featured: true
        // Not marked as incompatible with Scratch so that clicking on it doesn't show a prompt
    }
];

export const galleryLoading = {
    name: (
        <FormattedMessage
            defaultMessage="Turbowarp Extension Gallery"
            description="Name of extensions.turbowarp.org in extension library"
            id="tw.extensionGallery.name"
            values={{
                APP_NAME
            }}
        />
    ),
    href: 'https://extensions.turbowarp.org/',
    extensionId: 'gallery',
    iconURL: galleryIcon,
    description: (
        <FormattedMessage
            // eslint-disable-next-line max-len
            defaultMessage="Loading extension gallery..."
            description="Appears while loading extension list from the custom extension gallery"
            id="tw.extensionGallery.loading"
        />
    ),
    tags: ['eg'],
    featured: true
};

export const galleryMore = {
    name: (
        <FormattedMessage
            defaultMessage="Turbowarp Extension Gallery"
            description="Name of extensions.turbowarp.org in extension library"
            id="tw.extensionGallery.name"
            values={{
                APP_NAME
            }}
        />
    ),
    href: 'https://extensions.turbowarp.org/',
    extensionId: 'gallery',
    iconURL: galleryIcon,
    description: (
        <FormattedMessage
            // eslint-disable-next-line max-len
            defaultMessage="Learn more about extensions at extensions.turbowarp.org."
            description="Appears after the extension list from the gallery was loaded successfully"
            id="tw.extensionGallery.more"
        />
    ),
    tags: ['eg'],
    featured: true
};

export const galleryError = {
    name: (
        <FormattedMessage
            defaultMessage="Turbowarp Extension Gallery"
            description="Name of extensions.turbowarp.org in extension library"
            id="tw.extensionGallery.name"
            values={{
                APP_NAME
            }}
        />
    ),
    href: 'https://extensions.turbowarp.org/',
    extensionId: 'gallery',
    iconURL: galleryIcon,
    description: (
        <FormattedMessage
            // eslint-disable-next-line max-len
            defaultMessage="Error loading extension gallery. Visit extensions.turbowarp.org to find more extensions."
            description="Appears when an error occurred loading extension list from the custom extension gallery"
            id="tw.extensionGallery.error"
        />
    ),
    tags: ['eg'],
    featured: true
};
