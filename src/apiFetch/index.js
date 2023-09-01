const apiFetch = async (url) => {
    try {
        const responce = await fetch(url);
        return responce.json();
    } catch (error) {
        return error;
    }
}

export const suggestionBreeds=async(url)=>{
    try {
        const responce = await fetch(url);
        return responce.json();
    } catch (error) {
        return error;
    }
}
export default apiFetch;