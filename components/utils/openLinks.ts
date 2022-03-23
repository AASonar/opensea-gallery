export function handleTwitter(handle: string) {
  window.open(`https://twitter.com/${handle}`);
}

export function handleInstagram(handle: string) {
  window.open(`https://instagram.com/${handle}`);
}

export function handleFacebook(handle: string) {
  window.open(`https://facebook.com/${handle}`);
}

export function handleEmail(handle: string) {
  window.open(`mailto:${handle}?subject=Contacted from The Block`);
}
