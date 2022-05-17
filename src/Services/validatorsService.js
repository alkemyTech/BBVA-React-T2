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
