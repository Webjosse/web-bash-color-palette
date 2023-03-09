private interface BashRawStyle {
    name: string;
    code: string;
    whiteFrame?: boolean;
    blackText?: boolean;
}

export interface BashNotColor extends BashRawStyle {
    customStyle: string
}

export interface BashColor extends BashRawStyle {
    cssCode: string;
    foreground: boolean;
}

export type BashStyle = BashColor | BashNotColor;