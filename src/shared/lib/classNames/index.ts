type Mods = Record<string, boolean | string>

const classNames = (
    cls: string,
    mods: Mods = {},
    additional: string[] = []
): string => {
    return [
        cls,
        ...additional.filter(Boolean),
        ...Object.entries(mods)
            .filter(([key, value]) => Boolean(value))
            .map(([key, value]) => key),
    ].join(' ')
}

export { classNames }
