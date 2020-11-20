export default function vaidalteInfo(values) {
    let errors = {};
    // const reg = !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i;

    if (!values.email) {
        errors.email = "Adres e-mail jest wymagany"
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = "Adres jest niepoprawny"
    }

    if (!values.password) {
        errors.password = "Hasło jest wymagane"
    } else if (values.password.length < 6) {
        errors.password = "Hasło musi mieć minimum 6 znaków"
    }

    return errors;
}