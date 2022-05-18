export function validateLength(field = '', minlength = 0) {
    return field.length >= minlength ?  true : false;
  }

export function validateImageFormat(imageUrl = '') {

  const validFormat = /\.(png|jpg|jpeg)$/
  return validFormat.test(imageUrl);
  
}

export function validateHasContent(field = '') {
    const fieldWithoutSpaces = field.trim();
    return fieldWithoutSpaces.length > 0 ?  true : false;
}

export function validateSocialNetworkUrl(socialNetwork = '', url = '') {
    if (url.includes(`https://www.${socialNetwork}.com/`)) {
      return true;
    } else {
      return false;
    }
}

export function formatDate(dateString) {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    return (`${day}-${month}-${year} ${hours}:${minutes}`)
}
