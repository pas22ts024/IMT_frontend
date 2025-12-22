export const formatDate = (value:string, is_datetime=false) => {
    if (value) {
        const format: Intl.DateTimeFormatOptions = is_datetime ? {
            month: "long",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit"
        } : {
            year: "numeric",
            month: "long",
            day: "numeric"
        }

        return new Intl.DateTimeFormat("ru", format).format(Date.parse(value)).replace("в ", "");
    }
}

export const formatfactor = (value:number | undefined) => {
    if (!value) {
        return "Не расчитано"
    }

    if (!value || value === -1) {
        return "Не удалось расчитать"
    }

    return value
}
