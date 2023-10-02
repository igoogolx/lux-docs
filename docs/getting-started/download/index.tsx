import React, {useEffect, useState} from "react";
import axios from "axios";
import styles from "./index.module.css"
import WindowsSvg from "@fortawesome/fontawesome-free/svgs/brands/windows.svg"
import AppleSvg from "@fortawesome/fontawesome-free/svgs/brands/apple.svg"

function getVersionFromTag(tag: string) {
    return tag.slice(1);
}

async function getLatestTag(): Promise<string> {
    const res = await axios.get(
        `https://api.github.com/repos/igoogolx/lux/releases/latest`
    );
    return getVersionFromTag(res.data.tag_name as string)
}

function downloadRelease(os: DownloadType, tag: string) {
    let url = ""
    switch (os) {
        case DownloadType.windows: {
            url = `https://github.com/igoogolx/lux/releases/download/v${tag}/lux-${tag}+${tag}-windows-setup.exe`
            break
        }
        case DownloadType.macIntel: {
            url = `https://github.com/igoogolx/lux/releases/download/v${tag}/lux-${tag}-amd64-macos.dmg`
            break
        }
        case DownloadType.macArm: {
            url = `https://github.com/igoogolx/lux/releases/download/v${tag}/lux-${tag}-arm64-macos.dmg`
            break
        }
    }
    window.open(url, "_self")
}

export enum DownloadType {
    windows,
    macIntel,
    macArm
}


type DownloadProps = {
    type: DownloadType,
    children: React.ReactNode
}

export default function Download(props: DownloadProps) {
    const {type, children} = props
    const [latestTag, setLatestTag] = useState("")
    useEffect(() => {
        getLatestTag().then(tag => {
            setLatestTag(tag)
        })
    }, [])
    return <button onClick={
        () => {
            downloadRelease(type, latestTag)
        }
    }
                   className={styles.container}
    >
        {
            type === DownloadType.windows ?
                <WindowsSvg className={styles.icon}/> :
                <AppleSvg className={styles.icon}/>
        }
        <div className={styles.content}>
            {children}
        </div>
    </button>
}