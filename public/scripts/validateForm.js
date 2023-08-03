export default function validateForm() {
  if (
    (document.getElementById('create-name').value !== '' &&
      document.getElementById('create-citizenship').value !== '' &&
      document.getElementById('create-price').value !== '' &&
      document.getElementById('create-height').value !== '' &&
      document.getElementById('create-image').value !== '') ||
    (document.getElementById('edit-name').value !== '' &&
      document.getElementById('edit-citizenship').value !== '' &&
      document.getElementById('edit-price').value !== '' &&
      document.getElementById('edit-height').value !== '' &&
      document.getElementById('edit-image').value !== '')
  ) {
    return true;
  } else {
    return false;
  }
}
