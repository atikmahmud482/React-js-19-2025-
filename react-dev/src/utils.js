// export function getImageUrl(person, size = "s") {
//   return "https://i.imgur.com/" + person.imageId + size + ".jpg";
// }

// export function getImageUrl(imageId, size = "s") {
//   return "https://i.imgur.com/" + imageId + size + ".jpg";
// }

//Adjust the image size based on a prop

export function getImageUrl(person, size) {
  return "https://i.imgur.com/" + person.imageId + size + ".jpg";
}
