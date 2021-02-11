export const required = value => {
    let result = value ? undefined : "Обязательное поле"
    return result
}

const maxLength = max => value => {
    return value && value.length <= max ? undefined : `Максимальная длина ${max} символов`
}
export const maxLength15 = maxLength(15)

const minLength = min => value => {
    return value && value.length >= min ? undefined : `Минимальная длина ${min} символов`
}
export const minLength2 = minLength(2)



