export function validateLength(field = '', minlength = 0) {
    return field.length >= minlength ?  true : false;
  }

export function validateImageFormat(imageUrl = '') {

    if (imageUrl.length < 5) {
      return false;
    }

    // const lastFourChar = `${imageUrl[imageUrl.length - 4]}${imageUrl[imageUrl.length - 3]}${imageUrl[imageUrl.length - 2]}${imageUrl[imageUrl.length - 1]}`;
    let lastFourChar = '';
    for (let i = 4; i > 0; i--) {
      lastFourChar += imageUrl[imageUrl.length - i];
    }

    const isPng = lastFourChar === '.png';
    const isJpg = lastFourChar === '.jpg';

    if (isPng || isJpg) {
      return true;
    } else {
      return false;
    }

}

export function validateHasContent(field = '') {
    const fieldWithoutSpaces = field.trim();
    return fieldWithoutSpaces.length > 0 ?  true : false;
}

export function validateSocialNetworkUrl(socialNetwork = '', url = '') {
    if (url.includes(`https://${socialNetwork}.com/`)) {
      return true;
    } else {
      return false;
    }
}
