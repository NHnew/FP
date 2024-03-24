


export default function handleException(message, defaultMessage = null) {
    const response = "";

    if (messages == null || messages.length == 0) {
        response = "Qeydiyyat ugursuz basa catdi!";
    }
    else {
        response = messages.join("");
    }
    return response;
}