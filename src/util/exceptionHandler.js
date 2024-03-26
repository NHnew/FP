


export default function handleException(messages) {
    let response = "";

    if (messages == null || messages.length == 0) {
        response = "Qeydiyyat ugursuz basa catdi!";
    }
    else {
        response = messages.join("");
    }
    return response;
}