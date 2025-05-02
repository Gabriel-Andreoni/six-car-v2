export async function reqAPI(formData:FormData) {
    const response = await fetch('/api/cars', {
        method: 'POST',
        body: formData
    });

    return console.log(response.status);
}