export async function reqAPI(formData:FormData) {
    const response = await fetch('http://localhost:3000/api/cars', {
        method: 'POST',
        body: formData
    });

    return console.log(response.status);
}